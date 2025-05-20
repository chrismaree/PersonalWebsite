#!/bin/bash
set -e

# Configure for local development
echo "Setting up for local development..."
cat > _config.custom.yml << EOL
# Override settings for local testing
baseurl: ""  # Empty for local testing
url: "http://localhost:8000"

# For GitHub Pages project site (uncomment when deploying)
# baseurl: "/PersonalWebsite"  # This is for GitHub Pages project site
# url: "https://chrismaree.github.io"

# For custom domain (if you set this up later)
# baseurl: ""  # Empty for custom domain
# url: "https://chrismaree.dev"
EOL

# Build the site
bundle exec jekyll build --config _config.yml,_config.custom.yml

# Fix assets if needed
for file in _site/index.html _site/creations.html; do
  # Ensure Bootstrap CSS is included
  if ! grep -q "bootstrap" "$file"; then
    sed -i '' 's/<head>/<head>\n  <link rel="stylesheet" href="https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.5\/css\/bootstrap.min.css">/' "$file"
  fi
  
  # Fix any remaining /PersonalWebsite paths for local testing
  sed -i '' 's|href="/PersonalWebsite/|href="/|g' "$file"
  sed -i '' 's|src="/PersonalWebsite/|src="/|g' "$file"
done

# Create FontAwesome CSS if it doesn't exist
mkdir -p _site/assets/css
if [ ! -f "_site/assets/css/custom-icons.css" ]; then
  echo '@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");' > _site/assets/css/custom-icons.css
fi

echo "Setup complete. Run 'cd _site && python -m http.server 8000' to start the local server."