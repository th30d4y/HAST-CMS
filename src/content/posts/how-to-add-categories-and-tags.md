---
title: "How to Add Categories and Tags"
description: "Learn how to organize HAST CMS blog posts using categories, tags, and hashtags — all managed through post frontmatter."
date: 2026-08-16
author: "HAST CMS"
category: "Documentation"
tags:
  - categories
  - tags
  - organization
series: "HAST CMS Documentation"
seriesOrder: 5
draft: false
toc: true
---

## Overview

HAST CMS organizes posts through three frontmatter fields:

| Field | Type | URL pattern | Multiplicity |
|---|---|---|---|
| `category` | string | `/category/<slug>/` | One per post |
| `tags` | string[] | `/tag/<slug>/` | Multiple per post |
| `hashtags` | string[] | `/hashtag/<slug>/` | Multiple per post |

All category and tag pages are generated automatically — you do not need to create any files to add a new category or tag.

---

## Categories

Each post belongs to one category. The category appears in the post header, post index rows, and the Categories page at `/categories/`.

```yaml
category: "Tutorials"
```

If you omit `category`, the post is assigned to **Uncategorized**.

**How category URLs are generated:**

The category name is converted to a lowercase slug. For example:

| Category value | URL |
|---|---|
| `Tutorials` | `/category/tutorials/` |
| `Security Research` | `/category/security-research/` |
| `Dev Notes` | `/category/dev-notes/` |

---

## Tags

Tags are a list of keywords. A post can have any number of tags. Each tag gets its own index page at `/tag/<slug>/`.

```yaml
tags:
  - markdown
  - tutorial
  - getting-started
```

Tag pages list all posts that share that tag.

**How tag URLs are generated:**

The same slug conversion applies:

| Tag value | URL |
|---|---|
| `markdown` | `/tag/markdown/` |
| `getting-started` | `/tag/getting-started/` |
| `Open Source` | `/tag/open-source/` |

---

## Hashtags

Hashtags work like tags but are displayed in a `#tag` style and have their own pages at `/hashtag/<slug>/`. Include the `#` prefix in the value or omit it — both are accepted.

```yaml
hashtags:
  - "#HastCMS"
  - "#Markdown"
  - "StaticSite"
```

Hashtags appear at the bottom of posts and on the Hashtags index page at `/hashtags/`.

---

## Adding a New Category

No setup is required. Just set `category` in any post's frontmatter:

```yaml
category: "Release Notes"
```

The `/category/release-notes/` page is created automatically on the next build and the category appears in the sidebar on the homepage and in the Categories index.

---

## Adding New Tags

Add strings to the `tags` array in any post:

```yaml
tags:
  - astro
  - static-site
  - markdown
```

Each new tag gets its own `/tag/<slug>/` page automatically. Existing tag pages are updated to include the post.

---

## Removing a Category or Tag

Remove the value from all posts that use it. On the next build, the category or tag page will no longer be generated.

If only one post used that category or tag, removing it from that post is all that is needed.

---

## Practical Example

```yaml
---
title: "Building a Static Site with Astro"
description: "A walkthrough of building and deploying a static site using Astro."
date: 2026-08-16
category: "Tutorials"
tags:
  - astro
  - static-site
  - deployment
hashtags:
  - "#Astro"
  - "#WebDev"
draft: false
---
```

This post will appear on:
- `/category/tutorials/`
- `/tag/astro/`
- `/tag/static-site/`
- `/tag/deployment/`
- `/hashtag/astro/`
- `/hashtag/webdev/`
