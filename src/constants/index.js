

export const navLinks = [

  {
    id: 1,
    name: 'About',
    href: '#about',
  },
  {
    id: 2,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 3,
    name: 'Contact',
    href: '#contact',
  },
];




export const myProjects = [
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://github.com/Natoli74/liveDocs.git',
    texture: '/textures/project/docsVid.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Bank Management System',
    desc: 'An innovative Java-based application designed to streamline banking operations. This software provides a user-friendly interface for managing accounts, transactions, and reports. ',
    subdesc:
      'The system is built with a focus on modularity and maintainability, allowing for easy updates and feature enhancements. With robust functionalities, it serves as a comprehensive solution for both customers and bank staff.',
    href: 'https://github.com/Natoli74/bank-management-system.git',
    texture: '/textures/project/bankVid.mp4',
    logo: '/assets/bankLogo.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.png',
      },
    
    ],
  },
  {
    title: 'Tesgera\'s Sushi',
    desc: 'A simplistic yet elegant web application designed to provide a seamless user experience. Built using raw HTML, CSS, and JavaScript, this website showcases a clean and modern interface that is easy to navigate. ',
    subdesc:
      'With a focus on minimalism, the design prioritizes usability and accessibility, making it suitable for a wide range of users. This website is interactive  with automatic update with a functional order menu.',
    href: 'https://github.com/Natoli74/tesgera-sushi.git',
    texture: '/textures/project/tsushiVid.mp4',
    logo: '/assets/tSushiLogo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'PHP',
        path: '/assets/php.png',
      },
    ],
  },
  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: '/underConstruction.html',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },

  {
    title: 'My 3D Space',
    desc: 'An engaging web-based application that leverages the power of Three.js to create immersive 3D environments. This platform allows users to experiment with 3D models and interactive coding experiences, providing a unique and dynamic way to showcase programming skills.',
    subdesc:
      'With a focus on minimalism, the design prioritizes usability and accessibility, making it suitable for a wide range of users. ',
    href: 'https://github.com/Natoli74',
    texture: '/textures/project/mySpace.mp4',
    logo: '/assets/my-space.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Three.js',
        path: 'assets/threejs.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/css.png',
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};


