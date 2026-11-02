# FOTF Brand Refresh — Design Recommendations

Nov 1, 2026 · @Kalen

## The goal

Make a complicated service feel simple to buy and understand. Every choice below serves one test: a club director knows what FOTF does, and what to click, within 10 seconds.

The refresh means four things:

- **Minimal** — fewer words, fewer colours, more space.
- **Athletic** — sharp condensed type, field markings, real sport.
- **Clean** — calm and organised; bold used once per screen.
- **Easy** — short pages, one obvious next step.

Brand feel, from Tyler's brief: modern, intelligent, professional, human, approachable.

## What changes from the first concept

The first concept proved the direction. The refresh turns the volume down: same energy, half the weight.

| Element | First concept | Refresh |
| --- | --- | --- |
| Headlines | Anton, all caps, extra heavy, stacked | Archivo condensed, semibold, sentence case, one size smaller |
| Yellow | Big blocks, underlines, most buttons | Accent only: main button, the field line, one highlight per screen |
| Headline underlines | Under several lines of each headline | Retired; replaced by the field line |
| Background | Warm beige | White, with light grey for alternate sections |
| Mono labels | Caps labels on most sections | Small labels and numbers only |
| Pages | 5 | 3, plus the existing Client login |
| Copy | Full paragraphs and long lists | Half: one headline, one sentence, one button per section |
| Lime green | Appears in the pitch pages | AVA's colour; kept out of the FOTF brand |

**Keep:** the black-and-yellow FOTF logo, the line "More field time, less computer time" (it comes from their current site), real coaching photography, one clear call to action, and the mobile sticky booking bar.

The concept images can stay for now. Swap in real client and team photos once the proof shoots happen.

## Colour

Mostly white and black, with FOTF yellow as the one accent. Yellow should cover no more than about a tenth of any screen.

| Name | Hex | Where it goes | Share of screen |
| --- | --- | --- | --- |
| Ink | #111111 | Text, logo block, closing band | \~20% |
| Paper | #FFFFFF | Main background | \~55% |
| Chalk | #F4F3EF | Alternate sections, cards | \~15% |
| Line | #E2E0DA | Borders and dividers | Thin lines only |
| FOTF Yellow | #FFD100 | Main button, field line, one highlight | \~10% |
| Field Green | #1E5B3F | "Done" status in portal screens only | Rare |

- Text on yellow is always Ink.
- Yellow text sits on Ink only, never on white (it's hard to read).
- No gradients, no shadows.

## Typography

One font family, Archivo, does almost everything. It's already the body font in the first concept, free on Google Fonts, and comes in condensed widths, which gives the athletic feel without Anton's weight.

| Role | Font | Weight | Desktop / mobile size | Case |
| --- | --- | --- | --- | --- |
| Page headline | Archivo, condensed width | 600 | 56px / 36px | Sentence case |
| Section headline | Archivo, condensed width | 600 | 36px / 28px | Sentence case |
| Card title | Archivo | 600 | 22px / 20px | Sentence case |
| Body | Archivo | 400 | 18px / 17px, line height 1.5 | Sentence case |
| Labels and numbers | JetBrains Mono | 500 | 13px / 12px, wide letter spacing | Caps |

- Drop Anton entirely.
- Two weights maximum on any screen.
- Mono labels are the scoreboard touch: step numbers, small section labels, stats. Use them sparingly.

## Signature idea: the field line

One thin yellow line, 3px, taken from the markings on a playing field. It is the brand's single graphic device and replaces the heavy underlines. It appears in four places:

1. Under the active menu item.
2. As the divider between sections.
3. As the progress line in "How it works", with the four steps sitting on it like yard markers.
4. Connecting the three parts of the service in one simple graphic: **Your team → The work → Your portal**.

That last graphic answers the brief's request to show how the people, the work and the portal fit together. It does the job SupportNinja's robot-and-human illustrations do, using real photos and screens instead of cartoons:

- **Your team:** a round photo of an account manager, with name and role.
- **The work:** two or three task cards ("Spring registration opened", "Parent emails answered").
- **Your portal:** a real portal screenshot showing those tasks marked done.

Suggested caption: *Your team does the work. Your portal shows it.*

Show the portal only at the level available today. Confirm with Tyler which clients have it.

## Photography and icons

Real people and real screens carry the brand, so the design stays simple around them.

- **Subjects:** coaches, club directors and FOTF account managers at work; sidelines, equipment, fields at golden hour.
- **Young players:** wide or sideline shots only, with the club's consent. Adults are the faces in focus.
- **Look:** natural light, colour slightly muted so the yellow stands out. One photo per section at most.
- **Screens:** real portal screenshots with client names hidden, in place of illustrations.
- **Icons:** one line-icon set (for example Lucide), 1.5px stroke, Ink colour. Four icons, one per service group.
- **Leave out:** mascots, cartoon characters, abstract shapes and the "stressed person at a desk" stock photo on the current homepage.

## Layout and components

Every section follows the same pattern: small label, short headline, one sentence, one action. White space does the rest.

| Part | Spec |
| --- | --- |
| Grid | 12 columns, 1200px maximum width, 8px spacing steps |
| Section spacing | 96px top and bottom on desktop, 64px on mobile |
| Main button | Yellow fill, Ink text, 6px corners; one per screen |
| Second button | Ink outline, Ink text, 6px corners |
| Cards | White with a 1px Line border, or Chalk fill; 8px corners; no shadows |
| Menu | Logo · Services · How it works · About · Client login (text link) · Book a call (yellow button). Sticky, white, thin bottom border |
| Mobile | Sticky "Book a call" bar at the bottom of the screen |
| Closing band | Ink background, one headline, one yellow button |

## The website, cut in half

Five pages become three, plus the existing Client login. Each section gets one headline (under 8 words), one sentence (under 20 words) and one action. The exact wording comes in the messaging step.

| Page | Its job | Sections |
| --- | --- | --- |
| Home | Understand and act in 10 seconds | 1. Hero with Book a call. 2. The four services. 3. How it works, plus the team → work → portal graphic. 4. FOTF vs hiring an admin vs buying software. 5. Proof: logos and testimonials. 6. Closing band. |
| Services | Pick what you need | The four service groups; two ways to buy (subscription or one-off project); five FAQs at most. |
| About | Earn trust | Tyler's story (lacrosse to every sport), the team and where they work, partner logos. |

Partners and Resources move to the footer. Their content moves to About, or stays on the current Resources pages. Program in a Prompt becomes a footer and Resources link instead of a second hero button.

**The four service groups** (from Tyler's brief):

- Club & League Operations
- Member & Customer Support
- Marketing & Communications
- Technology & Systems

**Three interactions, each easy to build:**

1. **Organisation switch.** Tabs for Club, League, Event, Governing body and Company change which services and example show first. One component, used on Home and Services.
2. **How-it-works steps.** The four steps light up along the field line as the visitor scrolls.
3. **Compare toggle.** Tap FOTF, Hire an admin or Buy software to see what each one leaves on your plate.

## From SupportNinja: borrow and leave

Borrow their system, not their style. Their polish comes from a few parts repeated consistently, which FOTF can match at a simpler level.

| Borrow | Leave |
| --- | --- |
| Clean menu with one filled button and one outline button | Editorial serif headlines (too soft for an athletic brand) |
| Logo grid with "Case study" tags under the logos that have stories | Illustrated robot mascot and abstract shapes |
| Testimonial cards with quote, name, role and organisation | Five-colour palette and pill-shaped buttons |
| One dark closing band with a single call to action | Industry jargon (CX, HITL) and dense paragraphs |
| A small set of content templates used over and over | Long menus with 15+ solution links |

## Social content templates

Four templates in the same type and colours as the site. Tyler's social media person can fill them each week with Claude, which keeps the feed consistent without a big design budget.

| Template | What goes in | Coloured label |
| --- | --- | --- |
| Success story | Organisation, one result, one short quote | Organisation type: Club, League, Governing body |
| Season checklist | 3–5 tips drawn from their existing checklist PDFs | Sport or season stage |
| Ask the ops team | One real question and a short answer | "Ask the ops team" |
| Out at events | Event photo and one takeaway | Event name |

Format: 4:5 for Instagram and LinkedIn, Paper or Ink background, the yellow field line, logo bottom left.

## Prompt for Claude Design

Paste this in to start the refreshed design. It uses placeholder copy until the messaging step is done.

```text
Design a refreshed brand system and a 3-page website (Home, Services, About) for Focus on the Field (FOTF), a youth and amateur sports operations company.

Strategy: make a complicated service feel simple to buy and understand. A club director should know what FOTF does, and what to click, within 10 seconds.

Feel: minimal, athletic, clean, professional, human, approachable. Not a software or AI company look.

Colours: Ink #111111, Paper #FFFFFF, Chalk #F4F3EF, Line #E2E0DA. FOTF Yellow #FFD100 as accent only (main button, a 3px field line, one highlight per screen, about 10% of the screen). Field Green #1E5B3F for status only. Text on yellow is always Ink. Yellow text sits on Ink only, never on white.

Type: Archivo throughout. Headlines in Archivo condensed width, weight 600, sentence case. Body Archivo 400, 18px, line height 1.5. Small labels and numbers in JetBrains Mono 500, caps. No all-caps headlines.

Signature: a thin yellow field line used as the active menu underline, section dividers, the how-it-works progress line, and a graphic connecting Your team -> The work -> Your portal (account manager photo, task cards, portal screenshot). Caption: Your team does the work. Your portal shows it.

Components: 12-column grid, 1200px max width, generous white space. Buttons with 6px corners: yellow main button, Ink outline second button, one main button per screen. Flat cards with a 1px border, no shadows. Sticky white menu: Logo, Services, How it works, About, Client login, Book a call. Mobile sticky Book a call bar.

Imagery: real coaches, club directors and account managers; sideline and field shots; real portal screenshots; simple line icons. No illustrations or mascots.

Home sections: 1) hero, 2) four services: Club & League Operations, Member & Customer Support, Marketing & Communications, Technology & Systems, 3) how it works in 4 steps on the field line, with the team-work-portal graphic, 4) comparison: FOTF vs hiring an admin vs buying software, 5) proof: logo grid with case-study tags and testimonial cards, 6) closing Ink band with Book a call.

Interactions: organisation switch (Club, League, Event, Governing body, Company), how-it-works steps that light up on scroll, compare toggle.

Each section: small label, headline under 8 words, one sentence, one action. Use placeholder copy. Keep the existing black-and-yellow FOTF logo. Show desktop and mobile.
```
