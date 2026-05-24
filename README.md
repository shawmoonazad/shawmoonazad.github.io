# Md Shawmoon Azad Portfolio

This repository contains the source for <https://shawmoonazad.github.io/>.

## Edit The Site

- About page: `_pages/about.md`
- Publications: `_bibliography/papers.bib`
- Projects: `_projects/*.md`
- Teaching: `_pages/teaching.md`
- People: `_pages/people.md`
- Achievements: `_pages/achievements.md`
- News: `_news/*.md`
- Main styling: `_sass/_base.scss`, `_sass/_themes.scss`, `_sass/_variables.scss`
- Images: `assets/img/`

## Usual Update Flow

1. Edit the source files above.
2. Commit the changes on `main`.
3. Push to GitHub.
4. GitHub Actions builds the Jekyll site and deploys it to GitHub Pages.

The checked-in generated HTML folders are kept only so the local desktop folder mirrors the deployed site. Edit the `_pages`, `_projects`, `_bibliography`, `_news`, `_sass`, and `assets` source files first.
