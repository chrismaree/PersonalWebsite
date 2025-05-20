#!/bin/bash
set -e

# Install dependencies and build
bundle install
bundle exec jekyll build --config _config.yml,_config.custom.yml

# Check if FontAwesome CSS is properly included
if ! grep -q "font-awesome.*[.]css" _site/index.html; then
  echo "Adding FontAwesome CSS..."
  
  # Create CSS directory if it doesn't exist
  mkdir -p _site/assets/css
  
  # Add Font Awesome CSS
  cat > _site/assets/css/custom-icons.css << EOL
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
EOL
fi

# Fix paths in HTML files for GitHub Pages
echo "Fixing paths in HTML files..."
find _site -name "*.html" | while read file; do
  echo "Processing: $file"
  
  # Add Bootstrap CSS if not present
  if ! grep -q "bootstrap" "$file"; then
    sed -i '' 's/<head>/<head>\n  <link rel="stylesheet" href="https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.5\/css\/bootstrap.min.css">/' "$file"
  fi
  
  # Convert relative asset links to absolute URLs
  sed -i '' 's/href="\/assets/href="\/PersonalWebsite\/assets/g' "$file"
  sed -i '' 's/src="\/assets/src="\/PersonalWebsite\/assets/g' "$file"
  sed -i '' 's/href="\/images/href="\/PersonalWebsite\/images/g' "$file"
  sed -i '' 's/src="\/images/src="\/PersonalWebsite\/images/g' "$file"
  
  # Fix navigation links
  sed -i '' 's/href="\/">/href="\/PersonalWebsite\/">/g' "$file"
  sed -i '' 's|href="/creations"|href="/PersonalWebsite/creations.html"|g' "$file"
  sed -i '' 's|href="/creations.html"|href="/PersonalWebsite/creations.html"|g' "$file"
done

echo "Build completed successfully!"