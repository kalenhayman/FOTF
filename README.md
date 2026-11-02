# FOTF

Focus on the Field: client website mock-up, refreshed to brand style sheet v4.

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
| `SiteHeader.dc.html` | Sticky white header, field-line active state, mobile menu and sticky "Book a call" bar |
| `SiteFooter.dc.html` | Ink footer with Site, More and Contact columns |
| `FotfButton.dc.html` | Buttons. `variant`: primary (yellow), secondary (green outline), text (clay link). `tone`: light or dark |
| `ClosingBand.dc.html` | Field Green closing band with one yellow button. `headline` prop |
| `OrgSwitch.dc.html` | Organisation tabs that reorder the four service groups. `detail="true"` shows the task lists |
| `HowItWorks.dc.html` | Four steps on the field line that light up as you scroll |
| `CompareToggle.dc.html` | FOTF vs hiring an admin vs buying software |
| `ProgramPrompt.dc.html` | Five-question launch planner |

## Brand (style sheet v4)

The source documents are in `docs/brand/`. The style sheet wins where the two differ.

- **Logo:** "Focus on the Field" wordmark in Archivo condensed, yellow field line under "Focus". Favicon is the F short mark.
- **Type:** Archivo throughout (condensed 600 for headlines, sentence case). JetBrains Mono 500 for small labels and numbers. Anton is retired.
- **Colour:** Field Green `#1E5B3F`, Track Clay `#B0412E`, FOTF Yellow `#FFD100` (main button and field line only), Ink `#111111`, Paper `#FFFFFF`, Chalk `#F4F3EF`, Sand `#F3E6D8`, Line `#E2E0DA`.
- **Signature:** one 3px yellow field line, used for the active menu item, section dividers, the how-it-works progress line and the team → work → portal graphic.

Tokens live in `ds/design-system-…/tokens/`.

## Folder layout

```
ds/design-system-…/   Archivo and JetBrains Mono fonts, font and colour tokens
assets/images/        hero photo (concept image, to be replaced with real photography)
assets/icons/         Lucide line icons at 1.5px stroke, favicon
docs/brand/           brand style sheet v4 and design recommendations
vendor/               React 18 (local copy)
support.js            Design Components runtime
resources.js          maps CDN URLs to local copies
FOTF Home.html        original first-concept export, kept for reference
```
