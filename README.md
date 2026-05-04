# rafa-site

Personal website for Rafael Vera Maranon, built with Astro, Tailwind CSS, and Markdown content. The site is static, fast, and ready for GitHub Pages.

## Local Development

Recommended local runtime:

- Node.js 22.12.0 or newer

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content Structure

Reusable profile information lives in:

- `src/data/profile.json`
- `src/data/social-links.json`

Markdown content lives in:

- `src/content/projects/`
- `src/content/articles/`
- `src/content/certifications/`

Most updates should be possible by editing those files, without changing Astro components.

## Add A Project

Create a new Markdown file in `src/content/projects/`, for example:

```md
---
title: "Data Platform Modernization"
description: "Short, plain-language summary."
context: "Where this work fits."
problem: "The problem or constraint."
solution: "What was designed or delivered."
stack:
  - Azure
  - Databricks
  - Terraform
impact: "Measured or observed impact, if public-safe."
tags:
  - Data platform
  - Lakehouse
links:
  - label: "Repository"
    url: "https://github.com/example/repo"
---

Optional longer notes can go here.
```

Do not include private client names, internal architecture details, credentials, or screenshots unless they are explicitly approved for publication.

## Add An Article

Create a new Markdown file in `src/content/articles/`, for example:

```md
---
title: "Article Title"
date: "2026-05-01"
source: "Medium"
summary: "Short summary of the article."
externalUrl: "https://medium.com/@jr.vera.ma/example"
tags:
  - Databricks
  - Azure
---
```

Use `externalUrl` for LinkedIn, Medium, or any other external platform.

## Add A Certification

Create a new Markdown file in `src/content/certifications/`, for example:

```md
---
name: "Certification Name"
issuer: "Issuer"
date: "2026"
credentialUrl: "https://example.com/credential"
status: "Active"
tags:
  - Azure
---
```

Only publish certifications that are accurate and safe to share publicly.

## GitHub Pages Deployment

This repository includes `.github/workflows/deploy.yml`.

To enable deployment:

1. Push the repository to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Set `Build and deployment` to `GitHub Actions`.
5. Push to `main`.

The workflow builds the Astro site and publishes the `dist/` output to GitHub Pages.

The Astro config automatically uses the repository name as the base path when building on GitHub Actions. The default Pages URL will look like:

```text
https://<github-user>.github.io/<repository-name>/
```

## Custom Domain Later

Do not configure DNS yet.

When you are ready to replace the current Carrd site:

1. Decide the final domain or subdomain.
2. Add that domain in GitHub repository `Settings` -> `Pages` -> `Custom domain`.
3. Add the required DNS records at your DNS provider, following GitHub Pages documentation.
4. Set the production `SITE_URL` and `BASE_PATH=/` during deployment if needed.
5. Enable HTTPS in GitHub Pages after DNS is verified.

Keep the Carrd setup unchanged until the GitHub Pages site is reviewed and ready to become the public site.

## License

The site code is licensed under the MIT License.

Personal content, project descriptions, articles, profile data, CV material, images, documents, and other assets are not covered by the MIT License and remain all rights reserved unless stated otherwise. See `LICENSE` for details.

## Personal Content Still Needed

The first version now uses the CV and public Medium material where it could be verified. Please provide:

- Public-safe CV file or URL, if you want a download link.
- Final About copy refinements, if you want a different emphasis.
- Public-safe project examples with context, problem, solution, stack, and impact.
- Certification issue dates and public credential URLs.
