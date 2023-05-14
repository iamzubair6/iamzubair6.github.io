import {
  css,
  figma,
  git,
  html,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  javascript,
  material,
  mongodb,
  next,
  reactjs,
  scss,
  tailwind,
  techsist,
  threejs,
  web,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Material UI',
    icon: material,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next js',
    icon: next,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'SCSS',
    icon: scss,
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Techsist Ltd',
    icon: techsist,
    iconBg: '#383E56',
    date: 'Novemeber 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ];

const projects = [
  {
    name: 'Notun Asha',
    description: 'Online news portal of daily notun asha.',
    tags: [
      {
        name: 'techsist-ltd',
        color: 'pink-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'green-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'pink-text-gradient',
      },
      {
        name: 'react-quary',
        color: 'blue-text-gradient',
      },
    ],
    image: image2,
    source_code_link: '',
    live_link: 'https://dailynotunasha.com/',
  },
  {
    name: 'Mesmerize: Express Your Love',
    description: 'E-commerce site for customized gifts and more',
    tags: [
      {
        name: 'techsist ltd',
        color: 'pink-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'green-text-gradient',
      },
      {
        name: 'material-Ui',
        color: 'pink-text-gradient',
      },
      {
        name: 'react-quary',
        color: 'blue-text-gradient',
      },
    ],
    image: image1,
    source_code_link: '',
    live_link: 'https://mesmerizebd.com/',
  },
  {
    name: 'Multiverse-Madness',
    description: 'This project is about virtual reality.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'telwind',
        color: 'pink-text-gradient',
      },
    ],
    image: image5,
    source_code_link: 'https://github.com/iamzubair6/multiverse-madness-nextjs',
    live_link: 'https://multiverse-madness-nextjs.vercel.app/',
  },
  {
    name: 'Downtownbd',
    description: 'This project is based on resturent menu fully responsive.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'green-text-gradient',
      },
      {
        name: 'vite',
        color: 'pink-text-gradient',
      },
    ],
    image: image7,
    source_code_link: 'https://github.com/iamzubair6/Simple-menu-vite',
    live_link: 'https://www.downtownbd.xyz/',
  },
  {
    name: 'Mesmerize Dashboard',
    description:
      'A full featured dashboard for managing Mesmerize admin panel.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'green-text-gradient',
      },
      {
        name: 'vite',
        color: 'pink-text-gradient',
      },
      {
        name: 'react-quary',
        color: 'green-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'blue-text-gradient',
      },
    ],
    image: image3,
    source_code_link: '',
    live_link: '',
  },
  {
    name: 'Personal portfolio',
    description:
      'This is my personal portfolio website for showcasing my work.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'telwind',
        color: 'green-text-gradient',
      },
      {
        name: 'vite',
        color: 'pink-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
    ],
    image: image4,
    source_code_link: 'https://github.com/iamzubair6/Portfolio',
    live_link: '',
  },
  {
    name: 'Edstructure Dashboard',
    description: 'A complete education management system',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'vite',
        color: 'pink-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
      {
        name: 'react-quary',
        color: 'green-text-gradient',
      },
    ],
    image: image6,
    source_code_link: '',
    live_link: '',
  },
];

export { services, technologies, experiences, projects };
