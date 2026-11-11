import { Building2Icon, CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

// Company logos live in public/images/companies/. Uncomment `companyLogo` once
// the file exists; until then `companyIcon` is shown as a fallback.
export const EXPERIENCES: Experience[] = [
  {
    id: "ing-infinitive",
    companyName: "ING Infinitive",
    // companyLogo: "/images/companies/ing-infinitive.svg",
    companyIcon: <Building2Icon strokeWidth={1.8} />,
    location: "Switzerland",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Senior Frontend Developer",
        employmentPeriod: {
          start: "2021",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Developed layouts and components for a Ski Sports application, ensuring responsive design and optimal user experience for the Swiss Ski Federation.
- Designed and implemented the frontend architecture, creating scalable HTML layouts and reusable components tailored to the application's requirements.
- Led the development and maintenance of a PWA, implementing features such as offline support, GPS, push notifications and responsive design.
- Participated in discovery sessions to gather requirements, contribute to prototypes, and support cross-functional collaboration for delivering user-focused interfaces.`,
        skills: [
          "PWA",
          "Frontend Architecture",
          "Component Based Design",
          "Responsive Design",
          "Push Notifications",
          "GPS",
          "Offline Support",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "share-it",
    companyName: "Share IT | Alencastre Group",
    // companyLogo: "/images/companies/share-it.svg",
    companyIcon: <Building2Icon strokeWidth={1.8} />,
    location: "Parque Tecnológico de Óbidos, Portugal",
    positions: [
      {
        id: "1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "2019",
          end: "2021",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Developed PWA applications in React.js, featuring integrated maps and GPS functionalities for location tracking and coordination. These applications were tailored for clients and lobbies of Meliã Hotels.
- Developed responsive markups with Bootstrap and JavaScript for Umbraco platform integration, converting prototypes from Figma to HTML.
- Designed and developed HTML email templates for MailChimp marketing campaigns.`,
        skills: [
          "React",
          "PWA",
          "Maps",
          "GPS",
          "JavaScript",
          "Bootstrap",
          "Umbraco",
          "Figma",
          "MailChimp",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "inm",
    companyName: "INM Innovation Makers",
    // companyLogo: "/images/companies/inm.svg",
    companyIcon: <Building2Icon strokeWidth={1.8} />,
    location: "Lisboa / Parque Tecnológico de Óbidos, Portugal",
    positions: [
      {
        id: "1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "2017",
          end: "2019",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Developed animations using JavaScript and Sass for integration into payment applications on vending kiosks deployed in Africa.
- Mentored interns by overseeing their daily tasks and facilitating their integration into the team.
- Key touch point for client's marketing, research, and development team for discussing project ideas, capturing their goals, and turning them into visual designs and layouts for client review.`,
        skills: ["JavaScript", "Sass", "Animation", "Mentoring", "UI Design"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "janela-digital",
    companyName: "Janela Digital | Casa Sapo",
    // companyLogo: "/images/companies/janela-digital.svg",
    companyIcon: <Building2Icon strokeWidth={1.8} />,
    location: "Parque Tecnológico de Óbidos, Portugal",
    positions: [
      {
        id: "1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "2015",
          end: "2017",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Developed responsive websites in HTML5, JavaScript, PHP, and Less for Ego Real Estate platform, focusing on the real estate market.
- Designed and developed templates for web stores and JavaScript plugins for real estate market platforms.`,
        skills: ["HTML5", "JavaScript", "PHP", "Less", "Responsive Design"],
        isExpanded: true,
      },
    ],
  },
]
