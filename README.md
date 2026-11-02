# FOTF

Focus on the Field: client website mock-up.

Live at https://kalenhayman.github.io/FOTF/

## Viewing locally

The pages load their shared header, footer and interactive parts at runtime, so serve them over HTTP:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Pages

| File | Page | In the menu |
| --- | --- | --- |
| `Home.dc.html` | Hero, services, how it works, compare, proof | Yes |
| `Services.dc.html` | Service groups, two ways to buy, FAQ | Yes |
| `About.dc.html` | Story, stats, team, partners | Yes |
| `Partners.dc.html` | Partner types and application form | Footer only |
| `Resources.dc.html` | Program in a Prompt, insights, downloads | Footer only |

"How it works" in the menu links to the section on the Home page.
Text in `[square brackets]` and grey photo boxes are placeholders. Forms do not submit.

## Shared components

| File | What it does |
| --- | --- |
| `SiteHeader.dc.html` | Sticky bone header, field-line active state, green pitch mobile menu and sticky "Book a call" bar |
| `SiteFooter.dc.html` | Ink footer with Site, More and Contact columns |
| `FotfButton.dc.html` | Buttons. `variant`: primary (yellow), secondary (outline), text (yellow underline). `tone`: light or dark (for green and clay backgrounds) |
| `ClosingBand.dc.html` | Clay closing band with one yellow button. `headline` prop |
| `OrgSwitch.dc.html` | Organisation tabs that reorder the four service groups. `detail="true"` shows the task lists |
| `HowItWorks.dc.html` | Four steps on the field line that light up as you scroll |
| `CompareToggle.dc.html` | FOTF vs hiring an admin vs buying software |
| `ProgramPrompt.dc.html` | Five-question launch planner |

## Look and feel

The site blends the first concept with brand style sheet v4, pushed further towards green and clay. The source documents are in `docs/brand/`.

- **Field background:** Field Green `#1E5B3F` with mown-grass stripes. The hero adds faint pitch markings (`assets/patterns/pitch.svg`), and darker bands carry a fine "tech" grid.
- **Clay:** Track Clay `#B0412E` for selected tabs, tags, offset shadows, the hatched closing band and work chips.
- **Old-concept energy:** big condensed uppercase headlines with yellow underlines, ink-bordered cards with hard offset shadows, hatched photo slots and an ink scoreboard stats strip.
- **New brand:** the "Focus on the Field" wordmark with the yellow line under "Focus", Archivo and JetBrains Mono, the yellow field line in how-it-works, and the team → work → portal graphic.
- **Yellow:** buttons, underlines, scoreboard numbers and the field line.

Tokens live in `ds/design-system-…/tokens/`.

## Folder layout

```
ds/design-system-…/   Archivo and JetBrains Mono fonts, font and colour tokens
assets/images/        hero photo (concept image, to be replaced with real photography)
assets/icons/         Lucide line icons at 1.5px stroke, favicon
assets/patterns/      pitch markings drawn over the hero
docs/brand/           brand style sheet v4 and design recommendations
vendor/               React 18 (local copy)
support.js            Design Components runtime
resources.js          maps CDN URLs to local copies
FOTF Home.html        original first-concept export, kept for reference
```
