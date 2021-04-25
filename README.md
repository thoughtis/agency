# Thought Catalog Agency Website

Pushing to main deploys to production, and pushing to dev deploys to dev/qa site.

## Setup

- To collaborate, you should [set up Netlify Large Media](https://docs.netlify.com/large-media/overview/#large-media-docs).
### Large Media

We are using Netlify Large Media, which requires Git LFS, for two reasons:
- We have lots of images
- We can request the images from Netlify at any size, which should be helpful for responsive images

Todo: I ran the command `git lfs track "src/lfs/**"` to track anything we put in that folder, but I'm not sure yet if we'll have to run that command for newly-added files. If so, can add that cmd to a pre-commit hook