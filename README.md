# Personal Website - chrismaree.dev

My personal website built with Jekyll and hosted on GitHub Pages.

## Local Development

To run the site locally:

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve
```

The site will be available at http://localhost:4000

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the master branch.

To deploy manually:

1. Build the site: `bundle exec jekyll build`
2. Commit and push changes to the master branch
3. GitHub Pages will automatically build and deploy the site