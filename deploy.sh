#!/bin/bash
set -e

# Configure for GitHub Pages
echo "Setting up for GitHub Pages deployment..."
cat > _config.custom.yml << EOL
# For GitHub Pages project site
baseurl: "/PersonalWebsite"  # This is for GitHub Pages project site
url: "https://chrismaree.github.io"

# For custom domain (if you set this up later)
# baseurl: ""  # Empty for custom domain
# url: "https://chrismaree.dev"
EOL

# Build the site
bundle exec jekyll build --config _config.yml,_config.custom.yml

# Fix paths for GitHub Pages
for file in _site/index.html _site/creations.html; do
  # Ensure Bootstrap CSS is included
  if ! grep -q "bootstrap" "$file"; then
    sed -i '' 's/<head>/<head>\n  <link rel="stylesheet" href="https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.5\/css\/bootstrap.min.css">/' "$file"
  fi
  
  # Fix asset paths for GitHub Pages project site
  sed -i '' 's|href="/assets|href="/PersonalWebsite/assets|g' "$file"
  sed -i '' 's|src="/assets|src="/PersonalWebsite/assets|g' "$file"
  sed -i '' 's|href="/images|href="/PersonalWebsite/images|g' "$file"
  sed -i '' 's|src="/images|src="/PersonalWebsite/images|g' "$file"
  
  # Fix navigation links
  sed -i '' 's|href="/">|href="/PersonalWebsite/">|g' "$file"
  sed -i '' 's|href="/creations"|href="/PersonalWebsite/creations.html"|g' "$file"
done

# Create FontAwesome CSS if it doesn't exist
mkdir -p _site/assets/css
if [ ! -f "_site/assets/css/custom-icons.css" ]; then
  echo '@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");' > _site/assets/css/custom-icons.css
fi

echo "Setup complete. Now you can commit and push to GitHub."