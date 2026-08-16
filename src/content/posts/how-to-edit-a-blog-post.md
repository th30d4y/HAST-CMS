---
title: "How to Edit a Blog Post"
description: "Learn how to edit an existing blog post in HAST CMS — updating content, fixing errors, and changing metadata."
date: 2026-08-16
author: "HAST CMS"
category: "Documentation"
tags:
  - editing
  - posts
  - workflow
series: "HAST CMS Documentation"
seriesOrder: 3
draft: false
toc: true
---

## Editing a Post

All posts are plain Markdown files in `src/content/posts/`. To edit a post, open its `.md` file in any text editor and save your changes.

```bash
# Example: open a post in VS Code
code src/content/posts/my-article-title.md
```

---

## What You Can Change

### Article Body

Everything below the closing `---` of the frontmatter is the article body. Edit it freely — add paragraphs, fix typos, update code examples, or restructure sections.

### Title

```yaml
title: "Updated Article Title"
```

Changing the title updates the `<h1>`, the browser tab, and all meta tags. It does **not** change the URL — the URL is controlled by the filename or the `slug` field.

### Description

```yaml
description: "Updated short description for indexes and search results."
```

Keep descriptions under 300 characters. The description appears in post index pages, the homepage, and search engine results.

### Date and Updated Date

```yaml
date: 2026-01-15        # Original publication date — avoid changing this
updated: 2026-08-16     # Add or update this when you make substantive changes
```

### Category

```yaml
category: "Tutorials"
```

Changing the category moves the post to a different category page. If the old category had only this post, that category page will disappear after the build.

### Tags

```yaml
tags:
  - markdown
  - tutorial
  - updated-tag
```

Add or remove tags freely. Tag pages are auto-generated.

### Slug (URL)

```yaml
slug: "new-custom-slug"
```

Changing the slug changes the URL. If the post is already published and indexed, old URLs will 404 unless you add a redirect in `public/_redirects`.

### Draft Status

```yaml
draft: true    # hidden from all public indexes
draft: false   # visible
```

Setting `draft: true` on a published post removes it from all indexes on the next build but does not delete the file.

---

## Recording That an Edit Was Made

When you make substantive changes to a published post, add or update the `updated` field:

```yaml
updated: 2026-08-16
```

This date appears in the post header and is used in structured data (`dateModified`), which helps search engines recognise that content has been refreshed.

---

## Publishing the Edit

After saving your changes:

```bash
git add src/content/posts/my-article-title.md
git commit -m "update: My Article Title — fix typo in example"
git push
```

The CI pipeline rebuilds the site and the changes go live.

---

## Previewing Locally

To review the changes before pushing:

```bash
npm run dev
```

Open `http://localhost:4321` and navigate to the post.
