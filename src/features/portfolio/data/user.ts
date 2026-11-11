import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Nuno",
  lastName: "Santos",
  displayName: "Nuno Santos",
  username: "nunosantosdev",
  bio: "Senior Frontend Developer in Portugal with 10+ years building fast, pixel-perfect web apps with React, Next.js and TypeScript.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Senior Frontend.",
    "Open source contributor.",
    "I have 2 daughters.",
  ],
  address: "Caldas da Rainha, Portugal",
  phoneNumberB64: "OTEwMjg4NDI1", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "aGVsbG9AbnVub3NhbnRvcy5tZQ==", // base64 encoded
  website: "https://nunosantos.me",
  jobTitle: "Senior Frontend Developer",
  jobs: [
    {
      title: "Frontend Developer",
      company: "inginfinitive",
      website: "https://www.inginfinitive.pt",
    },
    // {
    //   title: "Founder",
    //   company: "mixtech.pt",
    //   website: "https://www.instagram.com/mixtech.pt",
    // },
  ],
  about: `- I’m Nuno Santos — a Frontend Senior with 10+ years of experience, known for pixel-perfect execution and an obsessive attention to detail.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.
- Creator of [GIN Design](https://gindesign.online) (Design System), [Vila Safe](https://fozdoarelho.vilasafe.pt) and [Doçura ou Travessura](https://www.docuraoutravessura.pt).
`,
  avatar: "/images/me.webp",
  avatarVariants: {
    lightOff: "/images/me.webp",
    lightOn: "/images/me.webp",
    darkOff: "/images/me-dark.webp",
    darkOn: "/images/me-dark.webp",
    /* lightOff: "/images/avatar-light-off.webp",
    lightOn: "/images/avatar-light-on.webp",
    darkOff: "/images/avatar-dark-off.webp",
    darkOn: "/images/avatar-dark-on.webp", */
  },
  ogImage: "/images/me.webp",
  timeZone: "Europe/Lisbon",
  keywords: [
    "Nuno Santos",
    "nunosantosdev",
    "Senior Frontend Developer",
    "Frontend Developer Portugal",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Caldas da Rainha",
  ],
  dateCreated: "2026-09-15", // YYYY-MM-DD
}
