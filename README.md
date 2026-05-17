# Thomas Jacques Personal Brand Website

A portable static website for a predictive maintenance / industrial automation personal brand.

## What is included

- `index.html` — full one-page website
- `assets/css/styles.css` — responsive professional industrial styling
- `assets/js/main.js` — mobile navigation, article filtering and video modal
- `assets/images/` — generated SVG assets and placeholders
- `articles/` — three starter technical article pages
- `content-plan.md` — suggested content strategy for videos, articles and photos
- `deployment-checklist.md` — hosting and launch steps

## How to run locally

Open `index.html` directly in your browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to customise quickly

1. Replace `your.email@example.com` in `index.html`.
2. Replace the LinkedIn link in the Contact section.
3. Replace `assets/images/portrait-placeholder.svg` with your real photo.
4. Replace `featuredVideoEmbedUrl` in `assets/js/main.js` with your YouTube/Vimeo embed link.
5. Add new article pages in `/articles` and duplicate the article cards in `index.html`.

## Hosting

This site should work on almost any static hosting provider:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- IONOS / GoDaddy / typical shared hosting
- Siemens-independent personal hosting, if approved by your employer's policies

Upload the entire folder contents to your web root.

## Contact form options

The current form uses `mailto:` so it works without a backend. For a better hosted form:

### Netlify Forms

Change the form tag to:

```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

And add:

```html
<input type="hidden" name="form-name" value="contact" />
```

### Formspree

Create a Formspree endpoint, then change the form action:

```html
<form class="contact-form" action="https://formspree.io/f/your-id" method="POST">
```

## Brand/legal note

This is written as a personal professional website. It does not use Siemens logos or claim to be an official Siemens website. If you reference Siemens, Senseye, customer names, or project results, only publish information you are allowed to share publicly.
