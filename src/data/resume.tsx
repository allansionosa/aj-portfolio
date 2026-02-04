import { Icons } from '@/components/icons';
import { CodeIcon, HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Allan',
  initials: 'AJ',
  url: 'https://www.facebook.com/allanjohn123/',
  location: 'Quezon City, CP Garcia, U.P Campus',
  locationLink: 'https://maps.app.goo.gl/ZMBNyYt1VLErZdoz7',
  description:
    'A dedicated Full-Stack Web Developer with a passion for learning new things.',
  summary:
    'I have a robust understanding of both full-stack and back-end technologies, making me skilled in full-stack development. My curiosity and eagerness to learn have driven me to continually expand my expertise, particularly in web development. This has allowed me to stay current with industry trends and best practices, enhancing my ability to create innovative and effective solutions.',
  avatarUrl: '/me.jpg',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'C#',
    '.NET',
    'Javascript',
    'MSSQL',
    'Erlang',
    'TailwindCSS',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    { href: '/projects', icon: CodeIcon, label: 'Projects' },
  ],
  contact: {
    email: 'allansionosa@gmail.com',
    tel: '09512385721',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/allansionosa',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/allan-jhon-sionosa-554294242/',
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: 'Facebook',
        url: 'https://www.facebook.com/allanjohn123/',
        icon: Icons.facebook,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'allansionosa@gmail.com',
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Comlogik Business Systems',
      badges: [],
      location: 'On-site',
      title: 'Front-end Web Developer',
      href: 'https://comlogikph.com/',
      logoUrl: '/comlogik.png',
      start: 'Oct 2023',
      end: 'Present',
      description:
        'Create websites for our clients mainly hospitals from start to finish, including designing in Figma, prototyping, frontend and backend development, and ensuring SEO optimization and quality assurance.',
    },
    {
      company: 'JRA Technologies inc.',
      badges: [],
      location: 'On-site',
      title: 'Software Engineer',
      href: '#',
      logoUrl: '/jra.jpg',
      start: 'May 2023',
      end: 'Aug 2023',
      description:
        'Attended a bootcamp where I learned best practices and coding standards using the functional programming language Erlang.',
    },
    {
      company: 'Pandora technology solutions inc.',
      badges: [],
      location: 'On-site',
      title: 'Web Developer',
      href: '#',
      logoUrl: '#',
      start: 'Aug 2022',
      end: 'Feb 2023',
      description:
        'Developed websites ensuring they meet standards with correct SEO, user-friendly interfaces, and responsiveness.',
    },
  ],
  education: [
    {
      school: 'Polytechnic University of the Philippines',
      href: 'https://www.pup.edu.ph/',
      degree: 'DICT',
      logoUrl: '/PUPLogo.png',
      start: '2019',
      end: '2022',
    },
  ],
  projects: [
    {
      title: 'E-Charting',
      href: 'https://echartingdemo.comlogikph.com',
      // dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'This is e-Charting System, replacing traditional paper records with secure, real-time digital documentation. It enhances accuracy, accessibility, and workflow efficiency through automated data entry and visual analytics.',
      technologies: [
        'React.js',
        'Typescript',
        'TailwindCSS',
        'Shadcn/ui',
        '.NET',
        'MSSQL',
      ],
      links: [
        {
          type: 'Web Application',
          href: 'https://echartingdemo.comlogikph.com',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/echarting.png',
      // video: '#',
    },
    {
      title: 'Next Health Diagnostics',
      href: 'https://nexthealth.ph',
      // dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'Hospital website where you can book with different type of appointments and you can login to view your results online.',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Ant D',
        '.NET',
        'MSSQL',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://nexthealth.ph',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/nhd.png',
      // video: '#',
    },
    {
      title: 'HMICare Hospital Website',
      href: 'https://hmicare.comlogikph.com/',
      // dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'This is another hospital website where you can book with different type of appointments and you can login to view your results online.',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'shacn/ui',
        '.NET',
        'MSSQL',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.hmicare.com.ph/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/hmicare.png',
      // video: '#',
    },
    {
      title: 'MLMC Hospital Website',
      href: 'https://new.mlmc.com.ph/',
      // dates: 'Jan 2024 - Feb 2024',
      active: false,
      description:
        'This is my very first project here in Comlogik. A hospital website where you can book an appointment and you can login to see your results.',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Ant D',
        '.NET',
        'MSSQL',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://new.mlmc.com.ph/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/mlmc.png',
      // video: '#',
    },
    {
      title: 'WEBHIMS',
      href: 'https://webhims.comlogikph.com/',
      // dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'This is a Hospital Information Management System (HIMS/HIS) is a comprehensive, integrated, digital platform that streamlines administrative, financial, and clinical operations in healthcare organizations. It enables efficient, centralized management of patient records, scheduling, billing, and resource allocation. Key components include patient registration, pharmacy, lab, and radiology management. ',
      technologies: [
        'React.js',
        'Typescript',
        'TailwindCSS',
        'Antdesign',
        '.NET',
        'MSSQL',
      ],
      links: [
        {
          type: 'Web Application',
          href: 'https://webhims.comlogikph.com/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/webhims.png',
      // video: '#',
    },
    // {
    //   title: 'To do App',
    //   href: 'https://todo-app-gules-five.vercel.app/',
    //   // dates: 'Jan 2024 - Feb 2024',
    //   active: true,
    //   description:
    //     'Like the other react developers, I tried creating a To do List App. but this time, its a PWA.',
    //   technologies: ['React.js', 'Typescript', 'Emotion CSS', 'MUI'],
    //   links: [
    //     {
    //       type: 'Progressive Web App',
    //       href: 'https://todo-nzwutltj0-aj-sionosas-projects.vercel.app/',
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: '/todolist.png',
    //   // video: '#',
    // },
  ],
} as const;
