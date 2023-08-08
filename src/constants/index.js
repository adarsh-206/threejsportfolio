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
  rakshak
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
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
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
      { name: "TypeScript", import: typescript },
      { name: "Redux", import: redux },
      { name: "Tailwind CSS", import: tailwind },
    ],
  },
  {
    title: "Backend",
    icon: [
      { name: "NodeJS", import: nodejs },
      { name: "ExpressJS", import: express },
      { name: "C", import: c },
      { name: "C++", import: cplus },
    ],
  },
  {
    title: "Databases",
    icon: [
      { name: "MySQL", import: mysql },
      { name: "MongoDB", import: mongodb },
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
];

const experiences = [
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
      "Actively engaged in Agile practices, including code reviews, feedback, and promoting knowledge sharing."
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
      "Applied knowledge to create innovative solutions and solve challenges within the healthcare domain."
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
    name: "Rakshak",
    description:
      "Web-based platform that allows multiple type of users like donar, hospital, organisation and admin to search, donate, and manage blood sample data from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rakshak,
    source_code_link: "https://github.com/adarsh-206/Rakshak/tree/main",
  },
  {
    name: "FilesMob",
    description:
      "This web application provides users with a convenient platform to effortlessly share files using either a generated link or a QR code. Additionally, it offers the option to directly send the sharing link via email, streamlining the process of file distribution.",
    tags: [
      {
        name: "htmlcssjs",
        color: "blue-text-gradient",
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
  },
  {
    name: "VeggieFresh",
    description:
      "A real-time vegetable delivery app allowing users to order fresh produce via Card or COD. Admins can monitor order status and payment. Users can track orders in real-time, facilitated by Socket.io. Card payments are processed through integrated Stripe.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: veggiefresh,
    source_code_link: "https://github.com/adarsh-206/VeggieFresh",
  },
];

export { services, technologies, experiences, testimonials, projects };
