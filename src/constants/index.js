import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  express,
  mongodb,
  git,
  threejs,
  c,
  cplus,
  mysql,
  github,
  gitlab,
  postman,
  datastructure,
  metafic,
  luertech,
  microsoft,
  veggiefresh,
  filesmob,
  rakshak,
  nextjs,
  django,
  postgres,
  tensorlogo,
  chakachak,
  applySathi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend",
    icon: [
      { name: "HTML", import: html },
      { name: "CSS", import: css },
      { name: "JavaScript", import: javascript },
      { name: "ReactJS", import: reactjs },
      { name: "React Native", import: reactjs },
      { name: "Next.js", import: nextjs },
      { name: "TypeScript", import: typescript },
      { name: "Redux Toolkit", import: redux },
      { name: "Tailwind CSS", import: tailwind },
    ],
  },
  {
    title: "Backend",
    icon: [
      { name: "NodeJS", import: nodejs },
      { name: "ExpressJS", import: express },
      { name: "Django", import: django },
      { name: "C", import: c },
      { name: "C++", import: cplus },
    ],
  },
  {
    title: "Databases",
    icon: [
      { name: "MySQL", import: mysql },
      { name: "MongoDB", import: mongodb },
      { name: "PostgreSQL", import: postgres },
    ],
  },
  {
    title: "Others",
    icon: [
      { name: "Git", import: git },
      { name: "Github", import: github },
      { name: "Gitlab CI/CD", import: gitlab },
      { name: "Postman", import: postman },
      { name: "Data Structure & Algorithms", import: datastructure },
    ],
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Next.js",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Tensor Solution Tech Pvt Ltd - Remote",
    icon: tensorlogo,
    iconBg: "#1f242b",
    date: "July 2023 - Present",
    points: [
      "Developing a cutting-edge hyperlocal marketplace with POS systems for restaurants, groceries, and pharmacies using ReactJS and Django.",
      "Integrated ONDC for seamless hyperlocal marketplace connectivity and built AI-powered digital catalogs with custom QR designs.",
      "Implemented Redux for efficient state management and crafted a modern, responsive UI with Tailwind CSS.",
      "Optimized APIs with Django Rest Framework (DRF) and ensured scalable database solutions using PostgreSQL.",
      "Worked with technologies like Typesense, Docker, and ONDC to deliver robust digital commerce solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Metafic - Internship - Indore, MP",
    icon: metafic,
    iconBg: "#1f242b",
    date: "January 2023 - June 2023",
    points: [
      "Created responsive web applications with JavaScript, HTML, CSS, React, and Bootstrap. Utilized RESTful APIs and Git for teamwork.",
      "Applied Test-Driven Development (TDD), crafting unit tests using frameworks like Jest and debugging meticulously.",
      "Established GitLab CI/CD pipelines, automating builds, tests, and deployments, ensuring reliable production releases.",
      "Actively engaged in Agile practices, including code reviews, feedback, and promoting knowledge sharing.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Luertech Software Solutions - Internship - Remote",
    icon: luertech,
    iconBg: "#1f242b",
    date: "Dec. 2021 - March 2022",
    points: [
      "Worked as a frontend developer on live NGO website in HTML, CSS, JS, PHP.",
      "Developed, maintained, and enhanced the website's functionality.",
      "Collaborated with internal teams to achieve desired outcomes.",
      "Conducted browser testing and resolved any issues through debugging.",
    ],
  },
  {
    title: "Virtual Intern",
    company_name: "Microsoft Future Ready Talent - Remote",
    icon: microsoft,
    iconBg: "#1f242b",
    date: "Oct 2022 - Dec 2021",
    points: [
      "Acquired in-demand Azure cloud and security skills tailored to industry requirements.",
      "Program focused on equipping learners to address business issues and develop inventive solutions with Microsoft Azure and GitHub tools.",
      "Developed a virtual healthcare assistant using Azure Health Bot, harnessing various Microsoft Azure Services.",
      "Applied knowledge to create innovative solutions and solve challenges within the healthcare domain.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "IET DAVV Indore",
    year: "2019-2023",
  },
  {
    degree: "XII",
    institution: "PPS Dewas (CBSE)",
    year: "2017-2018",
  },
  {
    degree: "X",
    institution: "PPS Dewas (CBSE)",
    year: "2015-2016",
  },
];

const projects = [
  {
    name: "Chaka-Chak",
    description:
      "Built 'Chaka-Chak', a personal apparel platform using Next.js, Node.js, and MongoDB. Supports product customization, color-sync, and secure payments. SEO-optimized and performance-tuned. 🚀 Served 50+ happy customers!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: chakachak,
    source_code_link: "https://github.com/adarsh-206/ecommerce-platform",
    live_link: "https://chaka-chak.in",
  },
  {
    name: "ApplySathi",
    description:
      "Building 'ApplySathi', a simple email companion for job seekers using the MERN stack and Gmail SMTP. It helps streamline job applications with smart email listings, reusable templates, intuitive UI, and efficient email tracking and organization tools.",
    tags: [
      {
        name: "mern",
        color: "green-text-gradient",
      },
      {
        name: "smtp",
        color: "pink-text-gradient",
      },
      {
        name: "gmailapi",
        color: "blue-text-gradient",
      },
    ],
    image: applySathi,
    source_code_link: "https://github.com/adarsh-206/MailSender",
    live_link: "https://applysathi-27349.web.app",
  },
  {
    name: "Rakshak",
    description:
      "Web-based platform that allows multiple type of users like donar, hospital, organisation and admin to search, donate, and manage blood sample data from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "htmlcssjs",
        color: "pink-text-gradient",
      },
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "orange-text-gradient",
      },
    ],
    image: rakshak,
    source_code_link: "https://github.com/adarsh-206/Rakshak/tree/main",
    live_link: "https://rakshak-slec.onrender.com/",
  },
  {
    name: "FilesMob",
    description:
      "This web application provides users with a convenient platform to effortlessly share files using either a generated link or a QR code. Additionally, it offers the option to directly send the sharing link via email, streamlining the process of file distribution.",
    tags: [
      {
        name: "htmlcssjs",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: filesmob,
    source_code_link: "https://github.com/adarsh-206/filesmob",
    live_link: "https://adarsh-206.github.io/filesmob",
  },
  {
    name: "VeggieFresh",
    description:
      "A real-time vegetable delivery app allowing users to order fresh produce via Card or COD. Admins can monitor order status and payment. Users can track orders in real-time, facilitated by Socket.io. Card payments are processed through integrated Stripe.",
    tags: [
      {
        name: "htmlcssjs",
        color: "orange-text-gradient",
      },
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "nodemailer",
        color: "pink-text-gradient",
      },
    ],
    image: veggiefresh,
    source_code_link: "https://github.com/adarsh-206/VeggieFresh",
    live_link: "https://veggie-fresh.herokuapp.com/",
  },
];

export { services, technologies, experiences, education, projects };
