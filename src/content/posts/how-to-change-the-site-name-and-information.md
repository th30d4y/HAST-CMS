---
title: "How to Change the Site Name and Information"
description: "Learn how to update the site name, author, description, and other branding in HAST CMS by editing a single Markdown file."
date: 2026-08-16
author: "HAST CMS"
category: "Documentation"
tags:
  - configuration
  - branding
  - settings
series: "HAST CMS Documentation"
seriesOrder: 4
draft: false
toc: true
---

## The Settings File

All visible site branding is controlled by a single file:

```
src/content/settings/site.md
```

Open this file in any text editor. You will see a frontmatter block at the top:

```yaml
---
siteName: "HAST CMS"
author: "HAST CMS"
authorRole: "Git-based Markdown Publishing"
authorBio: "HAST CMS is a minimalist, Git-based Markdown publishing system. Write in Markdown, commit to Git, and publish as static HTML."
siteDescription: "A minimalist, Git-based Markdown publishing system."
---
```

Edit the values between the quotes and save the file. That is all that is required.

---

## What Each Field Controls

| Field | Where it appears |
|---|---|
| `siteName` | Header logo, browser tab title, RSS feed title, Open Graph `site_name` |
| `author` | Footer, post bylines, meta `author` tag, JSON-LD structured data |
| `authorRole` | Footer subtitle, author page |
| `authorBio` | Author page, post footer author box |
| `siteDescription` | Homepage subtitle, default meta description, JSON feed description |

---

## Example: Renaming the Site

To rename the site from **HAST CMS** to **My Tech Blog**:

```yaml
---
siteName: "My Tech Blog"
author: "Your Name"
authorRole: "Developer · Writer"
authorBio: "I write about software development, tools, and technical topics."
siteDescription: "Notes on software development and the tools I use."
---
```

Save the file, then rebuild:

```bash
git add src/content/settings/site.md
git commit -m "config: rename site to My Tech Blog"
git push
```

The site name updates everywhere automatically on the next build.

---

## Structural Settings

The settings file controls branding only. Structural configuration — the deployed URL, navigation items, pagination, and analytics — lives in:

```
src/config/site.ts
```

Fields you may want to update there:

| Field | Description |
|---|---|
| `siteURL` | The full URL of your deployed site (used in canonical URLs and feeds) |
| `navigation` | The top navigation links |
| `social.github` | GitHub profile URL shown in the footer |
| `postsPerPage` | Number of posts shown per page on the blog index |
| `analytics` | Analytics provider configuration (disabled by default) |

`site.ts` is a TypeScript file — values must be valid JavaScript strings and booleans.

---

## Previewing the Changes

```bash
npm run dev
```

Open `http://localhost:4321` and verify the site name and description appear correctly in the header, footer, and browser tab.
