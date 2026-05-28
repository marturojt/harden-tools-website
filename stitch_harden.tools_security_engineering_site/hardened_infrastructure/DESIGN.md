---
name: Hardened Infrastructure
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bccabb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#869486'
  outline-variant: '#3d4a3e'
  surface-tint: '#4de082'
  primary: '#6bfb9a'
  on-primary: '#003919'
  primary-container: '#4ade80'
  on-primary-container: '#005e2d'
  inverse-primary: '#006d36'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#ffd9c1'
  on-tertiary: '#4f2500'
  tertiary-container: '#ffb47f'
  on-tertiary-container: '#794418'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6dfe9c'
  primary-fixed-dim: '#4de082'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005227'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb784'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#6c3a0f'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.7'
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  unit-1: 0.25rem
  unit-2: 0.5rem
  unit-4: 1rem
  unit-8: 2rem
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1440px
---

## Brand & Style

The design system is engineered for security professionals and infrastructure developers. It prioritizes technical utility and clarity over decorative flair, adopting a **Minimalist-Technical** aesthetic. The visual narrative draws from terminal environments and observability dashboards, evoking a sense of precision, reliability, and "infrastructure-native" pragmatism.

The interface should feel like a high-performance tool. It utilizes deep matte surfaces, high-contrast typography, and functional color coding. Instead of traditional corporate imagery, the system relies on structural grid lines, monospaced data visualization, and syntax-highlighted code snippets to communicate value. The emotional response is one of calm, expert control in a complex environment.

## Colors

The palette is strictly dark-mode first, optimized for low-light engineering environments. 

- **Primary (Terminal Green):** Reserved for success states, active connections, and primary calls to action. Use sparingly to maintain a "low-noise" environment.
- **Secondary (Amber):** Used specifically for warnings, high-priority status indicators, and critical infrastructure alerts.
- **Neutrals:** The foundation is built on #0A0A0A (Pure Deep Black) for backgrounds and #121212 for elevated surfaces. 
- **Accents:** A range of cool grays provides depth for borders and secondary text, ensuring the UI feels structural rather than flat.

Color is treated as data. If a component isn't conveying specific status information, it should remain monochrome.

## Typography

This design system employs a dual-typeface strategy to balance modern readability with technical heritage.

- **Geist Sans:** Used for all core interface elements, headings, and body copy. It provides a geometric, clean, and "engineered" feel that remains legible at all sizes.
- **JetBrains Mono:** Used for labels, metadata, CLI commands, and raw data outputs. It signals "technical detail" to the user.

Typography should be strictly hierarchical. Use caps and increased letter spacing for monospaced labels to differentiate them from interactive body text. Large headlines should use tight tracking to maintain a compact, high-end editorial feel.

## Layout & Spacing

The layout is governed by a rigorous **12-column fluid grid** with a fixed maximum width for content readability. 

- **Grid Alignment:** All elements must snap to a 4px baseline grid. 
- **The "Blueprint" Effect:** Use subtle 1px borders (#262626) instead of heavy shadows to define layout sections. In dashboard views, consider using a faint background dot-grid or line-grid to reinforce the technical theme.
- **Responsive Behavior:** 
    - **Desktop:** Wide margins and generous whitespace between logical blocks.
    - **Tablet:** Columns collapse to 6; margins reduce to 32px.
    - **Mobile:** Single column flow; internal padding reduces to `unit-4` to maximize screen real estate for data tables and logs.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Glassmorphism**, rather than traditional shadows.

1.  **Level 0 (Floor):** #0A0A0A — The main application background.
2.  **Level 1 (Card/Section):** #121212 — Primary containers with a 1px solid border.
3.  **Level 2 (Popovers/Modals):** Semi-transparent #1A1A1A with a `20px` backdrop-blur. This creates a "frosted glass" effect that maintains context of the data underneath while bringing the focus forward.

Use **Low-contrast outlines** (#FFFFFF at 10% opacity) to define edges. Shadows, if used for extreme elevation (like global tooltips), should be black, sharp, and tightly contained to avoid a "cloudy" appearance.

## Shapes

The shape language is **Soft-Geometric**. A subtle 0.25rem (4px) radius is applied to standard buttons, inputs, and cards. This provides just enough refinement to feel modern without sacrificing the "industrial" character of the design.

- **Standard Elements:** 4px radius.
- **Large Containers:** 8px radius.
- **Interactive Tags/Labels:** 2px or 0px radius to emphasize a utilitarian, "cut" aesthetic.
- **Selection States:** Use sharp, high-contrast stroke outlines rather than rounding changes to indicate focus.

## Components

- **Buttons:**
  - *Primary:* Solid #4ADE80 with #0A0A0A text. No gradients.
  - *Secondary:* Ghost style with 1px #262626 border and white text.
  - *Critical:* Outline with #F59E0B text and border.
- **Input Fields:** Darker than the surface (#050505), 1px border, JetBrains Mono font for input text to reinforce the "typing in a terminal" feeling.
- **Cards:** No shadows. Use 1px #262626 borders. Header sections of cards should have a subtle bottom border to separate titles from content.
- **Status Indicators:** Small, solid circles. Use #4ADE80 for 'Secure/Up', #F59E0B for 'Warning', and #EF4444 for 'Breach/Down'.
- **Code Snippets:** Use a specialized container with #050505 background, "Copy" icon in the top right, and syntax highlighting following the 'Nord' or 'Dracula' dark themes.
- **Data Tables:** Row-based with subtle hover states (#FFFFFF at 3% opacity). No vertical lines; use horizontal lines only to maintain a clean, readable scan path.