import { SITE_INFO } from "@/config/site"
import { EDUCATION } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"

// Self-contained: the site is a single page, so the per-section .md routes are
// not public and everything an agent needs lives in this one document.
const experience = EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const skills = position.skills?.join(", ") || "N/A"
      const description = position.description
        ? `\n\n${position.description.trim()}`
        : ""
      return `### ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}${description}`
    })
    .join("\n\n")
).join("\n\n")

const education = EDUCATION.map((item) => {
  const heading =
    [item.degree, item.fieldOfStudy].filter(Boolean).join(", ") || item.school
  const school = heading === item.school ? "" : ` | ${item.school}`
  const skills = item.skills?.length
    ? `\n\nSkills: ${item.skills.join(", ")}`
    : ""
  const description = item.description ? `\n\n${item.description.trim()}` : ""
  return `### ${heading}${school}\n\nDuration: ${item.period.start} - ${item.period.end || "Present"}${skills}${description}`
}).join("\n\n")

const projects = PROJECTS.map((item) => {
  const description = item.description ? `\n\n${item.description.trim()}` : ""
  return `### ${item.title}\n\nProject URL: ${item.link}\n\nSkills: ${item.skills.join(", ")}${description}`
}).join("\n\n")

const content = `# ${SITE_INFO.name}

> ${SITE_INFO.description}

- Website: ${SITE_INFO.url}
- Resume (PDF): ${SITE_INFO.url}/resume.pdf

## About

${USER.about.trim()}

- Location: ${USER.address}

## Social links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Tech stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Experience

${experience}

## Education

${education}

## Projects

${projects}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
