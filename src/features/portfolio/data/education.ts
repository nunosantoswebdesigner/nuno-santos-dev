import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "huggingface-mcp",
    school: "Hugging Face",
    degree: "Online Course · Certificate",
    fieldOfStudy: "MCP Course",
    period: {
      start: "2026",
      end: "2026",
    },
    description: `- Learned the Model Context Protocol architecture: hosts, clients, servers and transports.
- Built MCP servers exposing tools, resources and prompts to LLM applications.
- Connected MCP servers to AI assistants and agent workflows.`,
    skills: ["MCP", "AI Agents", "LLM APIs", "Tool Calling"],
  },
  {
    id: "codecademy-ai-frontend",
    school: "Codecademy",
    degree: "Online Course · Certificate",
    fieldOfStudy: "AI-Assisted Front-End Development",
    period: {
      start: "2026",
      end: "2026",
    },
    description: `- Used AI coding assistants to scaffold, refactor and debug front-end code.
- Wrote effective prompts to generate components, tests and documentation.
- Reviewed and validated AI-generated code for quality and accessibility.`,
    skills: [
      "AI-Assisted Development",
      "Prompt Engineering",
      "GitHub Copilot",
      "Code Review",
    ],
  },
  {
    id: "google-ai-essentials",
    school: "Google · Coursera",
    degree: "Online Course · Certificate",
    fieldOfStudy: "Google AI Essentials",
    period: {
      start: "2025",
      end: "2025",
    },
    description: `- Learned how generative AI tools work and where they fit in daily work.
- Practiced prompt engineering to get accurate, useful outputs.
- Covered responsible AI use, bias and the limits of AI tools.`,
    skills: ["Generative AI", "Prompt Engineering", "Responsible AI"],
  },
  {
    id: "nextjs-learn",
    school: "Vercel · nextjs.org/learn",
    degree: "Online Course",
    fieldOfStudy: "Next.js App Router",
    period: {
      start: "2025",
      end: "2025",
    },
    description: `- Built a full-stack dashboard with the Next.js App Router.
- Used Server Components, data fetching and streaming with Suspense.
- Implemented Server Actions, form validation, authentication and metadata for SEO.`,
    skills: [
      "Next.js",
      "Server Components",
      "Server Actions",
      "SSR",
      "Streaming",
    ],
  },
  {
    id: "epic-react-advanced",
    school: "Epic React · Kent C. Dodds",
    degree: "Online Workshop",
    fieldOfStudy: "Advanced React APIs & Hooks",
    period: {
      start: "2024",
      end: "2024",
    },
    description: `- Managed complex state with useReducer and shared it through Context.
- Built reusable custom hooks and composable component patterns.
- Covered useLayoutEffect, useImperativeHandle, useSyncExternalStore and focus management.`,
    skills: ["React", "Hooks", "Context API", "useReducer", "Custom Hooks"],
  },
  {
    id: "cencal",
    school: "CENCAL — Caldas da Rainha",
    degree: "Professional Course",
    fieldOfStudy: "Web Development Environment",
    period: {
      start: "2014",
      end: "2015",
    },
  },
]
