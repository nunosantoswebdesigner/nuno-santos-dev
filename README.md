<!-- Octopus - @octopus-writer, @writer · 25/09/26 -->

This project is managed by the Octopus dashboard, a local dashboard that orchestrates a local AI model and agents, allowing everything to run on the same machine (Ollama + Next.js + SQLite). No data is sent outside of the machine.

# [nunosantos.me](https://nunosantos.me)

Personal portfolio of Nuno Santos, Senior Frontend Developer based in Caldas da Rainha, Portugal.

## Overview

A single-page portfolio with experience, education, projects and tech stack, plus a downloadable resume.

### Stack

- TypeScript, Next.js 16 (App Router), React 19
- Tailwind CSS v4, shadcn/ui, Base UI, Motion
- Deployed on Vercel

### Features

- Clean, pixel-perfect design with light and dark themes
- Anchor navigation for Experience, Education and Projects
- Resume available as a PDF at [/resume.pdf](https://nunosantos.me/resume.pdf)
- SEO: metadata, Open Graph, JSON-LD, sitemap and robots
- AI-ready with [/llms.txt](https://nunosantos.me/llms.txt)
- Spam-protected email and phone number
- Installable as a PWA
- Analytics with [OpenPanel](https://openpanel.dev)

### Content

Portfolio content lives in `src/features/portfolio/data/`:

| File              | Section                              |
| ----------------- | ------------------------------------ |
| `user.ts`         | Profile, contacts and the about text |
| `experiences.tsx` | Experience                           |
| `education.ts`    | Education                            |
| `projects.tsx`    | Projects                             |
| `tech-stack.tsx`  | Stack                                |
| `social-links.ts` | Social links                         |

### Public routes

Only the home page, `/resume.pdf`, `/llms.txt`, `/sitemap.xml` and `/robots.txt` are public. Other routes (blog, components, blocks and so on) stay in the codebase but return 404 until they are added to the allowlist in `src/proxy.ts`.

## Development

Please refer to the [Development Guide](./DEVELOPMENT.md) for more details.

## License

The code is licensed under the [MIT license](./LICENSE). My name, logo and personal information are covered by the [trademark and brand policy](./TRADEMARK.md).

Based on [chanhdai.com](https://github.com/ncdai/chanhdai.com) by Chanh Dai, released under the MIT license.
