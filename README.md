# Psixoloq — Fidan Allahverdiyeva

React + Vite single-page app (psychology practice website, Azerbaijani).

## Setupaa

```bash
npm install
npm run dev
```

The dev server will open at http://localhost:5173 with hot reload.

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
├── main.jsx               # Vite entry — mounts <App> in BrowserRouter
├── App.jsx                # Routes + <ScrollToTop>
├── index.css              # All styles (single source of truth)
├── components/
│   ├── Layout.jsx         # <Header /> + <Outlet /> + <Footer />
│   ├── Header.jsx         # Sticky nav, mobile menu, NavLink with active state
│   ├── Footer.jsx         # Footer with wordmark, nav, contact
│   ├── Marquee.jsx        # Scrolling credentials strip
│   ├── CTABar.jsx         # Reusable call-to-action card (title/desc/button)
│   ├── ContactForm.jsx    # Validated form with state management
│   ├── PortraitFrame.jsx  # Placeholder portrait with badge overlay
│   ├── Breadcrumbs.jsx    # Home / Current
│   ├── Rating.jsx         # 5-star rating
│   └── Icons.jsx          # All inline SVG icons in one place
├── pages/
│   ├── Home.jsx           # /
│   ├── About.jsx          # /haqqimda
│   ├── Services.jsx       # /xidmetler
│   ├── Approach.jsx       # /yanasma
│   ├── Reviews.jsx        # /reyler
│   ├── FAQ.jsx            # /suallar
│   └── Contact.jsx        # /elaqe
└── hooks/
    └── useScrollEffects.js  # Cursor, scroll progress, reveals, counters, magnetic buttons
                              # Re-runs on every route change to bind to new DOM
```

## Maintenance — single sources of truth

| Want to change... | Edit this one file |
|---|---|
| Header / nav links | `src/components/Header.jsx` (NAV_ITEMS array) |
| Footer wordmark, nav, contact | `src/components/Footer.jsx` |
| Marquee text | `src/components/Marquee.jsx` (ITEMS array) |
| CTA bar copy across pages | the `<CTABar>` call site |
| Phone / email / address | search the project (only used in Footer + Contact) |
| Colors, typography, spacing | `src/index.css` (`:root` block) |
| Add a new page | (1) create `src/pages/NewPage.jsx` → (2) add `<Route>` in `App.jsx` → (3) add a `NAV_ITEMS` entry in `Header.jsx` |
| Add a new icon | add to `src/components/Icons.jsx`, import where needed |

## Routing

Real React Router routes (no hash). All `<Link>` and `<NavLink>` give browser-history navigation without page reload. `<ScrollToTop>` in `App.jsx` resets scroll on every route change.

Active nav item is highlighted automatically via `NavLink`'s `aria-current="page"` (the CSS hooks into `[aria-current="page"]`).

## Animations

All effects live in `src/hooks/useScrollEffects.js`:
- Scroll progress bar (top of viewport)
- Custom cursor (desktop only — dot + lerped ring with `mix-blend-mode: difference`)
- Reveal-on-scroll via IntersectionObserver
- Counter animation for `.stat-num`
- Magnetic buttons on `.btn-primary` and `.nav-cta`

All respect `prefers-reduced-motion`.

## Old static HTML

The previous static-site version is preserved in `old-html/` for reference. Safe to delete once you're comfortable with the React version.
