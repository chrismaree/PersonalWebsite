#!/bin/bash
# Very simple build script for Netlify that skips Python
set -e

# Don't attempt to use Python
export NETLIFY_SKIP_PYTHON=true

# Ensure _site directory exists
mkdir -p _site

# If _site directory is empty, copy content from the root
if [ ! "$(ls -A _site 2>/dev/null)" ]; then
  echo "Copying content to _site directory..."
  cp -r * _site/ 2>/dev/null || true
  # Clean up any unnecessary files in _site
  rm -rf _site/_site _site/build-netlify.sh _site/.git* 2>/dev/null || true
fi

# Create a timestamp file to confirm build ran
echo "Build completed at $(date)" > _site/build-info.txt

# Always exit with success
exit 0