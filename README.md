# FOTF

Focus On The Field — client website mock-up.

## Viewing the mock-up

The pages load their shared header, footer and buttons at runtime, so they need to be
served over HTTP (opening a file directly with `file://` will show an empty page).

```bash
cd FOTF
python3 -m http.server 8000
# then open http://localhost:8000/
```

Any static host works too (GitHub Pages, Netlify, etc.). `index.html` redirects to `Home.dc.html`.
No internet connection is needed: fonts, icons, React and the hero photo are all local.

## Pages

| File | Page |
| --- | --- |
| `Home.dc.html` | Home (the original mock-up) |
| `Services.dc.html` | Services, who we help, how it works, pricing |
| `Partners.dc.html` | Partner program and application form |
| `Resources.dc.html` | Program Planner, insights, downloads, newsletter |
| `About.dc.html` | Story, values, team, contact |

Text in `[square brackets]` is placeholder copy for the client to replace. Hatched boxes are
photo placeholders. Forms are visual only and do not submit anywhere.

## Shared components

| File | Used for |
| --- | --- |
| `SiteHeader.dc.html` | Sticky header, desktop nav, mobile menu and sticky "Book a call" bar |
| `SiteFooter.dc.html` | Footer columns and social links |
| `FotfButton.dc.html` | Buttons (`variant`: primary, secondary, action, text; `tone`: light, dark) |
| `ClosingBand.dc.html` | Black "Ready to get your time back?" band (`headline` prop) |
| `ProgramPrompt.dc.html` | Interactive five-step Program Planner |

Pages include a component with `<dc-import name="SiteHeader" active="Services">`.
Edit a component once and every page picks it up.

## Folder layout

```
_ds/design-system-…/   fonts, font-face CSS and colour tokens
assets/images/         hero photo
assets/icons/          Lucide icons used in cards and the footer, plus favicon
vendor/                React 18 (local copies, no CDN needed)
support.js             Design Components runtime that renders the pages
resources.js           maps CDN URLs to the local copies above
FOTF Home.html         original single-file export of the home page (kept for reference)
```

## Brand tokens

Display: Anton · Body: Archivo · Mono: JetBrains Mono
Ink `#0B0B0B` · Bone `#F4F1EA` · Sand `#D9CFC0` · Yellow `#FFD100`
