---
title: "How to Create a New Blog Post"
description: "Learn how to create and publish a new blog post in HAST CMS using Markdown files and Git."
date: 2026-08-16
author: "HAST CMS"
category: "Documentation"
tags:
  - posts
  - frontmatter
  - publishing
series: "HAST CMS Documentation"
seriesOrder: 2
draft: false
toc: true
---

## Two Ways to Create a Post

### Option 1: Use the Script

Run the following command with your article title:

```bash
npm run new:post "My Article Title"
```

This creates `src/content/posts/my-article-title.md` pre-filled with all frontmatter fields and sets `draft: true` automatically. Open the file and fill in your content.

### Option 2: Create the File Manually

Copy `templates/post.md` into `src/content/posts/` with a descriptive filename:

```bash
cp templates/post.md src/content/posts/my-article-title.md
```

The filename becomes the URL slug unless you override it with the `slug` frontmatter field.

---

## Frontmatter Reference

Every post starts with a YAML frontmatter block between `---` delimiters.

### Required Fields

```yaml
---
title: "Your Article Title"
description: "Short description shown in indexes and search results (max 300 characters)."
date: 2026-08-16
---
```

### Optional Fields

```yaml
---
title: "Your Article Title"
description: "Short description shown in indexes and search results."
date: 2026-08-16

# Override the URL slug (defaults to the filename)
slug: "custom-url-slug"

# Date of last substantive update
updated: 2026-08-16

# Author name (defaults to the value in src/content/settings/site.md)
author: "HAST CMS"

# Category — creates /category/<slug>/ automatically
category: "Documentation"

# Tags — creates /tag/<slug>/ pages automatically
tags:
  - markdown
  - tutorial

# Hashtags — creates /hashtag/<slug>/ pages automatically
hashtags:
  - "#HastCMS"

# Show in the Featured section on the homepage
featured: false

# Pin to the top of the homepage
pinned: false

# Hide from all public indexes until you remove this line
draft: false

# Group posts into a named series
series: "Series Name"
seriesOrder: 1

# Cover image path (relative to /public/ or absolute URL)
# cover: "/images/my-cover.jpg"

# Show table of contents sidebar (requires H2/H3 headings)
toc: true

# Exclude from search engines and sitemap
noindex: false
---
```

---

## Writing the Article

After the closing `---` of the frontmatter, write your article body in standard Markdown:

```markdown
---
title: "Example Post"
description: "A short example."
date: 2026-08-16
category: "Guides"
tags:
  - example
draft: false
---

Your article starts here.

## Section Heading

Write paragraphs, lists, code blocks, tables, and any standard Markdown.

```bash
echo "code blocks work too"
```
```

See [HAST CMS Markdown Reference](/posts/hast-cms-markdown-reference/) for all supported syntax.

---

## Publishing the Post

1. Set `draft: false` in the frontmatter.
2. Stage and commit the file:

```bash
git add src/content/posts/my-article-title.md
git commit -m "publish: My Article Title"
git push
```

The CI pipeline builds the site and the post goes live automatically.

---

## Checking for Errors

Before pushing, validate your frontmatter:

```bash
npm run validate
```

This checks for missing required fields, invalid dates, and duplicate slugs.

---

## Previewing Locally

To see the post locally before publishing:

```bash
npm run dev
```

Open `http://localhost:4321` and navigate to your post.
