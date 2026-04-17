# ✨ Operating in Ambiguity

Bethany's personal website — portfolio, case studies, and essays at **[operatinginambiguity.com](https://operatinginambiguity.com)**.

---

## 🗂️ What's on the site

| Page | What it is |
|------|-----------|
| **Home** | Landing page — the big intro |
| **About** | Bethany's story and expertise |
| **Work** | Case studies and professional wins |
| **Writing** | Essays — "The Foreseen Ghost", "The Unforeseen Ghost", and more to come |

---

## 🛠️ Tech stack

Built with [Astro](https://astro.build) — a fast, modern static site generator. Content is written in Markdown (`.mdx` files), styled with [Tailwind CSS](https://tailwindcss.com). No complicated servers or databases — just clean, fast HTML.

---

## 👀 Previewing changes (Bethany, this part's for you!)

Before anything goes live on the real site, Ryan sends you a **preview link** to review.

Here's how it works:

1. 🌿 Ryan makes changes on a separate branch (not the live site)
2. 🔗 Netlify automatically generates a **preview URL** — a temporary version of the site with the changes
3. 👀 **You click the link, look around, and give a thumbs up or feedback**
4. ✅ Ryan merges the changes — the live site at `operatinginambiguity.com` updates automatically

> **Nothing goes live until you approve it.** The preview link is just for reviewing — it doesn't affect the real site at all.

---

## 🚀 For Ryan — running locally

```bash
# Install dependencies (first time only)
npm install

# Start local dev server — opens at http://localhost:4321
npm run dev

# Build for production
npm run build
```

### Branching workflow

```bash
# Always start a new branch for changes
git checkout -b feature/your-change-name

# When done, push to GitHub
git push origin feature/your-change-name
```

Netlify will post a preview URL automatically. Send it to Bethany, get the 👍, then merge to `main`.

---

## 🌐 Deployment

| Thing | Details |
|-------|---------|
| **Hosting** | [Netlify](https://app.netlify.com/projects/operating-in-ambiguity) |
| **Domain** | `operatinginambiguity.com` — DNS managed in Wix |
| **Auto-deploy** | Every merge to `main` deploys to production automatically |
| **GitHub repo** | [rcurranmoz/operating-in-ambiguity](https://github.com/rcurranmoz/operating-in-ambiguity) |

---

## ✍️ Adding a new essay

Essays live in `src/pages/writing/` as `.mdx` files. Copy an existing one as a template, update the content and frontmatter (title, date, read time), and it'll appear on the Writing page automatically.

---

Made with 💙 by Ryan, for Bethany.
