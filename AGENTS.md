# AGENTS.md

Instructions for future AI coding agents working on this personal website.

## Product Direction

- Preserve the minimal, senior, professional design language.
- Keep the site light-first, readable, fast, accessible, and uncluttered.
- Avoid flashy startup-style layouts, noisy animation, exaggerated claims, emojis, and buzzword-heavy copy.
- Keep the tone expert, honest, practical, approachable, and evidence-based.

## Architecture

- Use Astro static generation.
- Use TypeScript where it improves maintainability.
- Use Tailwind CSS for styling.
- Keep dependencies minimal.
- Prefer simple Markdown and JSON content over hardcoded component copy.
- Keep profile data in `src/data/`.
- Keep projects, articles, and certifications in `src/content/`.

## Content Safety

- Do not invent employers, clients, certifications, metrics, awards, or achievements.
- Use explicit pending notes when information is missing.
- Do not commit private source files such as raw CV exports, internal screenshots, confidential diagrams, credentials, or client material.
- Only add a CV download when a public-safe version is explicitly provided.

## Change Discipline

- Make small, reviewable changes.
- Prefer pull requests for meaningful updates.
- Avoid broad rewrites unless requested.
- Keep components generic and content-driven.
- Do not add unnecessary dependencies, frameworks, CMS tools, tracking scripts, or paid-hosting assumptions.
- Preserve GitHub Pages compatibility.

## Deployment

- Do not touch DNS or custom domain configuration unless explicitly asked.
- Document custom-domain steps at a high level only until the site is ready to replace the current public site.
