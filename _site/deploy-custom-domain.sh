#!/bin/bash
set -e

# Configure for custom domain (chrismaree.dev)
echo "Setting up for custom domain deployment..."
cat > _config.custom.yml << EOL
# For custom domain
baseurl: ""  # Empty for custom domain
url: "https://chrismaree.dev"
EOL

# Build the site
bundle exec jekyll build --config _config.yml,_config.custom.yml

# Make sure CNAME file exists
if [ ! -f "_site/CNAME" ]; then
  echo "Creating CNAME file..."
  echo "chrismaree.dev" > _site/CNAME
fi

# Fix paths for custom domain (no /PersonalWebsite/ prefix needed)
for file in $(find _site -name "*.html"); do
  echo "Processing: $file"
  
  # Ensure Bootstrap CSS is included
  if ! grep -q "bootstrap" "$file"; then
    sed -i '' 's/<head>/<head>\n  <link rel="stylesheet" href="https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.5\/css\/bootstrap.min.css">/' "$file"
  fi
  
  # Remove any /PersonalWebsite/ prefixes that might exist in paths
  sed -i '' 's|href="/PersonalWebsite/|href="/|g' "$file"
  sed -i '' 's|src="/PersonalWebsite/|src="/|g' "$file"
done

# Create FontAwesome CSS if it doesn't exist
mkdir -p _site/assets/css
if [ ! -f "_site/assets/css/custom-icons.css" ]; then
  echo '@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");' > _site/assets/css/custom-icons.css
fi

echo "Setup complete for custom domain. Now you can commit and push to GitHub."
echo "Your site should be available at https://chrismaree.dev"