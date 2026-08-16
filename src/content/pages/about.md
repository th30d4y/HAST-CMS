---
title: "About HAST CMS"
description: "HAST CMS is a minimalist, Git-based Markdown publishing system for creating and managing static blog posts without a traditional database or admin dashboard."
updated: 2026-08-16
---

## What Is HAST CMS?

HAST CMS is a minimalist, Git-based Markdown publishing system. It lets you create, edit, and publish blog posts by writing plain Markdown files and committing them to a Git repository — no database, no admin panel, no backend required.

The site is generated as a static website using [Astro](https://astro.build). Every post is a `.md` file. Every change is a Git commit.

---

## How HAST CMS Works

The entire publishing workflow runs through your file system and Git:

1. **Create** a new Markdown file in `src/content/posts/`.
2. **Add frontmatter** at the top of the file — title, description, date, category, tags, and other metadata.
3. **Write the article** using standard Markdown below the frontmatter.
4. **Commit** the file to Git.
5. **Push** to GitHub.
6. **The project builds automatically** via GitHub Actions (or your configured CI).
7. **The article is live** on the published website.

There is no admin dashboard, no login screen, and no database. Content is managed entirely through files and version control.

---

## Why HAST CMS?

| Advantage | Description |
|---|---|
| **Markdown-first** | Write content in plain Markdown — portable, readable, and future-proof |
| **Git-based** | Every change is versioned, diffable, and reversible |
| **Static and fast** | Pages are pre-rendered HTML — no server-side rendering at request time |
| **Simple workflow** | Create a file, commit, push — that is the entire publishing process |
| **Version-controlled** | Full history of every article edit, with the ability to roll back |
| **Easy to edit** | Any text editor works — VS Code, Neovim, Notepad, GitHub's web editor |
| **Developer-friendly** | Standard tools: Node.js, Astro, Git, Markdown |
| **No database** | No database server to maintain, back up, or secure |
| **Easy to deploy** | Builds to static HTML — deployable to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any static host |

---

## Managing Content

Posts support the following frontmatter fields. All optional fields have sensible defaults.

**Required fields:**

| Field | Type | Description |
|---|---|---|
| `title` | string | The article title |
| `description` | string | Short description shown in indexes and search (max 300 characters) |
| `date` | date | Publication date in `YYYY-MM-DD` format |

**Optional fields:**

| Field | Type | Default | Description |
|---|---|---|---|
| `slug` | string | filename | Override the URL slug |
| `updated` | date | — | Date of last substantive edit |
| `author` | string | `HAST CMS` | Author name |
| `category` | string | `Uncategorized` | Single category — creates `/category/<slug>/` automatically |
| `tags` | string[] | `[]` | List of tags — creates `/tag/<slug>/` pages automatically |
| `hashtags` | string[] | `[]` | Hashtag list — creates `/hashtag/<slug>/` pages automatically |
| `featured` | boolean | `false` | Show in the Featured section on the homepage |
| `pinned` | boolean | `false` | Pin to the top of the homepage |
| `draft` | boolean | `false` | Hide from all public indexes |
| `series` | string | — | Group posts into a named series |
| `seriesOrder` | number | — | Position within a series |
| `cover` | string | — | Path to a cover image |
| `toc` | boolean | `true` | Show table of contents sidebar |
| `noindex` | boolean | `false` | Exclude from search engines and sitemap |

---

## Publishing a Post

Once you have written a post and set `draft: false` in the frontmatter:

```bash
git add src/content/posts/my-post.md
git commit -m "publish: My Post Title"
git push
```

GitHub Actions (or your configured CI pipeline) picks up the push, runs `npm run build`, and deploys the updated static site. The post is visible as soon as the build completes.

To publish locally for testing first, run:

```bash
npm run dev
```

Then open `http://localhost:4321` in a browser.

---

## Documentation

The following documentation posts walk through every common task:

- [Getting Started with HAST CMS](/posts/getting-started-with-hast-cms/) — installation, setup, first post
- [How to Create a New Blog Post](/posts/how-to-create-a-new-blog-post/) — frontmatter, workflow, publishing
- [How to Edit a Blog Post](/posts/how-to-edit-a-blog-post/) — editing content, updating metadata
- [How to Change the Site Name and Information](/posts/how-to-change-the-site-name-and-information/) — branding, site settings
- [How to Add Categories and Tags](/posts/how-to-add-categories-and-tags/) — organizing content
- [How to Delete a Blog Post](/posts/how-to-delete-a-blog-post/) — removing posts cleanly
- [HAST CMS Markdown Reference](/posts/hast-cms-markdown-reference/) — supported syntax and formatting

---

## Philosophy

HAST CMS keeps publishing simple: Markdown, Git, and static generation. No unnecessary complexity, no proprietary formats, no lock-in.

Write in plain text. Version everything. Ship static HTML.
