import {
  alfatah,
  antd,
  css,
  figma,
  git,
  html,
  image1,
  image10,
  image11,
  image12,
  image13,
  image14,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
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
    title: "Web Developer",
    icon: web,
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
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
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
    title: "Frontend Developer",
    company_name: "Techsist Ltd",
    icon: techsist,
    iconBg: "#383E56",
    date: "Novemeber 2022 - Present",
    points: [
      "Develop user-friendly web interfaces using React.js and related libraries.",
      "Set up secure login systems for user authentication for protection and privacy.",
      "Created validation systems for accurate user inputs.",
      "Developed organized and user-friendly data tables for easy data sorting and filtering.",
    ],
  },
  {
    title: "Jr. Service Engineer",
    company_name: "AL-Fatah International",
    icon: alfatah,
    iconBg: "gray",
    date: "March 2022 - October 2022",
    points: [
      "Customer handling.",
      "Field service and identify the problem.",
      "Equipment/Machine maintenance as customer required.",
      "Inventory management.",
      "Prepare Bill, Service report, Challan.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Edstructure",
    description: "Edstructure is a complete learning management system.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "react quary",
        color: "pink-text-gradient",
      },
    ],
    image: image10,
    source_code_link: "",
    live_link: "https://edstructure.com/home",
  },
  {
    name: "Rongdhonu Group",
    description: "A Company Portfolio Website of Rongdhonu Group.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Swiper",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "workbox-routing",
        color: "pink-text-gradient",
      },
    ],
    image: image12,
    source_code_link: "",
    live_link: "https://www.rongdhanugroup.com/",
  },
  {
    name: "Notun Asha",
    description: "Online news portal of daily notun asha.",
    tags: [
      {
        name: "techsist-ltd",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "react-quary",
        color: "blue-text-gradient",
      },
    ],
    image: image2,
    source_code_link: "",
    live_link: "https://dailynotunasha.com/",
  },
  {
    name: "Uxpro Labs",
    description:
      "Online land/property selling website. Where user can register by user role like Seller, Buyer, Landlord, Tenant, login, post property, buy property, sell property, and search property.",
    tags: [
      {
        name: "rect js",
        color: "pink-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "react-quary",
        color: "blue-text-gradient",
      },
    ],
    image: image13,
    source_code_link: "",
    live_link: "https://myuxpro.com/",
  },
  {
    name: "Borgo",
    description:
      "Borgo is a complete learning management system for school, college, university, this service offers users all the nessary features(Account, Material, Live class, Meeting, Events, Noticeboard, Routine, etc.) to manage their education system",
    tags: [
      {
        name: "react js",
        color: "pink-text-gradient",
      },
      {
        name: "Ant Design",
        color: "blue-text-gradient",
      },
      {
        name: "charts",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "react-quary",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: image14,
    source_code_link: "",
    live_link: "",
  },

  {
    name: "XYZ Engine",
    description:
      "This project is about data parse and calculation from CSV file. User can upload CSV file that have X,Y,Z row, after uploading file internal calculation will happen and user will get max and min values of X,Y,Z. By uploading CSV file user can see chart",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Material-ui",
        color: "green-text-gradient",
      },
      {
        name: "react router",
        color: "pink-text-gradient",
      },
      {
        name: "chart js",
        color: "green-text-gradient",
      },
    ],
    image: image8,
    source_code_link: "https://github.com/iamzubair6/xyz-engine",
    live_link: "https://xyz-battery-engine.vercel.app/",
  },
  {
    name: "Sortable Image Gallery",
    description:
      "This project is about sortable image gallery. Here user can sort image by position and active image will be highlight with big width, user can aslo select multiple image and delete them",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Dnd kit",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
    ],
    image: image11,
    source_code_link: "https://github.com/iamzubair6/sortable-image-grid",
    live_link: "https://sortable-image-grid.vercel.app/",
  },
  {
    name: "Multiverse-Madness",
    description: "This project is about virtual reality.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "telwind",
        color: "pink-text-gradient",
      },
    ],
    image: image5,
    source_code_link: "https://github.com/iamzubair6/multiverse-madness-nextjs",
    live_link: "https://multiverse-madness-nextjs.vercel.app/",
  },
  {
    name: "Corber | Dashboard",
    description:
      "This is complete dashboard system for manageing medicine and crops data. Here admin can upload corps image with complete details and crops disease. Admin can also uload and manage medicine data. This dashboad have create, edit, delete option with full dynamic state",
    tags: [
      {
        name: "react js",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "react quary",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: image9,
    source_code_link: "",
    live_link: "",
  },

  {
    name: "Mesmerize Dashboard",
    description:
      "A full featured dashboard for managing Mesmerize admin panel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "react-quary",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "blue-text-gradient",
      },
    ],
    image: image3,
    source_code_link: "",
    live_link: "",
  },

  {
    name: "Downtownbd",
    description: "This project is based on resturent menu fully responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: image7,
    source_code_link: "https://github.com/iamzubair6/Simple-menu-vite",
    live_link: "https://www.downtownbd.xyz/",
  },
  {
    name: "Mesmerize: Express Your Love",
    description: "E-commerce site for customized gifts and more",
    tags: [
      {
        name: "techsist ltd",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "material-Ui",
        color: "pink-text-gradient",
      },
      {
        name: "react-quary",
        color: "blue-text-gradient",
      },
    ],
    image: image1,
    source_code_link: "",
    live_link: "https://mesmerizebd.com/",
  },
  {
    name: "Edstructure Dashboard",
    description: "A complete education management system",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "react-quary",
        color: "green-text-gradient",
      },
    ],
    image: image6,
    source_code_link: "",
    live_link: "",
  },
  {
    name: "Personal portfolio",
    description:
      "This is my personal portfolio website for showcasing my work.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "telwind",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
    ],
    image: image4,
    source_code_link: "https://github.com/iamzubair6/Portfolio",
    live_link: "",
  },
];

export { experiences, projects, services, technologies, testimonials };
