# Project Structure

## Root Layout
```
src/
├── app/          # Next.js App Router pages and API routes
├── components/   # React components
├── hooks/        # Custom React hooks
├── lib/          # Shared utilities and config
└── styles/       # Global SCSS styles
```

## `src/app/` — Pages & Routes
Each route is a folder with a `page.tsx`. API routes live under `src/app/api/`.

```
app/
├── page.tsx              # Home page (/)
├── layout.tsx            # Root layout — Header, Footer, analytics, fonts
├── not-found.tsx         # 404 page
├── sitemap.ts            # Sitemap generator
├── cases/page.tsx
├── services/page.tsx
├── contacts/page.tsx
├── requisites/page.tsx
├── privacy/page.tsx
├── agreement/page.tsx
└── api/telegram/route.ts # POST handler — sends form data to Telegram bot
```

## `src/components/` — Components
Organized by feature/domain:

```
components/
├── ui/               # Reusable primitives: Button, Badge, Input, Logo, CookieConsent, TechIcons
├── layout/           # Header, Footer
├── index/            # Home page sections: HeroSection, CasesSection, AboutSection,
│                     #   ExpertiseSection, StackSection, IndexClient
├── cases/            # CasesClient — client component for cases page
├── analytics/        # YandexMetrika
├── ContactFormSection.tsx  # Shared contact form used across pages
└── TypewriterTitle.tsx     # Animated typewriter heading
```

## `src/styles/` — Styles
```
styles/
├── globals.scss      # Tailwind directives, body styles, utility classes (.container, .glass, .animated-bg, .card-gradient-*)
├── _variables.scss   # SCSS variables: colors, font sizes, spacing
└── _mixins.scss      # SCSS mixins: breakpoints (sm/md/lg/xl/xxl), container mixin
```

## `src/lib/` — Utilities
- `config.ts` — `siteConfig` object: company info, contacts, bank details, navigation links. **Single source of truth for all site-wide data.**
- `utils.ts` — `cn()` helper for class merging

## `src/hooks/` — Custom Hooks
- `useSmoothScroll.ts` — scroll to a section by element ID with offset
- `useBodyScrollLock.ts` — lock/unlock body scroll (used by mobile menu)

## `template/` — Starter Template
A stripped-down copy of the project used as a base template for new projects. **Do not modify** unless intentionally updating the template itself.

## Key Conventions
- **Server vs Client components**: Pages (`page.tsx`) are server components by default. Add `'use client'` only when needed (event handlers, hooks, browser APIs).
- **Section pattern**: Each home page section is a named export from `src/components/index/`. Sections are composed in `src/app/page.tsx`.
- **All site-wide text/contact data** comes from `siteConfig` in `src/lib/config.ts` — never hardcode company info in components.
- **Sections use `id` attributes** for smooth-scroll targeting (e.g., `id="contacts"`).
- **Container class**: Use `className="container"` (defined in globals.scss via the `container` mixin) for consistent max-width and padding.
