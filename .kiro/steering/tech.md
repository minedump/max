# Tech Stack

## Framework & Runtime
- **Next.js** (v16) with App Router
- **React** 18
- **TypeScript** 5 (strict mode)

## Styling
- **Tailwind CSS** v3 — utility-first styling, primary color `#0B1A2C` defined as `primary`
- **SCSS** (via `sass`) — global styles, variables, and mixins in `src/styles/`
- **`cn()` utility** — always use `cn()` from `@/lib/utils` (wraps `clsx` + `tailwind-merge`) for conditional class merging

## UI & Icons
- **@tabler/icons-react** — icon library, use `strokeWidth={1.5}` as default
- Custom UI primitives in `src/components/ui/`: `Button`, `Badge`, `Input`, `Logo`, `CookieConsent`, `TechIcons`

## Fonts
- **Roboto Mono** (monospace) — loaded via Google Fonts in `layout.tsx`, set as default body font
- **Cousine** — also loaded via Google Fonts

## Analytics
- **Yandex Metrika** — injected in `<head>` via `YandexMetrika` component

## Environment Variables
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base URL for metadata |
| `TELEGRAM_BOT_TOKEN` | Telegram bot API token |
| `TELEGRAM_CHAT_ID` | Telegram chat to receive form submissions |

## Common Commands
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
```

## Configuration Notes
- `trailingSlash: true` in `next.config.js` — all routes end with `/`
- `images.unoptimized: true` — Next.js image optimization is disabled
- Path alias `@/*` maps to `src/*`
- No test framework is currently configured
