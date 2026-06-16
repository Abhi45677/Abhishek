# Smart Computer Training Center — Static Site

A complete, framework-free version of the website built with plain **HTML + CSS + JavaScript**. No build step required.

## Project Structure

```
static-site/
├── index.html         ← Home
├── about.html
├── courses.html
├── services.html
├── gallery.html
├── testimonials.html
├── contact.html
├── faq.html
├── blog.html
├── css/
│   └── styles.css     ← All custom styles
└── js/
    ├── data.js        ← Courses, fees, testimonials, services, gallery, FAQs (edit here)
    └── main.js        ← Navbar, footer, WhatsApp button, tabs, accordion, lightbox, forms
```

## How to Run Locally

Option A — open directly:
1. Double-click `index.html`. It will open in your browser.

Option B — use a tiny local server (recommended for best results):
```bash
cd static-site
python3 -m http.server 8000
# Visit http://localhost:8000
```

## How to Deploy

The site is 100% static, so you can host it on **any** static host:

| Host | How |
|------|-----|
| **GitHub Pages** | Push `static-site/` to a repo → Settings → Pages → Source = main, root |
| **Netlify** | Drag & drop the `static-site` folder into Netlify dashboard |
| **Vercel** | `vercel deploy` from inside `static-site/` |
| **cPanel / shared hosting** | Upload everything inside `static-site/` to `public_html/` via FTP |
| **Cloudflare Pages** | Connect repo → no build command, output dir `static-site` |

## Editing Content

Almost all content lives in **`js/data.js`** — edit values there and the site updates everywhere.

- **Phone, address, hours** → `BUSINESS` object at the top
- **Course list & fees** → `COURSES` (basic / professional / advanced)
- **Services** → `SERVICES`
- **Testimonials** → `TESTIMONIALS`
- **Gallery images** → `GALLERY`
- **FAQs** → `FAQS`
- **Blog posts** → `BLOG_POSTS`

Style changes: `css/styles.css` — color palette, fonts, button styles, etc.

## Forms — WhatsApp Redirect

Both **Contact** and **Enroll** flows open a pre-filled WhatsApp chat (`https://wa.me/919771907685?text=…`). No backend, no database, no email setup required.

## Features Included

- Sticky navbar with mobile drawer
- Floating WhatsApp button on every page
- 9 fully responsive pages
- 15 courses with syllabus dialog & WhatsApp apply
- Tabs (Courses), Accordion (FAQ), Lightbox (Gallery), Toast notifications
- Embedded Google Map
- Newsletter signup (validates, shows toast)
- SEO meta tags + JSON-LD schema on home
- Bilingual Hindi + English content
- Lucide icons via CDN
- Google Fonts (Outfit + Mukta — supports Devanagari)

## Browser Support

Modern Chrome, Edge, Safari, Firefox (desktop & mobile). Uses standard CSS Grid, Flexbox, `aspect-ratio` and `backdrop-filter`.
