#!/bin/bash
# Very simple build script for Netlify
set -e

# Ensure _site directory exists
mkdir -p _site

# Copy existing content if any
if [ -f "index.html" ]; then
  cp -R * _site/ 2>/dev/null || true
fi

# Create a timestamp to confirm build ran
echo "Build completed at $(date)" > _site/build-info.txt

# Always exit with success
exit 0