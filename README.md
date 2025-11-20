# Axiom Trade Token Discovery — Replica (Next.js + TypeScript + Tailwind)

This repository is a pixel-focused replica of Axiom Trade's token discovery table built with Next.js 14 App Router, TypeScript (strict), Tailwind CSS, Redux Toolkit, and React Query. It includes a mock WebSocket for real-time price updates and accessible popovers/tooltips.

Features implemented
- Token columns: New Pairs, Final Stretch, Migrated (categories)
- Sortable columns (symbol, price, 24h)
- Hover effects, click interactions, popover/tooltip/modal hooks available
- Real-time price updates via a mock WebSocket with smooth color transitions
- Loading states: skeleton shimmer and error boundaries
- Performance: memoized rows and simple optimizations

Run locally

1. Install dependencies

```powershell
cd d:\Projects\Eterna
npm install
```

2. Run dev server

```powershell
npm run dev
```

Open http://localhost:3000

Deployment
- Connect this repo to Vercel and deploy the `main` branch. Next.js App Router is supported.

Visual regression and verification
- For pixel-perfect verification (≤ 2px), use a visual diff tool like Percy or Playwright snapshot compare. Capture the component at multiple breakpoints (desktop, tablet, mobile down to 320px) and compare against the reference.

Notes and next steps
- Add Radix popover/tooltip and a modal with detailed token view (stubs included).
- Implement end-to-end tests and CI to auto-run visual regression.
- Record a 1-2 minute public YouTube video showcasing interactions and deployment steps (user must create and upload video).
