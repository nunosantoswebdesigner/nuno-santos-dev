import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  x: {
    title: "X",
    handle: "@nunosantosdev",
    href: "https://x.com/nunosantosdev",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "nunosantoswebdesigner",
    href: "https://github.com/nunosantoswebdesigner",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "nunosantosdev",
    href: "https://www.linkedin.com/in/nunosantosdev/",
    sameAs: true,
  },
  instagram: {
    title: "Instagram",
    handle: "@nunosantosdev",
    href: "https://www.instagram.com/nunosantosdev",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "nunosantosdev",
    href: "https://discord.com/users/749214116492607549",
  },
  youtube: {
    title: "YouTube",
    handle: "@nunosantosdev",
    href: "https://www.youtube.com/@nunosantosdev",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
