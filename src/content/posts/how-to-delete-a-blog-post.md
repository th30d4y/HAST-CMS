---
title: "How to Delete a Blog Post"
description: "Learn how to permanently delete a blog post or temporarily hide it from HAST CMS without deleting the file."
date: 2026-08-16
author: "HAST CMS"
category: "Documentation"
tags:
  - posts
  - workflow
  - management
series: "HAST CMS Documentation"
seriesOrder: 6
draft: false
toc: true
---

## Option 1: Delete the File Permanently

To permanently remove a post, delete its `.md` file from `src/content/posts/`:

```bash
git rm src/content/posts/my-article-title.md
git commit -m "remove: My Article Title"
git push
```

After the build, the post URL returns a 404 page and the post no longer appears in any index.

---

## Option 2: Hide Without Deleting

To hide a post without permanently deleting it, set `draft: true` in the frontmatter:

```yaml
draft: true
```

Save the file, then commit:

```bash
git add src/content/posts/my-article-title.md
git commit -m "draft: hide My Article Title"
git push
```

The post is removed from all public indexes (homepage, latest, categories, tags, search, RSS) on the next build. The file is preserved in the repository and can be republished at any time by setting `draft: false`.

---

## What Happens to Related Pages?

When a post is deleted or hidden:

- **Category pages** — if the deleted post was the only post in a category, that category page will no longer be generated.
- **Tag pages** — same: if no remaining published post uses a tag, that tag page disappears.
- **RSS feed** — the post is removed from the feed.
- **Sitemap** — the URL is removed from `sitemap.xml`.
- **Search index** — the post is removed from the client-side search index on the next build.

---

## Handling Published URLs

If the post was already indexed by search engines or linked externally, deleting it creates a 404 for anyone following the old URL.

To redirect the old URL to a different page, add an entry to `public/_redirects`:

```
/posts/old-article-slug/  /posts/new-article-slug/  301
```

Or redirect to the homepage:

```
/posts/old-article-slug/  /  301
```

The `_redirects` file uses [Netlify redirect syntax](https://docs.netlify.com/routing/redirects/) and is supported by most static hosts (Netlify, Cloudflare Pages).

---

## Summary

| Goal | How |
|---|---|
| Permanently remove a post | Delete the `.md` file and commit |
| Temporarily hide a post | Set `draft: true` in frontmatter and commit |
| Redirect the old URL | Add a line to `public/_redirects` |
