# Joel John — Personal Portfolio PRD

**Version:** 1.0
**Owner:** Joel John
**Last updated:** 2026-04-19

---

## 1. Overview

A single-page personal portfolio for Joel John, Senior Mobile Developer. The site tells three things clearly: **who he is**, **what he's built**, and **where he's going next**. The aesthetic is intentionally anti-trend — dark, serif, atmospheric, unhurried — to stand apart from the current wave of neon-terminal and AI-themed developer portfolios.

All site content lives in a single `content.json` file. Agents and Joel himself should edit only this file to update the site — never touch the layout components for content changes.

---

## 2. Goals

1. A portfolio that feels **personal and editorial**, not templated.
2. Clean separation of **content (content.json)** and **presentation (components)** so content edits never require code changes.
3. Mobile-friendly from the first commit. Desktop-first design, but nothing should break or look bad below 380px.
4. Deployable to Vercel in under 10 minutes from a fresh clone.
5. Extensible — adding a blog, project detail pages, or interactive demos later must not require a rewrite.

---

## 3. Non-goals

- No CMS, no database, no backend. Content is static JSON.
- No dark/light toggle. The site is dark-only by design.
- No animation-heavy scroll effects. Movement is limited to the `breath` pulse on the "available for work" indicator and the "now" node on the timeline.
- No analytics in v1. Add Vercel Analytics later if wanted.

---

## 4. Tech stack (non-negotiable)

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| Language | TypeScript | 5.x, strict mode |
| Styling | Tailwind CSS | v4 |
| Package manager | pnpm | latest |
| Fonts | `next/font/google` | — |
| Hosting | Vercel | — |
| Repo | GitHub | — |

### Fonts

- **Serif (body, headings):** `Fraunces` — weights 400, 500. Italic supported.
- **Sans (utility only):** system sans fallback — not used for content, only for form controls if needed.
- **Monospace (metadata, section numbers, stack tokens):** `JetBrains Mono` — weight 400.

Load both through `next/font/google` in `app/layout.tsx`. Expose as CSS variables `--font-serif` and `--font-mono`.

---

## 5. Design system

### 5.1 Color tokens

Every color must use these CSS custom properties. No hardcoded hex values anywhere in components.

```css
:root {
  --ink: #0B0B0D;          /* page background */
  --paper: #13131A;        /* slight elevation */
  --paper-2: #1A1A22;      /* cards, inputs */
  --line: #26262F;         /* dividers, subtle borders */
  --line-2: #33333E;       /* stronger borders */
  --text: #E8E4DC;         /* primary body text */
  --muted: #9A9284;        /* secondary text, descriptions */
  --dim: #6A6458;          /* tertiary text, metadata */
  --accent: #D4C9A8;       /* italic emphasis, section titles */
  --glow: #5DCAA5;         /* "now" marker, live status, spotlight */
  --warm: #C9A87D;         /* warm italic emphasis in prose */
}
```

### 5.2 Typography scale

| Element | Font | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|
| `h1` hero | Fraunces | 38px | 400 | 1.2 | -0.5px |
| `h3` project title | Fraunces | 20px | 400 | 1.3 | -0.2px |
| Lede paragraph | Fraunces | 16px | 400 | 1.75 | 0 |
| Essay paragraph | Fraunces | 16px | 400 | 1.75 | 0 |
| Secondary paragraph | Fraunces | 14px | 400 | 1.65 | 0 |
| Section title | Fraunces italic | 14px | 400 | 1.2 | 0.3px |
| Section number | JetBrains Mono | 10px | 400 | 1 | 1.5px |
| Metadata label | JetBrains Mono uppercase | 10px | 400 | 1 | 1.5px |
| Stack token line | JetBrains Mono | 10px | 400 | 1.6 | 0.8px |
| Drop cap | Fraunces | 52px | 400 | 0.9 | 0 |

### 5.3 Spacing

Use a **4px base grid**. Allowed spacing values: `4, 8, 10, 12, 16, 18, 20, 24, 28, 32, 36, 44, 48, 64`. Nothing else.

### 5.4 Borders and radii

- Subtle divider: `0.5px solid var(--line)`
- Stronger border: `0.5px solid var(--line-2)`
- Radius on the outer shell: `12px`
- Radius on inset cards / spotlights: `8px`
- Spotlight block accent: `2px solid var(--glow)` on the left edge only

### 5.5 Animation

Only two animations exist. Do not add more.

```css
@keyframes breath {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
/* Applied to .meta .live::before dot and .tl-node.now::before */
```

Hover on timeline nodes: `opacity 0.2s ease` transitioning to `opacity: 0.75`.

### 5.6 Background texture

The outer shell has a subtle starfield — four radial gradients at varying positions and opacities, drawn as a pseudo-element. Copy exactly:

```css
.shell::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 15% 20%, rgba(212,201,168,0.08) 1px, transparent 1px),
    radial-gradient(circle at 75% 45%, rgba(212,201,168,0.05) 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(212,201,168,0.06) 1px, transparent 1px),
    radial-gradient(circle at 88% 88%, rgba(212,201,168,0.04) 1px, transparent 1px);
  pointer-events: none;
}
```

---

## 6. Page structure

The site is a **single-page scroll**. No client-side routing in v1. Structure top to bottom:

1. **Meta strip** — name + "available for work" pulse, top-left / top-right
2. **Hero** — label, headline, lede, key-value row
3. **§ 01 The timeline** — vertical timeline with clickable nodes
4. **§ 02 About me** — drop-cap essay + 2×2 facets grid
5. **§ 03 What's next** — spotlight block + stack/languages grid
6. **Footer** — signature + contact links

Each section heading uses the shared `.sec-head` pattern: `§ NN` number, italic title, right-aligned subtitle.

---

## 7. Responsive rules

### 7.1 Breakpoints

| Name | Min width | Behavior |
|---|---|---|
| Mobile | 0 | Single column. Hero headline drops to 28px. Shell padding 20px. Timeline left padding reduces to 20px. KV row wraps to 2-column grid. Facets and stack-block collapse to single column. |
| Tablet | 640px | Hero headline 32px. Shell padding 28px. KV row back to flex row with wrap. |
| Desktop | 960px | Full design. Hero 38px. Shell padding 40px 44px. Facets 2×2, stack-block 1×2. |

### 7.2 Typography scaling

| Element | Desktop | Mobile (< 640px) |
|---|---|---|
| h1 | 38px | 28px |
| Lede | 16px | 15px |
| Essay | 16px | 15px |
| Project h3 | 20px | 18px |
| Drop cap | 52px | 42px |

### 7.3 Layout-specific mobile rules

- **Meta strip:** on mobile, name wraps above, live indicator below, both left-aligned.
- **Timeline row (year · title · role):** on mobile, `role` moves below title as its own line, still right-aligned.
- **KV row:** 2-column grid on mobile, flex row on desktop.
- **Facets:** always 1 column below 640px, 2 columns above.
- **Stack-block:** always 1 column below 640px, 2 columns above.
- **Footer:** sig above links on mobile, side-by-side on desktop.

### 7.4 Touch targets

All clickable timeline nodes must have a **minimum 44px tap height** on mobile. Increase vertical padding on mobile if needed.

### 7.5 Readability

Keep paragraph `max-width: 620px` on desktop, full width on mobile. Prose lines should not exceed 75 characters.

---

## 8. Component breakdown

Agents must create these components. Each is a pure render — it reads from `content.json` (passed as prop or imported), outputs markup. No business logic.

```
app/
├── layout.tsx              # fonts, global CSS, metadata
├── page.tsx                # composes all sections from content.json
├── globals.css             # tokens, keyframes, starfield
components/
├── MetaStrip.tsx           # top meta row: name + live dot
├── Hero.tsx                # label, h1, lede, kv-row
├── SectionHead.tsx         # reusable § NN · title · sub
├── Timeline.tsx            # wraps list of TimelineNode
├── TimelineNode.tsx        # single project entry with dot marker
├── AboutEssay.tsx          # drop-cap essay paragraphs + sig
├── Facets.tsx              # 2x2 grid of short identity blocks
├── Spotlight.tsx           # green-accented "exploring" block
├── StackBlock.tsx          # stack + languages, 2-col grid
├── Footer.tsx              # sig + contact links
lib/
├── content.ts              # typed content loader
types/
├── content.ts              # TypeScript types mirroring content.json
```

---

## 9. Content schema

Content lives in `/content.json` at the project root. The schema below is authoritative. Agents must generate matching TypeScript types in `types/content.ts`.

### 9.1 Top-level structure

```ts
type Content = {
  meta: MetaSection;
  hero: HeroSection;
  timeline: TimelineSection;
  about: AboutSection;
  facets: FacetsSection;
  whatsNext: WhatsNextSection;
  stack: StackSection;
  footer: FooterSection;
};
```

### 9.2 Section schemas

```ts
type MetaSection = {
  siteName: string;             // e.g. "Joel John · Portfolio"
  liveStatus: string;           // e.g. "available for work"
};

type HeroSection = {
  label: string;                // e.g. "—— who"
  headline: string[];           // array of lines; empty items become <br>
  headlineEmphasis: string[];   // words/phrases from headline to render in accent italic
  ledeOpener: string;           // the bright first sentence
  lede: string;                 // rest of the paragraph
  ledeEmphasis: string[];       // phrases to render in warm italic
  kv: Array<{
    label: string;              // e.g. "Based"
    value: string;              // e.g. "Chennai, India"
  }>;
};

type TimelineSection = {
  sectionNumber: string;        // "§ 01"
  sectionTitle: string;         // "the timeline"
  sectionSub: string;           // "2020 — present"
  nodes: TimelineNode[];
};

type TimelineNode = {
  year: string;                 // "2025"
  marker: "now" | "current" | "past";  // dot style
  title: string;                // "Personal Intelligence Network"
  role: string;                 // "self-hosted · personal"
  body: string;                 // paragraph; supports *italic*
  bodyEmphasis: string[];       // phrases to render in warm italic
  stack: string[];              // first token rendered in accent, rest in dim
  promptOnClick?: string;       // optional prompt to send when clicked
};

type AboutSection = {
  sectionNumber: string;        // "§ 02"
  sectionTitle: string;         // "about me"
  sectionSub: string;           // "inside and out"
  paragraphs: AboutParagraph[];
  signature: {
    place: string;              // "Chennai, 2025"
    note: string;               // "still figuring it out, cheerfully."
  };
};

type AboutParagraph = {
  text: string;                 // paragraph content
  tone: "primary" | "quiet";    // quiet = muted color
  dropCap: boolean;             // true on first paragraph only
  emphasis: string[];           // phrases to italicise in accent
};

type FacetsSection = {
  items: Array<{
    heading: string;            // "Values that stuck"
    body: string;               // paragraph
    emphasis: string[];         // phrases to italicise
  }>;
};

type WhatsNextSection = {
  sectionNumber: string;
  sectionTitle: string;
  sectionSub: string;
  spotlight: {
    label: string;              // "● exploring"
    text: string;               // the statement
    highlight: string;          // phrase to render in glow color
  };
};

type StackSection = {
  stack: {
    heading: string;            // "The stack, today"
    tokens: string[];           // ["Dart", "Kotlin", …]
  };
  tongues: {
    heading: string;            // "Tongues"
    items: string[];            // ["English", "Hindi", …]
  };
};

type FooterSection = {
  name: string;                 // "Joel John"
  tagline: string;              // "Chennai, India."
  role: string;                 // "Senior Software Engineer at Surfboard Payments."
  status: string;               // "Currently answering email."
  links: Array<{
    label: string;              // "→ joel6520@gmail.com"
    href: string;               // "mailto:joel6520@gmail.com"
  }>;
};
```

### 9.3 Emphasis rendering

Rendering italic emphasis is a shared utility. For any field with an accompanying `*Emphasis: string[]` field, components must:

1. Take the base text.
2. For each phrase in the emphasis array, wrap its occurrence in `<em class="accent">` or `<em class="warm">` depending on the component's convention.
3. Escape HTML in the base text before injection.

Create `lib/emphasize.tsx` with a single function: `emphasize(text, phrases, tone)` that returns React nodes.

---

## 10. Interactive behaviors

### 10.1 Timeline node clicks

Timeline nodes optionally carry a `promptOnClick` field. In v1, clicking a node with this field should **open the user's default mail client** with a pre-filled subject asking about that project, OR link to a future `/projects/[slug]` page. **Default v1 behavior: no click handler.** Nodes are visually hover-indicated but not navigable. Agents must not wire up `sendPrompt()` or similar — that was Claude-widget-specific.

### 10.2 Footer links

Standard `<a>` tags, native behavior. `mailto:`, `tel:`, and external URLs.

---

## 11. Accessibility

1. All interactive elements must be keyboard-reachable with visible focus rings (use `:focus-visible { outline: 2px solid var(--glow); outline-offset: 2px; }`).
2. Color contrast — `--text` on `--ink` is 14.8:1, passes AAA. `--muted` on `--ink` is 6.2:1, passes AA for body text. `--dim` on `--ink` is 3.4:1 — only use for metadata at 10px+, never body text.
3. Proper semantic HTML — `<header>`, `<main>`, `<section>`, `<article>` for timeline nodes, `<footer>`.
4. Every section gets an `id` for anchor linking: `#timeline`, `#about`, `#whats-next`.
5. Skip-to-content link at the top (visually hidden, visible on keyboard focus).
6. Respect `prefers-reduced-motion` — disable the `breath` animation when set.

---

## 12. SEO & metadata

In `app/layout.tsx`:

```ts
export const metadata = {
  title: "Joel John — Senior Mobile Developer",
  description: "Five years of Flutter and Android, shipped across multiple countries. Now exploring agentic development. Based in Chennai.",
  openGraph: {
    title: "Joel John",
    description: "Senior mobile developer shipping fintech across borders, exploring agents in Chennai.",
    url: "https://joeljohn.vercel.app",
    siteName: "Joel John",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel John",
    description: "Senior mobile developer shipping fintech across borders, exploring agents in Chennai.",
  },
};
```

Generate a simple OG image (`/public/og.png`) — dark background, name in serif, "Senior mobile developer" subtitle. 1200×630px.

---

## 13. Performance targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- First Contentful Paint: < 1s on 3G Fast
- Total bundle JS: < 80 KB gzipped (there's almost no JS in this site)
- Images: none in v1. If added, use `next/image`.
- Fonts: subset to Latin only, preload.

---

## 14. Project setup

```bash
pnpm create next-app@latest joel-portfolio \
  --typescript \
  --tailwind \
  --app \
  --eslint \
  --src-dir=false \
  --import-alias="@/*"

cd joel-portfolio
pnpm dev
```

Add dependencies:

```bash
pnpm add -D @types/node
```

Tailwind v4 setup in `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-ink: #0B0B0D;
  --color-paper: #13131A;
  --color-text: #E8E4DC;
  --color-muted: #9A9284;
  --color-dim: #6A6458;
  --color-accent: #D4C9A8;
  --color-glow: #5DCAA5;
  --color-warm: #C9A87D;
}
```

---

## 15. Deployment

1. Push to GitHub.
2. Import repo in Vercel.
3. No environment variables needed.
4. Framework preset: Next.js (auto-detected).
5. Build command: `pnpm build` (default).
6. Output: `.next` (default).
7. Rename subdomain in Vercel dashboard if preferred (`joeljohn.vercel.app`).

---

## 16. Testing checklist

Before first deploy, agents must verify:

- [ ] Site renders identically to the agreed design on 1440px desktop
- [ ] Hero headline wraps cleanly on 375px mobile, no horizontal scroll
- [ ] All text passes the readability contrast requirements in §11.2
- [ ] Timeline marker colors match: `now` green with glow halo, `current` gold, `past` hollow
- [ ] Drop cap renders on first About paragraph only
- [ ] Spotlight block has left border in `--glow`, subtle green-tinted background
- [ ] All emphasised phrases appear in the correct color (accent vs warm) per section convention
- [ ] Footer links all resolve: email, phone, LinkedIn
- [ ] GitHub link is clearly a placeholder until Joel provides one
- [ ] No layout break when resizing browser from 1440px → 320px
- [ ] Tab key navigates all interactive elements in visual order
- [ ] `prefers-reduced-motion` stops the live-status pulse

---

## 17. Editing guide (for Joel, future-him)

To update any text on the site, edit `content.json` only. Examples:

- **Add a new project to the timeline:** append to `timeline.nodes`.
- **Update the about essay:** edit `about.paragraphs` — each element is one paragraph.
- **Add a new contact link:** append to `footer.links`.
- **Change the hero headline:** edit `hero.headline` array. Each element is one line.

Do not edit components unless the design itself is changing.

---

## 18. Future extensions (not in v1)

- `/projects/[slug]` — dedicated deep-dive pages. Add `slug` and `detail` fields to `TimelineNode`.
- `/notes` — MDX-based short writing. New `content/notes/*.mdx` directory.
- Agent demos — interactive embedded widgets under a `/lab` route.
- Dark/light toggle — only if there's real user demand. The dark-only choice is deliberate.
- RSS feed — only if `/notes` ships.

---

*End of PRD.*
