export const portfolioConfig = {
  name: "Bishek Debbarma",
  role: "Creative Developer & Designer",
  tagline: "Crafting digital experiences with code and creativity",

  colors: {
    primary: "#10b981",
    primaryDark: "#059669",
  },

  about: {
    image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "BCA student skilled in Java, MySQL, HTML, and CSS with keen interest in web development, UI/UX design, and backend programming. Engineered projects including a career portal and pet adoption website. Focused on expanding expertise in backend development, APIs, and software security.",
    timeline: [
      {
        year: "2023 - 2026",
        title: "Bachelor of Computer Application",
        company: "University",
        description: "Pursuing degree while building real-world projects"
      },
      {
        year: "2024",
        title: "Web Development Projects",
        company: "Personal Portfolio",
        description: "Created Happy-Tails, Everbloom-albumbs, and Clipsy AI"
      },
      {
        year: "2024",
        title: "Java & Database Learning",
        company: "Self-Study",
        description: "Mastered Java programming and MySQL database management"
      },
      {
        year: "2023",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Began learning web development with HTML and core programming"
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Everbloom-albumbs",
      category: "Web Application",
      description: "A beautiful photo album platform for capturing and sharing life's precious moments",
      longDescription: "Everbloom-albumbs is a modern photo album application that allows users to create, organize, and share their memories. Features include cloud storage, AI-powered organization, collaborative albums, and stunning gallery layouts.",
      image: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "MongoDB", "AWS S3", "TypeScript"],
      link: "https://github.com/bishekdb/Everbloom-albumbs",
      github: "https://github.com/bishekdb/Everbloom-albumbs"
    },
    {
      id: 2,
      title: "Happy-Tails",
      category: "Pet Care Platform",
      description: "Complete pet care management system connecting pet owners with veterinarians",
      longDescription: "Happy-Tails is a comprehensive pet care platform that helps pet owners manage their pets' health, schedule vet appointments, track vaccinations, and connect with pet care professionals. Features include health records, appointment booking, and community forums.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "Firebase", "Stripe", "Tailwind CSS", "Redux"],
      link: "https://github.com/bishekdb/Happy_Tails",
      github: "https://github.com/bishekdb/Happy_Tails"
    },
    {
      id: 3,
      title: "Clipsy AI",
      category: "AI-Powered Tool",
      description: "Smart video editing and content creation powered by artificial intelligence",
      longDescription: "Clipsy AI is an intelligent video editing platform that leverages AI to automate video editing tasks. Features include auto-captions, smart trimming, background removal, voice enhancement, and content optimization for social media platforms.",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Python", "TensorFlow", "React", "FFmpeg", "OpenAI"],
      link: "#",
      github: "#"
    }
  ],

  skills: [
    { name: "Java", level: 85, category: "Backend" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "HTML", level: 90, category: "Frontend" }
  ],

  contact: {
    email: "debbarmabishek@gmail.com",
    phone: "+91 8117096317",
    location: "Tripura, India"
  },

  social: {
    github: "https://github.com/bishekdb",
    linkedin: "https://www.linkedin.com/in/bishek-debbarma-53b6b1214/",
    twitter: "https://x.com/BishekDebbarmaa",
    dribbble: "https://dribbble.com"
  }
};
