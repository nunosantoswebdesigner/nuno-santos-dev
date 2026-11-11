import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://nunosantos.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/nunosantoswebdesigner/nuno-santos-dev/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Education",
    href: "/#education",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = SOCIAL.x.handle
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "nunosantoswebdesigner/nuno-santos-dev"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/nunosantoswebdesigner/nuno-santos-dev"

// No GitHub Sponsors account yet; point at the profile as a placeholder.
export const SPONSORSHIP_URL = "https://github.com/nunosantoswebdesigner"

export const UTM_PARAMS = {
  utm_source: "nunosantos.me",
}
