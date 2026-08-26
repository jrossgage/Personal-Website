# joelgage.com

A static, multi-page musician website built with Vite, React, and TypeScript.

## Local development

Requires Node.js 22 or newer.

```bash
npm (or npm.cmd) install
npm run dev
```

Open the local URL printed by Vite. The public site is at `/` and the unlisted electronic press kit is at `/epk/`.

## Editing content

Most text, email addresses, service lists, testimonials, and media placeholders live in `src/data/siteContent.ts`. Shared visual styles live in `src/styles.css`.

## Production build

```bash
npm run build
npm run preview
```

The production site is written to `dist/`.

## Deployment

Push to the `main` branch. The GitHub Actions workflow builds the site and deploys `dist/` to GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions** and add `joelgage.com` as the custom domain.

DNS is managed separately in Cloudflare. Point the apex domain to GitHub Pages using GitHub's current documented records, keep `public/CNAME`, and configure Fastmail MX/DKIM/SPF records independently so web DNS changes do not replace mail records.
