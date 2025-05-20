#!/bin/bash
set -e

# Remove existing Gemfile and lock
rm -f Gemfile Gemfile.lock

# Copy the simple Gemfile
cp Gemfile.simple Gemfile

# Install dependencies and build
bundle install
bundle exec jekyll build