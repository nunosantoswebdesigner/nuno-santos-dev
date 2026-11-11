import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "vilasafe",
    title: "Vila Safe",
    period: {
      start: "11.2026",
    },
    link: "https://fozdoarelho.vilasafe.pt",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Supabase",
      "Mapbox GL",
      "PWA",
      "Web Push",
      "Gemini API",
      "Resend",
      "Vercel",
    ],
    description: `Public web app for reporting hazards on the street (potholes, open manhole covers, broken pavements) on an interactive map.
- Report with photo, exact location (GPS or map pick) and severity level
- AI-suggested title and description from the uploaded photo
- Manual moderation flow before reports are published on the map
- Installable PWA with push notifications for new and resolved reports
`,
    logo: "/images/projects/vilasafe.svg",
    isExpanded: true,
  },
  {
    id: "vilasafe-site",
    title: "Vila Safe — Landing Page",
    period: {
      start: "10.2026",
    },
    link: "https://vilasafe.pt",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Base UI",
      "CSS 3D",
      "Google Analytics",
    ],
    description: `Single-page landing for Vila Safe, presenting the app and how it works.
- Brand typography and design built from the design spec and HTML reference
- 3D phone mockup built in pure CSS (preserve-3d), no WebGL
- Dynamic Open Graph image generated at build time
`,
    logo: "/images/projects/vilasafe.svg",
  },
  {
    id: "docuraoutravessura",
    title: "Doçura ou Travessura",
    period: {
      start: "10.2026",
    },
    link: "https://www.docuraoutravessura.pt",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Base UI",
      "MapLibre GL",
      "Clerk",
      "Supabase",
      "Zustand",
      "Zod",
      "Resend",
      "Web Push",
      "PWA",
    ],
    description: `Community Halloween map for Portugal: find the houses giving out candy near you, plan your route and register your own house.
- Map with house pins whose state (candy, sold out, closed, visited) changes in real time during the night
- Filters, nearby list sorted by distance and a personal route with check-ins
- Hosts register their house in 4 steps and manage it live (pause, sold out, opening hours)
- Event phases: aggregated zones before the night, exact pins during it, recap after it
- Installable mobile-first PWA with push notifications and offline state
`,
    logo: "/images/projects/docuraoutravessura.svg",
  },
  {
    id: "sentinela",
    title: "Sentinela NFC",
    period: {
      start: "09.2026",
    },
    link: "https://sentinela.store",
    skills: [
      "Next.js 16",
      "React 19",
      "React Compiler",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Resend",
      "SEO",
      "Vercel",
    ],
    description: `Landing page for NFC + QR cards that open a business's Google review page with a single tap.
- Pricing packs and an order form with validation and transactional emails
- Legal pages, cookie consent and analytics loaded only after consent
- Full SEO setup: per-page metadata, Open Graph, sitemap, robots and llms.txt
`,
    logo: "/images/projects/sentinela.svg",
  },
  {
    id: "5sensesofportugal",
    title: "5 Senses of Portugal",
    period: {
      start: "08.2026",
    },
    link: "https://www.5sensesofportugal.com",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Radix UI",
      "Headless UI",
      "Motion",
      "Embla Carousel",
      "Resend",
      "SEO",
      "Vercel",
    ],
    description: `Website for a curated, all-inclusive retreat in Portugal for exclusive groups, with hosted trips covering accommodation, meals and activities.
- Immersive home page with a hero video, carousels and trip details
- Waitlist sign-up with transactional emails and one-click unsubscribe
- FAQ with structured data (JSON-LD), legal pages and SEO metadata
`,
    logo: "/images/projects/5sensesofportugal.svg",
  },
  {
    id: "gin-design",
    title: "GIN Design",
    period: {
      start: "06.2026",
    },
    link: "https://gindesign.online",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "shadcn registry",
      "Radix UI",
      "Fumadocs",
      "MDX",
      "Recharts",
      "Motion",
      "Figma API",
      "Design System",
    ],
    description: `Design system and shadcn registry with components, elements, blocks, charts and icons, installable with \`npx shadcn add\`.
- Four brand themes (Mint, Berries, Citrine, Cinnamon) applied through CSS variables
- Documentation site with live previews built on Fumadocs and MDX
- Figma diff to compare design tokens between Figma and the active theme
- Agent ready with llms.txt and API catalog endpoints for AI tools
`,
    logo: "/images/projects/gin-design.png",
  },
]
