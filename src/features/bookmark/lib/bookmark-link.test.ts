import { describe, expect, it } from "vitest"

import { getBookmarkExternalHref } from "./bookmark-link"

describe("getBookmarkExternalHref", () => {
  it("appends utm_source", () => {
    expect(getBookmarkExternalHref("https://example.com/page")).toBe(
      "https://example.com/page?utm_source=nunosantos.me"
    )
  })

  it("preserves params already on the url", () => {
    const href = getBookmarkExternalHref(
      "https://example.com?atp=nunosantosdev"
    )

    expect(href).toContain("atp=nunosantosdev")
    expect(href).toContain("utm_source=nunosantos.me")
    expect(href.indexOf("atp=nunosantosdev")).toBeLessThan(
      href.indexOf("utm_source=nunosantos.me")
    )
  })

  it("returns invalid urls unchanged", () => {
    expect(getBookmarkExternalHref("not a url")).toBe("not a url")
  })

  it("normalizes bare origins with a trailing slash", () => {
    expect(getBookmarkExternalHref("https://animations.dev")).toBe(
      "https://animations.dev/?utm_source=nunosantos.me"
    )
  })
})
