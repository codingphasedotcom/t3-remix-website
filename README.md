# T3 Remix website

The website and documentation for [T3 Remix](https://github.com/codingphasedotcom/t3-remix), an open-source fork of [T3 Code](https://github.com/pingdotgg/t3code) that turns your coding agents into a company: a CEO, an org chart, and a board where agents plan, build, review, and ship your tasks.

Built with [Astro](https://astro.build) as a fully static site.

## Develop

Requires Node 22.12 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally
```

## Deploy to Vercel

Import this repository in Vercel. The framework, build command, and output folder are set in `vercel.json`, so no configuration is needed. Absolute URLs (canonical links, social cards) use the Vercel production domain automatically; set `SITE_URL` to use a custom domain instead.

## Edit the docs

Docs are Markdown files in `src/content/docs/`. Each file needs frontmatter:

```yaml
---
title: The board
description: One sentence shown under the title and in search results.
section: Agent companies # Get started, Agent companies, or Reference
order: 3 # position within its section
---
```

The sidebar, previous and next links, and the "On this page" list are generated from these files. Every docs page links to its source with "Edit this page on GitHub".

## Project layout

```
src/
  components/   Nav, footer, icons, and the landing page previews
  content/docs/ Documentation pages (Markdown)
  layouts/      Base and docs layouts
  lib/          Site links and docs helpers
  pages/        Landing page, docs route, 404
  styles/       Global tokens and base styles
public/         Icons, social card, and employee faces
```

The employee faces in `public/faces/` are AI-generated headshots from the T3 Remix repository; they show no real people.

## License

MIT. See [LICENSE](LICENSE). T3 Code is made by T3 Tools Inc. and is also MIT licensed; T3 Remix is an independent fork.
