import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

export const revalidate = false
export const dynamic = "force-static"

// Only routes allowed by src/proxy.ts belong here; add pages back as they
// are re-enabled.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_INFO.url,
      lastModified: new Date().toISOString(),
    },
  ]
}
