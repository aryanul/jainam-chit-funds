---
name: Jainam Chit Funds
description: "A registered chit fund that looks like an established finance company: the client logo's navy, blue and red on white and cool grey, with a brass kalash filling coin by coin in the hero."
colors:
  navy: "#1f2c6e"
  navy-900: "#11123a"
  navy-050: "#eef2fa"
  blue: "#2a4fa0"
  red: "#e8333a"
  whatsapp-green: "#0f7a40"
  whatsapp-green-deep: "#0b6434"
  ink: "#0f1b33"
  ink-2: "#4a5670"
  ink-3: "#616b80"
  line: "#e3e7ef"
  line-strong: "#c9d2e3"
  line-firm: "#b8c3d9"
  surface: "#f6f8fb"
  white: "#ffffff"
  focus: "#5b8def"
typography:
  display:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(38px, 5vw, 64px)"
    fontWeight: 760
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(28px, 3.1vw, 40px)"
    fontWeight: 720
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "19px"
    fontWeight: 680
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(24px, 2.4vw, 32px)"
    fontWeight: 760
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontFeature: "'tnum'"
  figure-lg:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(34px, 3.4vw, 44px)"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'tnum'"
  quote:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(22px, 2.4vw, 30px)"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 650
    lineHeight: 1
  label:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "13.5px"
    fontWeight: 650
    lineHeight: 1.4
rounded:
  bar: "3px"
  control: "10px"
  card: "12px"
  photo: "16px"
  round: "50%"
spacing:
  section: "clamp(72px, 8vw, 112px)"
  wrap: "min(1200px, 100% - 48px)"
  intro-gap: "44px"
  split-gap: "clamp(32px, 5vw, 72px)"
  grid-gap: "20px"
  panel-pad: "clamp(24px, 3vw, 40px)"
  choice-gap: "8px"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "50px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-green-deep}"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "50px"
  button-navy-hover:
    backgroundColor: "{colors.navy-900}"
  button-line:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "50px"
  button-small:
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "42px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  icon-well:
    backgroundColor: "{colors.navy-050}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
    size: "48px"
  choice-tile:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    padding: "12px 4px"
  choice-tile-selected:
    backgroundColor: "{colors.navy-050}"
    textColor: "{colors.navy}"
  text-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "50px"
  result-panel:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "{spacing.panel-pad}"
  utility-bar:
    backgroundColor: "{colors.navy-900}"
    height: "38px"
  header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    height: "84px"
  logo-chip:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  hero:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  compare-head-us:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  compare-cell-us:
    backgroundColor: "{colors.navy-050}"
    textColor: "{colors.navy}"
  compare-cell-old:
    textColor: "{colors.ink-3}"
  cta-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  footer:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
---

# Design System: Jainam Chit Funds

One system, one site. `index.html` (the homepage, which states the Jain founding) and `standard.html` (the same page without Jain identity) load `assets/pro/pro.css`, then `assets/ultimate/ultimate.css` as overrides, and are scripted by `assets/pro/pro.js` (calculator, WhatsApp links, phone dock, menu) and `assets/ultimate/ultimate.js` (hero video). Calculator maths live in `assets/plan.js`. Where the two stylesheets disagree, `ultimate.css` is the truth; the tokens below are the values that render.

## Overview

**Creative North Star: "The Registered Office"**

The page looks like an established, regulated finance company, the category standard done with precision, in the client's own colours: the ink navy, tagline blue and red of the Jainam logo, which sits full size in the header. Credibility comes from order and specifics: a navy utility bar stating the registration, a white header with the real logo, a light hero whose headline drops its second line into brand red, a row of hard numbers, a straight comparison with the family committee people already know, a working calculator that charts every month, a comparison with an FD and a loan, the office on a map, a named member's words.

The hero carries the one image of warmth: a photoreal brass kalash with mango leaves and red thread, gold coins dropping into it one at a time, looping seamlessly. It is drawn with `mix-blend-mode: multiply`, so its white ground vanishes into the page and only the vessel and its soft glow remain; it bleeds past the right edge like part of the page, not a video in a box. Everything else is calm: generous section padding, white and cool-grey bands alternating from the hero down, dark navy kept for the utility bar, the CTA band and the footer that frame the page. Hairline borders, one typeface in a few weights. WhatsApp green appears only on buttons that open WhatsApp, so the main action is the most saturated thing on any screen. Nothing animates on scroll; content is visible by default.

**Key Characteristics:**
- Colours sampled from the client logo: `navy-900` for the utility bar and footer, `navy` for headings, actions and the CTA band, `blue` for line work and ticks, `red` for brand moments.
- A light hero: white fading to cool grey under a faint two-line wavy underprint, the copy on the left, the kalash loop behind it on the right.
- The product shown, not described: the calculator's 20-bar instalment chart, driven by the tested `schedule()` in `assets/plan.js`.
- One typeface: Hanken Grotesk, 400 to 800, sentence case, tight negative tracking on headings, tabular figures on every number.
- 10px controls, 12px cards, 16px photos; hairline borders.
- One outline icon set (Phosphor regular), coloured through CSS masks.
- Real full-colour photography of people and places, with rounded corners.
- Every action ends in WhatsApp (green) or a call (white outline, or navy in the phone dock).

## Colors

Logo navy on white and cool grey, the logo's blue for line work, its red for brand moments, WhatsApp green kept for one job. The brand overrides live in `ultimate.css` `:root`; the neutrals are `pro.css`'s.

### Primary
- **Jainam Navy** (`navy`): headings on light bands, stat figures, the outline button's text and hover stroke, icon wells, the calculator's result panel, the CTA band, the selected choice tile's stroke, the Jainam column head in both comparisons, range sliders (`accent-color`), text selection.
- **Logo Navy** (`navy-900`): the hero headline's first line, the utility bar and the footer; navy-button hover; the browser `theme-color`.
- **Navy Mist** (`navy-050`): icon wells, the worked-example strip, the selected choice tile's fill, the Jainam cells in both comparisons, the avatar placeholder.

### Secondary
- **Tagline Blue** (`blue`): line work and small marks: the hero's tick icons, the committee table's check icons, the hero underprint (at 7%).

### Tertiary
- **Jainam Red** (`red`): brand moments only. The hero headline's second line, the strike-through on the committee's old answers (at 60%), and the values-list icons (homepage only).
- **WhatsApp Green** (`whatsapp-green`): fills every button that opens WhatsApp and nothing else. White on it holds 5.4:1.
- **WhatsApp Green Deep** (`whatsapp-green-deep`): its hover.

### Neutral
- **Ink** (`ink`): body text, legends, field text, the hero's text colour.
- **Slate** (`ink-2`): the hero subhead and tick lines, ledes, intros, card copy, nav links (7.4:1 on white).
- **Fog Slate** (`ink-3`): small print: stat captions, table heads, the committee's old answers, field captions, figcaptions (5.4:1 on white).
- **Hairline** (`line`): every border and divider.
- **Control Line** (`line-strong`): the outline button's resting stroke.
- **Firm Line** (`line-firm`): the hover stroke on choice tiles.
- **Cool Grey** (`surface`): the tinted section band, the foot of the hero's gradient, table header rows, the map's placeholder.
- **White** (`white`): the page, cards, the header (at 96%), the footer's logo chip, the phone dock, text on navy and green.
- **Focus Blue** (`focus`): the 3px keyboard focus ring, everywhere.

### Named Rules
**The Logo Colours Rule.** The brand colours are the logo's: `navy-900`, `blue` and `red` were sampled from `assets/brand/jainam-logo.png`. Don't tune them by eye; a new brand colour comes from the client's artwork or not at all.

**The One Green Rule.** Green means "this opens WhatsApp". Every WhatsApp button is green; nothing else is.

**The Brand-Moment Red Rule.** Red marks the brand: the headline's second line, the struck-out old way, the values icons. Never a button, link, background block or small text; at 4:1 on white it is for display-size type and icons only.

**The Light-Page Rule.** The hero and every section are light, alternating white and `surface`. Dark is kept for the frame: the `navy-900` utility bar, the `navy` CTA band and the `navy-900` footer. No dark hero, no dark mid-page band.

## Typography

**Display Font:** Hanken Grotesk variable, 400-800 (with system-ui, -apple-system, 'Segoe UI', sans-serif)
**Body Font:** Hanken Grotesk (same family)

Self-hosted as woff2, split latin / latin-ext by `unicode-range`, `font-display: swap`, the latin file preloaded.

**Character:** One plain, well-made grotesque in several weights. Heavy-ish (680-780), tightly tracked headings in navy read as a confident institution; regular 17px body stays easy for a 30-60 audience on phones.

### Hierarchy
- **Display** (760, clamp(38px, 5vw, 64px), 1.08, -0.02em, balanced): the hero headline only, in `navy-900`, its second line in red on its own line.
- **Headline** (720, clamp(28px, 3.1vw, 40px), 1.15, -0.02em): section headings and the CTA heading; white on the CTA band.
- **Title** (680, 19px, 1.3, -0.01em): step and card titles; footer column heads drop to 15px.
- **Figure** (760, clamp(24px, 2.4vw, 32px), tabular): facts-row stats.
- **Figure Large** (780, clamp(34px, 3.4vw, 44px), 1, tabular): the calculator's payout.
- **Quote** (600, clamp(22px, 2.4vw, 30px), 1.4, navy, centred): the member testimonial.
- **Lede** (400, 18px, slate): the paragraph under a section heading, intros capped at 680px; the hero subhead runs clamp(18px, 1.5vw, 20px), max 32em.
- **Body** (400, 17px, 1.65; 16px under 640px): running text; FAQ answers cap at 70ch.
- **Button** (650, 16px, 1; 15px on small buttons).
- **Label** (650, 13.5px, fog slate, sentence case): table column heads, field captions. Never uppercase, never above a heading.

### Named Rules
**The Tabular Figures Rule.** Every number a visitor compares (stats, table cells, `dd`, `output`, the result figure) is tabular.

**The Sentence-Case Rule.** Headings, labels and buttons are sentence case. No uppercase labels, no eyebrows or kickers over headings.

## Layout

One centred column, `wrap` wide (1200px max, 24px side margins). Sections are separated by `section` padding and by background alternation, not rules. Section heads are an intro block (heading + lede, max 680px, 44px below; centred where the content below is centred).

Homepage order: utility bar, sticky header, hero, facts row (white, between hairlines), the committee comparison (`surface`), how it works (white), calculator (`surface`), Chit / FD / loan (white), Jain values (`surface`, homepage only), Built in Chickpet (white), quote (`surface`), visit and map (white), FAQ (`surface`), then the navy CTA band, the footer and the phone dock. `standard.html` drops the values section and the Jain-only FAQ, so from Built in Chickpet onward its bands start on `surface` and keep alternating.

**Hero.** At least min(700px, 100svh minus the 122px of utility bar and header), content vertically centred, padding clamp(40px, 5vw, 64px). The copy column caps at 580px on the left; the kalash video sits behind it (`z-index: -1` inside an isolated, overflow-hidden hero), vertically centred, its right edge 2vw past the viewport, min(85vw, 1500px) wide at 16:9.

The committee section is a split, .85fr copy / 1.15fr table, gap clamp(32px, 5vw, 64px). Photo splits use the `split-gap` and alternate photo-left and photo-right (`.flip`). Reading-width content (FAQ, quote) caps at 860px; comparison tables run the full width of their column.

Sticky header 84px (72px under 640px); `scroll-padding-top: 104px` so anchors land below it with room.

**Responsive:**
- **1080px:** facts go 3-up; steps 2-up; the calculator and visit cards stack.
- **900px:** nav and the header button hide behind a 44px menu trigger opening a white dropdown card; the hero turns to a block with 80vw of top padding and the kalash moves into it, centred above the headline (top -16vw, left -62vw, 170vw wide, so its empty top and sides crop away); the committee and photo splits stack; the utility bar drops the email; the phone dock appears.
- **640px:** body 16px; header 72px with a 46px logo; the utility bar keeps only the registration line; hero buttons go full width; facts 2-up with the fifth spanning; steps one column; choice tiles 3-up; both comparison tables stack each question into a block of labelled answers (`data-label` captions), the Jainam answer keeping its mist fill; the example strip and footer stack.

Tap targets: 42px on small buttons, 44px on the menu trigger, 50px on standard buttons and fields.

## Elevation & Depth

Flat. Depth comes from white cards with hairline borders on `surface` bands, from the hero's soft gradient, and from the kalash's own lighting multiplied into the page. Shadow is kept for the one thing that floats.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 1px 2px rgba(15, 27, 51, .04)`): every `card`, paired with its hairline border. It seats the card, nothing more.
- **Lift** (`box-shadow: 0 1px 2px rgba(15, 27, 51, .06), 0 10px 30px -12px rgba(15, 27, 51, .14)`): the mobile menu dropdown, the one element that overlaps content.
- **Control stroke** (`inset 0 0 0 1.5px`): outline buttons, choice tiles and the menu trigger draw their border as an inset shadow; 2px navy when selected.
- **Field focus** (`0 0 0 3px` navy at 15%): the text field's focus halo, with the border going navy.

### Named Rules
**The Float-Only Shadow Rule.** A cast shadow is for an element that floats: the lift, on the dropdown. Cards in a flow get a hairline and the rest shadow, never more.

**The No-Box Rule.** The hero video never gets a frame, card, border, radius or shadow. It multiplies into the page; if its edge or its white ground shows, it is wrong.

## Shapes

Softly rounded, consistent by role: 10px for controls and small tiles (buttons, choice tiles, fields, menu trigger, the net-result box, the footer's logo chip), 12px for cards, icon wells and table heads, 16px for photographs. Full circles for the avatar. Chart bars get 3px top corners; legend keys 2px. Borders are 1px hairlines; controls take 1.5px strokes. The only curved line work is the hero's faint two-line wavy underprint, kept to the hero.

## Components

### Buttons
Solid, quiet, institutional.
- **Shape:** 10px corners, 50px tall, 22px side padding, a 20px icon plus label, labels never wrap. Small: 42px, 16px padding, 15px text.
- **WhatsApp (primary):** green fill, white text, WhatsApp logo icon. Every WhatsApp action, nothing else.
- **Navy:** navy fill, white text; Get directions, and Call in the phone dock.
- **Line (secondary):** white with a 1.5px `line-strong` inset stroke and navy text; the stroke goes navy on hover. On the CTA band it turns transparent with white text (50% white stroke, full white on hover).
- **Hover / Active / Focus:** fill deepens (green-deep, navy-900) over .15s; all press 1px down on `:active`; focus is the 3px focus-blue ring offset 2px.

### Hero (signature)
Background: a 240x28px tile of two wavy lines in blue at 7% over a white-to-`surface` vertical gradient. Left: the Display headline in `navy-900` with its second line in red on its own line, a slate subhead, WhatsApp + white Line Call, then three slate tick lines with blue check icons. Behind and to the right: the kalash loop.

### Kalash Loop (signature)
`assets/video/kalash.mp4`: a 1920x1080, 7.7s seamless loop of a photoreal brass kalash with mango leaves and red thread, gold coins dropping in one at a time, on white. Generated in Google Flow (Omni 1.2 Flash, Frames mode, identical first and last frames) with a 0.3s crossfaded seam. A muted, inline, looping, `aria-hidden` video with `assets/video/kalash-poster.jpg` as its poster, drawn with `mix-blend-mode: multiply` and `pointer-events: none`. `ultimate.js` plays it only while it is on screen (IntersectionObserver) and, under `prefers-reduced-motion`, removes autoplay and pauses it so the still poster shows. It is decoration: nothing on the page depends on watching it.

### Facts Row
A white band between hairlines: five stat cells divided by vertical hairlines, each a Figure over a fog-slate caption, with a small as-of note spanning below.

### Committee Comparison (signature)
A split on `surface`: heading and lede on the left; on the right a white card holding a three-column table, Family committee against Jainam chit, four rows. The old answers are fog slate and struck through in red at 60%; the Jainam column head is solid navy, its cells `navy-050` with navy 650 text, each led by a 16px blue check. Under 640px it stacks like the Chit / FD / loan table.

### Steps and Icon Wells
Four white step cards (4-up, 2-up, then 1-up), each led by a 48px `navy-050` icon well with a 24px navy icon, the step number small in fog slate at the top right, a Title and a slate paragraph. A `navy-050` example strip with a white icon well follows. The values list (homepage) uses the same 48px well, white with a hairline border and a red icon, beside a rounded photo.

### Calculator (signature)
One card split 1.15fr / .85fr: the form on white (six goal tiles, five chit-value tiles, a "when will you need the money" month slider, a month-1 auction discount slider with Quiet group / Competitive group end captions, an optional name field) and a navy result panel. The panel stacks: a small title at 85% ("You receive in Month N"), the Figure Large payout, a 96px chart of 20 bars, one per month's instalment, scaled from the lowest to the highest month (paid months white at 55%, the month you receive solid white, later months white at 28%; bars animate height over .3s), an axis line, a legend of square swatches, a hairline-divided `dl` of totals, a net line in a white-10% 10px box, a full-width WhatsApp button that sends the plan (greeting from the page's `data-greeting`), and fine print at 78%. Stacks under 1080px.

### Chit / FD / Loan Table
A white card: Chit / FD / Loan answers to four questions. `surface` header in fog slate; the Jainam column head solid navy with white text, its cells `navy-050` with navy 650 text; row heads 650 ink at 26% width. Under 640px each question stacks into a block, each answer a row with its `data-label` caption left and the answer right.

### Founder Card, Quote, Visit
- **Founder card:** a white card with an 88px round avatar, name in navy, a slate line, and small WhatsApp + Call buttons.
- **Quote:** centred, max 860px, the Quote style in navy with curly-quoted text, then the member's name in ink. No decorative quote glyph.
- **Visit card:** a card split .85fr / 1.15fr: icon-led contact lines (24px icon column, small fog-slate caption over a navy link or text) and Get directions (navy) + WhatsApp on the left; an embedded map filling the right (min 380px, `surface` while it loads).

### Inputs / Fields
- **Text field:** white, 50px, 10px corners, 1.5px hairline border; focus turns the border navy with a 3px navy halo at 15%. Placeholder #5f6878.
- **Choice tiles:** native radios under tiles: 10px corners, 1.5px hairline inset stroke, slate 13.5px/600 text. Goal tiles stack a 22px icon over the label (6-up, 3-up on phones); chit-value tiles are a single 15px line (5-up, 3-up on phones). Hover firms the stroke to `line-firm`; checked fills `navy-050` with a 2px navy stroke and navy text; keyboard focus draws the ring on the tile.
- **Range:** native, `accent-color: navy`, with end captions in fog slate and the current value as a navy `output` beside the label.

### Navigation
- **Utility bar:** `navy-900`, 38px, 13.5px pale text: the registration line left, phone and email right (each with a 15px icon); links underline on hover.
- **Header:** sticky, white at 96%, hairline bottom, 84px: the client logo at 58px tall (46px on phones), 15.5px/600 slate links that turn navy on hover, a small WhatsApp button on the right. Below 900px a 44px menu trigger opens a white 12px dropdown card with the lift shadow; it closes on pick or Escape.
- **Phone dock:** below 900px, WhatsApp and Call (navy) side by side on a white bar with a hairline top, sliding up (.25s ease-out) once the hero's own buttons scroll out of view; respects the safe-area inset.

### FAQ
Native `details` between hairlines, max 860px: 18px/650 navy questions with a fog-slate caret that rotates 180deg (.2s) when open; slate answers to 70ch.

### CTA Band and Footer
- **CTA band:** navy, heading and one pale line left, WhatsApp + inverted line button right, wrapping on narrow screens.
- **Footer:** `navy-900`, four columns (brand, Company, Contact, Registered office) collapsing to one, then a legal paragraph above a 12% white hairline in 13px pale text. The logo sits on a white chip (10px corners, 10px 14px padding, logo 40px tall) because its navy would vanish on the dark ground.

### Icons
Phosphor regular outlines (`assets/icons/pro/*.svg`), drawn as `currentColor` through a CSS mask; each icon's file is bound in the stylesheet by a `data-i` attribute rule. Default 22px; 20px in buttons and ticks; 24px in 48px wells; 16px for the committee checks; 15px in the utility bar.

## Do's and Don'ts

### Do:
- **Do** style new work with `pro.css` plus `ultimate.css` and the tokens above; put brand overrides in `ultimate.css`.
- **Do** use the client's logo as supplied, and take brand colours from it.
- **Do** keep green for WhatsApp buttons only, and give every WhatsApp button green.
- **Do** keep the page light: alternate white and `surface` bands from the hero down, with the `navy` CTA band and `navy-900` footer closing it.
- **Do** keep the kalash loop frameless, multiplied into the page, paused off screen and still under reduced motion.
- **Do** show the product working (the instalment chart) with figures from the tested `schedule()`, labelled as illustrative.
- **Do** set every comparable number in tabular figures.
- **Do** use Hanken Grotesk only, sentence case throughout.
- **Do** use real full-colour photographs of people and places with rounded corners.
- **Do** lead list items and steps with a 48px icon well and a Phosphor regular icon.
- **Do** keep 3px focus rings and tap targets of at least 42px (50px for primary actions).

### Don't:
- **Don't** put a dark navy hero or a dark mid-page band on the page.
- **Don't** put the hero video in a box, card, frame or shadow, or on a non-white ground where multiply would tint it.
- **Don't** use red for buttons, links, backgrounds or small text.
- **Don't** put kickers, eyebrows or uppercase labels above headings.
- **Don't** put a cast shadow on in-flow cards.
- **Don't** add a second typeface, italics for emphasis, or a second icon set.
- **Don't** use cartoonish 3D, emoji-style illustration or gimmick widgets; the photoreal kalash loop is the hero's only image.
- **Don't** animate on scroll or hide content until it scrolls in; motion is state change and the hero loop, and all of it stops under reduced motion.
