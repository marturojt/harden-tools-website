# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to dist/
npm run preview  # serve dist/ locally
```

No linter or test suite is configured. Type-check implicitly via `npm run build` (Astro runs tsc under the hood with `tsconfig.json` extending `astro/tsconfigs/strict`).

## Architecture

**Astro 5 static site** (`output: 'static'`) with Tailwind CSS v3 and TypeScript strict mode. No JS framework (no React/Vue islands) — all pages are pure `.astro` components.

### i18n

- Spanish is the default locale — no URL prefix (`/`, `/fortaleza`, `/services`, etc.)
- English lives under `/en/` (`/en/`, `/en/fortaleza`, `/en/services`, etc.)
- Each page has two files: `src/pages/foo.astro` (ES) and `src/pages/en/foo.astro` (EN)
- EN pages are thin wrappers that set `const locale = 'en' as const` and import the same components
- All copy lives in `src/i18n/es.json` and `src/i18n/en.json`; access via `t(locale, 'dotted.key')` from `src/i18n/utils.ts`
- Use `localePath(path, locale)` for internal links and `getAlternateUrl(path, locale)` for hreflang/switcher

### Design tokens

All Tailwind tokens (colors, spacing, fontFamily, fontSize, borderRadius, keyframes) are in `tailwind.config.mjs` and come directly from the design system in `stitch_harden.tools_security_engineering_site/hardened_infrastructure/DESIGN.md`. Key tokens:
- `bg-background` / `bg-surface-container-lowest` — main dark backgrounds (`#131313` / `#0e0e0e`)
- `text-primary` / `bg-primary` — terminal green `#6bfb9a`
- `text-secondary` — amber `#ffb95f` (warnings, LFPDPPP badge)
- `text-on-surface-variant` — secondary text `#bccabb`
- `font-mono-label` / `font-mono-code` — JetBrains Mono (labels / code blocks)
- `grid-pattern` / `grid-blueprint` — dot-grid background utilities (defined in `global.css`)

### External links

All URLs pointing outside this site live in `src/config/links.ts`. This is the single source of truth for Fortaleza product URLs (`fortaleza.digital`), contact email, and the Calendly TODO. Always use these constants instead of hardcoding URLs in components.

### Key relationships

- **Harden.Tools** = the engineering firm (this site)
- **Fortaleza** = a separate SaaS product at `https://fortaleza.digital` (repo: `fortaleza.digital`). The `/fortaleza` page here is a marketing showcase only — it links externally and does **not** duplicate the product's pricing or functionality.

### Adding a new page

1. Create `src/pages/my-page.astro` with `const locale = 'es' as const`
2. Create `src/pages/en/my-page.astro` with `const locale = 'en' as const`
3. Add copy keys to both `src/i18n/es.json` and `src/i18n/en.json` under the same top-level key
4. Pass `path="/my-page"` to `BaseLayout` for correct hreflang and canonical URLs
5. Add nav links in `src/components/TopNav.astro`

### Inner-page hero pattern

Page heroes (services, philosophy, contact, fortaleza) use `pt-40 pb-16 grid-pattern` on the `<section>` with content directly inside — **no** gradient overlay div. The gradient overlay (`bg-gradient-to-b from-transparent to-background`) is only used in the home hero (`index.astro`) where the section is `min-h-[90vh]` and the gradient is a sibling of the content div, not a parent.
