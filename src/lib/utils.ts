export { cn } from "cn"

// Same fallback as SITE_INFO.url, inlined to keep this module free of imports
// that would create a cycle with src/config/site.ts.
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL || "https://nunosantos.me"}${path}`
}
