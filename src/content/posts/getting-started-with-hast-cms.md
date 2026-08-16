---
title: "Getting Started with HAST CMS"
description: "A step-by-step guide to setting up HAST CMS locally, understanding the project structure, and publishing your first blog post."
date: 2026-08-16
author: "HAST CMS"
category: "Documentation"
tags:
  - getting-started
  - setup
  - guide
series: "HAST CMS Documentation"
seriesOrder: 1
featured: true
draft: false
toc: true
---

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) — version 18 or later
- [Git](https://git-scm.com/)
- A text editor (VS Code, Neovim, or any editor you prefer)

---

## Project Structure

After cloning the repository, the project has the following layout:

```
HAST-CMS/
├── src/
│   ├── content/
│   │   ├── posts/          ← your blog posts live here
│   │   ├── pages/          ← static pages (About, Disclaimer)
│   │   ├── authors/        ← author data files
│   │   └── settings/
│   │       └── site.md     ← site name, description, and branding
│   ├── config/
│   │   └── site.ts         ← structural config (URL, navigation, analytics)
│   ├── layouts/            ← page and post layouts
│   ├── pages/              ← Astro route pages
│   ├── styles/             ← global CSS
│   └── utils/              ← helper functions
├── templates/
│   └── post.md             ← post template used by `npm run new:post`
├── scripts/
│   ├── new-post.js         ← creates a new post from the template
│   └── validate-content.js ← validates frontmatter before building
├── public/                 ← static assets (favicon, images)
├── astro.config.mjs        ← Astro configuration
└── package.json
```

---

## Installing Dependencies

Clone the repository and install packages:

```bash
git clone <your-repository-url>
cd HAST-CMS
npm install
```

---

## Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser. The site reloads automatically when you save changes to posts or settings.

---

## Your First Post

The fastest way to create a post is with the built-in script:

```bash
npm run new:post "My First Post"
```

This creates `src/content/posts/my-first-post.md` pre-filled with the post template, with `draft: true` set so it won't appear publicly until you're ready.

Open the file, fill in the frontmatter fields, write your article body, and when ready set `draft: false`.

---

## Building the Site

To generate the final static HTML output:

```bash
npm run build
```

The built site is placed in the `dist/` directory.

To preview the built output locally before deploying:

```bash
npm run preview
```

---

## Validating Content

Before building, you can run the content validator to catch missing required fields or duplicate slugs:

```bash
npm run validate
```

---

## Deploying

Push to GitHub and your configured CI/CD pipeline (GitHub Actions) builds and deploys the site automatically.

```bash
git add .
git commit -m "initial setup"
git push
```

See [How to Create a New Blog Post](/posts/how-to-create-a-new-blog-post/) for the full publishing workflow.
