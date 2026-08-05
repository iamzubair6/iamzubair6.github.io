import {
  alfatah,
  antd,
  css,
  figma,
  git,
  html,
  image1,
  image10,
  image17,
  image18,
  image19,
  image20,
  javascript,
  material,
  mongodb,
  next,
  reactjs,
  scss,
  tailwind,
  techsist,
  threejs,
  typescript,
  web,
} from "../assets";

import rajulaw from "../assets/company/rajulaw.png";
import maison from "../assets/maison.png";
import ouropero from "../assets/ouropero.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React.js Development",
    icon: reactjs,
  },
  {
    title: "Next.js Development",
    icon: next,
  },
  {
    title: "UI/UX Implementation",
    icon: figma,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next js",
    icon: next,
  },
  {
    name: "Material UI",
    icon: material,
  },
  {
    name: "Ant Design",
    icon: antd,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer (Frontend)",
    company_name:
      "Raju Law – US Immigration & Investment Attorneys · USA (Remote)",
    icon: rajulaw,
    iconBg: "#ffffff",
    date: "April 2025 - Present",
    points: [
      "Build and maintain the firm's HRM and CRM platforms, used daily by ~150 active users, owning frontend delivery from wireframe to production.",
      "Developed Smart Assist, an OpenAI-powered assistant inside the HRM that answers natural-language questions over HR data, replacing manual navigation across modules.",
      "Restored the failing AWS Amplify deployment pipeline and cut production build time ~18% by lazy-loading heavy dependencies and pruning the build graph.",
      "Build the frontend of OurOpero (ouropero.com), the firm's all-in-one project & workflow management SaaS.",
      "Built a shared, typed component library standardizing forms (React Hook Form + Zod), data tables, and JWT auth flows.",
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Techsist Ltd · Dhaka, Bangladesh",
    icon: techsist,
    iconBg: "#383E56",
    date: "November 2022 - April 2025",
    points: [
      "Progressed from Intern to Software Engineer II through five promotions in 2.5 years.",
      "Delivered 15+ production client applications end-to-end, including dealership management (Metrocem Automobiles), manufacturing operations (Metrocem Ispat), learning management systems (Edstructure, Borgo), and e-commerce (Mesmerize).",
      "Implemented secure JWT authentication, role-based access, input validation, and complex sortable/filterable data tables reused across projects.",
      "Managed server state with TanStack Query and built responsive, cross-browser UIs with Material-UI, Ant Design, and Tailwind CSS.",
    ],
  },
  {
    title: "Jr. Service Engineer",
    company_name: "AL-Fatah International · Dhaka, Bangladesh",
    icon: alfatah,
    iconBg: "gray",
    date: "March 2022 - October 2022",
    points: [
      "Customer-facing technical support and equipment servicing role; transitioned into software engineering the same year.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've worked closely with Zubair on multiple frontend projects, and he has been one of the most dependable React engineers on our team. He takes ownership of tasks, writes maintainable code, and collaborates effectively across backend, QA, and design teams.",
    name: "Gm Zulkar Nine",
    designation: "Software Engineer & System Architect",
    company: "Raju Law",
    image:
      "https://ui-avatars.com/api/?name=Zulkar+Nine&background=1a4f8a&color=fff",
  },
  {
    testimonial:
      "Zubair consistently demonstrated a strong command of frontend development — the interfaces he delivered were clean, responsive, and user-focused. Working alongside him as a backend engineer, I always found our integration seamless, thanks to his clear communication and proactive approach.",
    name: "MD Abdul Alim",
    designation: "Software Engineer (Backend)",
    company: "Raju Law",
    image:
      "https://ui-avatars.com/api/?name=Abdul+Alim&background=915EFF&color=fff",
  },
];

const projects = [
  {
    name: "OurOpero",
    description:
      "All-in-one project & workflow management SaaS built at Raju Law — boards, docs, dashboards, automations, and time tracking in one workspace. I build the frontend.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "shadcn/ui", color: "pink-text-gradient" },
      { name: "TanStack Query", color: "orange-text-gradient" },
    ],
    image: ouropero,
    source_code_link: "",
    live_link: "https://www.ouropero.com/",
  },
  {
    name: "Maison",
    description:
      "Open-source headless fashion e-commerce + CMS: storefront pages composed from reorderable content blocks, guest checkout, promo codes, and parcel tracking on a Medusa.js commerce engine. Bun monorepo with Vitest and Playwright tests.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Medusa.js", color: "pink-text-gradient" },
      { name: "Prisma", color: "orange-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    image: maison,
    source_code_link: "https://github.com/iamzubair6/medusa-e-ecommerce",
    live_link: "https://medusa-e-ecommerce-web.vercel.app/",
  },
  {
    name: "My Maid Support",
    description:
      "Cleaning-services booking platform built solo for an Australian client — marketing site plus service booking flows, with a focus on usability and conversion.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "shadcn/ui", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
      { name: "Framer Motion", color: "blue-text-gradient" },
    ],
    image: image19,
    source_code_link: "",
    live_link: "https://mymaidsupport.com/",
  },
  {
    name: "Metrocem Automobiles",
    description:
      "Dealership management frontend for MetroCem Automobiles — vehicle inventory, sales, service appointments, and customer relationships in a responsive web app.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "shadcn/ui", color: "pink-text-gradient" },
      { name: "REST API", color: "orange-text-gradient" },
    ],
    image: image18,
    source_code_link: "",
    live_link: "https://automobiles.techsistltd.com/?lang=en",
  },
  {
    name: "Metrocem Ispat",
    description:
      "Web application for Metrocem Ispat, providing the UI for managing steel manufacturing operations and business processes.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "shadcn/ui", color: "pink-text-gradient" },
      { name: "REST API", color: "orange-text-gradient" },
    ],
    image: image20,
    source_code_link: "",
    live_link: "https://ispat.techsistltd.com/?lang=en",
  },
  {
    name: "Umar Education",
    description:
      "Server-side-rendered, SEO-optimized platform for a study-abroad education consultancy.",
    tags: [
      { name: "Next.js (SSR)", color: "blue-text-gradient" },
      { name: "Material-UI", color: "green-text-gradient" },
      { name: "REST API", color: "pink-text-gradient" },
    ],
    image: image17,
    source_code_link: "",
    live_link: "https://umar-eg.com/",
  },
  {
    name: "Edstructure",
    description:
      "Complete learning management system for schools and universities — courses, materials, and student management.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "SCSS", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "TanStack Query", color: "orange-text-gradient" },
    ],
    image: image10,
    source_code_link: "",
    live_link: "https://edstructure.com",
  },
  {
    name: "Mesmerize: Express Your Love",
    description:
      "E-commerce platform for customized gifts, from product browsing to checkout.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Material-UI", color: "green-text-gradient" },
      { name: "TanStack Query", color: "pink-text-gradient" },
      { name: "REST API", color: "orange-text-gradient" },
    ],
    image: image1,
    source_code_link: "",
    live_link: "https://mesmerizebd.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
