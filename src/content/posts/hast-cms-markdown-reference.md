---
title: "HAST CMS Markdown Reference"
description: "A complete reference for all Markdown syntax supported in HAST CMS posts, including headings, lists, code blocks, tables, and more."
date: 2026-08-16
author: "HAST CMS"
category: "Documentation"
tags:
  - markdown
  - reference
  - syntax
series: "HAST CMS Documentation"
seriesOrder: 7
draft: false
toc: true
---

## Overview

HAST CMS posts are written in [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/). All standard Markdown syntax is supported, plus GFM extensions such as tables, task lists, and strikethrough.

---

## Headings

```markdown
# H1 — page title (used automatically from frontmatter, avoid in body)
## H2 — main section
### H3 — subsection
#### H4 — minor subsection
```

H2 and H3 headings are picked up by the table of contents sidebar when `toc: true` is set in frontmatter.

---

## Paragraphs and Line Breaks

Separate paragraphs with a blank line:

```markdown
First paragraph.

Second paragraph.
```

For a line break within a paragraph, end a line with two spaces or use a backslash:

```markdown
Line one  
Line two
```

---

## Emphasis

```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
**Bold and _nested italic_**
```

Renders as: **Bold text**, *Italic text*, ~~Strikethrough~~

---

## Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title text")
```

External links open in the same tab by default. To open in a new tab, use HTML:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External link</a>
```

---

## Images

```markdown
![Alt text](/images/my-image.png)
![Alt text](/images/my-image.png "Optional title")
```

Place images in the `public/` directory. Reference them with a path starting from `/`.

---

## Inline Code

```markdown
Use `backticks` for inline code.
```

Renders as: Use `backticks` for inline code.

---

## Code Blocks

Fenced code blocks with syntax highlighting:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

Supported language identifiers include: `bash`, `javascript`, `typescript`, `python`, `go`, `rust`, `html`, `css`, `json`, `yaml`, `markdown`, `sql`, `diff`, and many others.

---

## Blockquotes

```markdown
> This is a blockquote.
>
> It can span multiple paragraphs.
```

> This is a blockquote.
>
> It can span multiple paragraphs.

---

## Unordered Lists

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

---

## Ordered Lists

```markdown
1. First step
2. Second step
3. Third step
```

---

## Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

---

## Horizontal Rule

```markdown
---
```

---

## Tables

```markdown
| Column A | Column B | Column C |
|---|---|---|
| Value 1  | Value 2  | Value 3  |
| Value 4  | Value 5  | Value 6  |
```

Column alignment:

```markdown
| Left | Center | Right |
|:---|:---:|---:|
| A   | B      | C     |
```

---

## Footnotes

```markdown
This text has a footnote.[^1]

[^1]: This is the footnote text.
```

---

## HTML in Markdown

Raw HTML is supported and will be rendered as-is:

```html
<details>
  <summary>Click to expand</summary>
  Hidden content here.
</details>
```

<details>
  <summary>Click to expand</summary>
  Hidden content here.
</details>

---

## Frontmatter

The frontmatter block at the top of the file is **not** rendered in the post body. It is parsed separately to populate post metadata.

```yaml
---
title: "Post Title"
description: "Short description."
date: 2026-08-16
---
```

See [How to Create a New Blog Post](/posts/how-to-create-a-new-blog-post/) for the full frontmatter field reference.

---

## Tips

- Keep the article body below the closing `---` of the frontmatter.
- Use H2 (`##`) for top-level sections in the body — H1 is reserved for the post title.
- Add blank lines between block elements (headings, paragraphs, lists, code blocks) for reliable rendering.
- Run `npm run dev` to preview the post before publishing.
