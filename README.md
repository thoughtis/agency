# Thought Catalog Agency Website

Pushing to main deploys to production, and pushing to dev deploys to dev/qa site.

## Setup

- To collaborate, you should [set up Netlify Large Media](https://docs.netlify.com/large-media/overview/#large-media-docs).
- Make sure to run `git lfs install` before `netlify lm:setup`
### Large Media

We are using Netlify Large Media, which requires Git LFS, for two reasons:
- We have lots of images
- We can request the images from Netlify at any size, which should be helpful for responsive images

