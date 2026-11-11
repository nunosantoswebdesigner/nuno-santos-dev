import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { USER } from "@/features/portfolio/data/user"

export const alt = `${USER.displayName} – ${USER.jobTitle}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const [geistSemiBold, geistMonoRegular] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/Geist-SemiBold.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/GeistMono-Regular.ttf")),
  ])

  return new ImageResponse(
    <div tw="flex h-full w-full bg-black text-zinc-50">
      <div tw="absolute inset-y-0 left-12 flex w-px border border-zinc-800" />
      <div tw="absolute inset-y-0 right-12 flex w-px border border-zinc-800" />
      <div tw="absolute inset-x-0 top-12 flex h-px border border-zinc-800" />
      <div tw="absolute inset-x-0 bottom-12 flex h-px border border-zinc-800" />

      <div tw="absolute top-18 left-18 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 256"
          width={128}
          height={64}
        >
          <path
            fill="currentColor"
            d="M0 0H64V256H0ZM192 0H256V256H192ZM64 64H128V128H64ZM128 128H192V192H128ZM320 0H512V64H320ZM320 64H384V128H320ZM448 128H512V192H448ZM320 192H512V256H320Z"
          />
        </svg>
      </div>

      <div tw="absolute inset-x-0 top-40 bottom-24 flex flex-col justify-end border-t-2 border-zinc-800">
        <div
          tw="border-t-2 border-b-2 border-zinc-800 px-18"
          style={{
            fontFamily: "GeistSans",
            fontWeight: 600,
            fontSize: 80,
            lineHeight: 1,
            letterSpacing: "-0.025em",
          }}
        >
          {USER.displayName}
        </div>

        <div
          tw="flex border-b-2 border-zinc-800 px-18 py-8 text-zinc-400"
          style={{
            fontFamily: "GeistMono",
            fontWeight: 400,
            fontSize: 32,
            lineHeight: 1.25,
          }}
        >
          {`${USER.jobTitle} · ${urlHost(USER.website)}`}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "GeistSans", data: geistSemiBold, weight: 600 },
        { name: "GeistMono", data: geistMonoRegular, weight: 400 },
      ],
    }
  )
}

function urlHost(url: string) {
  return new URL(url).host
}
