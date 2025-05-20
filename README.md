# Personal Website - chrismaree.dev

My personal website built with Jekyll and hosted on GitHub Pages.

## Local Development

To run the site locally:

```bash
# Install dependencies
BUNDLE_GEMFILE=Gemfile.simple bundle install

# For local development (default configuration)
BUNDLE_GEMFILE=Gemfile.simple bundle exec jekyll serve --config _config.yml,_config.local.yml

# To test with GitHub Pages URL structure
BUNDLE_GEMFILE=Gemfile.simple bundle exec jekyll build --config _config.yml,_config.github.yml

# To test with custom domain configuration
BUNDLE_GEMFILE=Gemfile.simple bundle exec jekyll build --config _config.yml,_config.custom.yml
```

The site will be available at http://localhost:4000

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the master branch.

To deploy manually:

1. Build the site: `bundle exec jekyll build`
2. Commit and push changes to the master branch
3. GitHub Pages will automatically build and deploy the site