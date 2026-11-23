export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Mobile App' | 'Full Stack Web' | 'React & Vite' | 'Open Source';
  featured: boolean;
  platform: ('iOS' | 'Android' | 'Expo' | 'Web')[];
  image: string;
  stats: { label: string; value: string }[];
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl: string;
  expoSnackUrl?: string;
  screenColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    iconName: string;
    description: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const portfolioData = {
  personal: {
    name: "Krish Rawal",
    nickname: "Krish",
    role: "Frontend & Mobile Developer",
    subRole: "React • React Native • Expo • TypeScript",
    tagline: "Crafting fast, responsive web applications and buttery-smooth 60fps cross-platform mobile apps for iOS & Android.",
    bio: "Frontend & Mobile Developer based in Ahmedabad, Gujarat. Passionate about software architecture, clean user interfaces, and robust code quality. Specializing in React, React Native, Expo SDK 52, Expo Router v4, TypeScript, NativeWind, and Supabase. Currently maintaining 63+ open-source projects on GitHub.",
    avatar: "https://avatars.githubusercontent.com/u/224525175?v=4",
    banner: "https://github.com/user-attachments/assets/a3c789ce-5e2b-475d-8cca-c01bd5a24e72",
    location: "Ahmedabad, Gujarat, India",
    nativePlace: "Rajasthan, India",
    currentCompany: "Felix ITs System Ahmedabad",
    internshipCompany: {
      name: "Trentium Solution (Trentiums)",
      website: "https://www.trentiums.com/"
    },
    education: "Integrated BCA at Pragati College (GGTU)",
    availability: "Open to Full-time Roles & High-Impact Mobile Contracts",
    email: "rawalkrish734@gmail.com",
    whatsapp: "919549078734",
    phoneDisplay: "+91 95490 78734",
    whatsappMessage: "Hi Krish! I saw your React Native & Expo developer portfolio and would like to discuss a project / opportunity.",
    github: "https://github.com/krishrawal734",
    linkedin: "https://www.linkedin.com/in/krish-rawal-8ab87339b/",
    stats: [
      { label: "GitHub Repositories", value: "63+" },
      { label: "Active Mobile Stack", value: "Expo SDK 52" },
      { label: "Target Frame Rate", value: "60 FPS" },
      { label: "Primary Languages", value: "TS / React" }
    ]
  },

  skillsCategories: [
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile architecture with the modern Expo & React Native ecosystem",
      skills: [
        { name: "React Native", level: "Expert", iconName: "Smartphone", description: "Cross-platform core for iOS & Android with native bridge components" },
        { name: "Expo & Expo Router v4", level: "Expert", iconName: "Zap", description: "SDK 52, typed file-based navigation, prebuild, and EAS builds" },
        { name: "NativeWind (Tailwind CSS)", level: "Expert", iconName: "Palette", description: "Universal utility styling tailored for React Native views" },
        { name: "Device APIs & GPS", level: "Advanced", iconName: "Compass", description: "expo-location with mock location anti-fraud, camera, and sensors" },
        { name: "expo-print & sharing", level: "Advanced", iconName: "List", description: "Dynamic PDF receipt & payslip generation and native sharing" }
      ]
    },
    {
      title: "Frontend & Web Architecture",
      description: "Modern component-driven web development with ultra-fast tooling",
      skills: [
        { name: "React.js", level: "Expert", iconName: "Layers", description: "Custom hooks, context state, component lifecycle, and modular architecture" },
        { name: "TypeScript", level: "Expert", iconName: "Code", description: "Strict typing, interface contracts, generics, and compiler safety" },
        { name: "JavaScript (ES6+)", level: "Expert", iconName: "Cpu", description: "Async/await, closures, functional programming, and modern DOM APIs" },
        { name: "Vite", level: "Expert", iconName: "Zap", description: "Lightning-fast HMR and optimized production rollups" },
        { name: "Next.js", level: "Advanced", iconName: "Globe", description: "Server-side rendering, routing, and modern full-stack concepts" }
      ]
    },
    {
      title: "State, APIs & Database",
      description: "Reliable data persistence, real-time messaging, and API integration",
      skills: [
        { name: "Supabase & Postgres", level: "Advanced", iconName: "Database", description: "Postgres schema, Row-Level Security (RLS) policies, and Auth" },
        { name: "Redux Toolkit / Context", level: "Advanced", iconName: "RefreshCw", description: "Predictable state containers, slices, and global store management" },
        { name: "REST APIs & Axios", level: "Expert", iconName: "Globe", description: "Robust HTTP communication, interceptors, error boundaries" },
        { name: "Realtime WebSockets", level: "Advanced", iconName: "Touchpad", description: "Realtime chat message delivery and live presence indicators" }
      ]
    },
    {
      title: "DevOps, Styling & Tooling",
      description: "Professional development workflows, CI/CD, and responsive design systems",
      skills: [
        { name: "Tailwind CSS & Bootstrap 5", level: "Expert", iconName: "Palette", description: "Pixel-perfect responsive design systems and glassmorphic UI" },
        { name: "Git & GitHub", level: "Expert", iconName: "GitMerge", description: "Version control, branching workflows, PRs, and maintaining 63+ repos" },
        { name: "Vercel & Netlify", level: "Expert", iconName: "CloudLightning", description: "Continuous automated deployment and custom domain management" },
        { name: "EAS Pipelines & Maestro", level: "Advanced", iconName: "CheckCircle", description: "Automated mobile builds and Maestro end-to-end user flow testing" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "workpulse-attendance",
      title: "WorkPulse - Payroll & Attendance App",
      tagline: "Complete React Native Expo mobile system for GPS attendance, night overtime & PDF payroll",
      description: "A production-grade mobile app built for staff attendance and payroll tracking. Features GPS check-in/out with Anti-Fraud Mock Location detection, automated Night Shift Overtime rules (checkout >= 7:00 PM), leave request approvals, dynamic PDF payslip generation via expo-print, and UPI/Cash salary payout ledger.",
      category: "Mobile App",
      featured: true,
      platform: ["iOS", "Android", "Expo"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Expo SDK", value: "v52" },
        { label: "Anti-Fraud GPS", value: "Active" },
        { label: "E2E Testing", value: "Maestro" }
      ],
      tags: ["Expo SDK 52", "Expo Router v4", "React Native", "NativeWind", "Supabase", "expo-location", "expo-print", "Maestro"],
      features: [
        "GPS check-in/out with reverse geocoding and Mock Location (Fake GPS) detector",
        "Night Present Rule: Automated night shift overtime calculation after 7:00 PM",
        "PDF Payslip generation with expo-print and instant native WhatsApp/Email sharing",
        "Dual role access: Admin dashboard for staff management & Employee portal for attendance"
      ],
      demoUrl: "https://github.com/krishrawal734/payroll-attendance-app",
      githubUrl: "https://github.com/krishrawal734/payroll-attendance-app",
      expoSnackUrl: "https://snack.expo.dev",
      screenColor: "from-blue-600 to-indigo-900"
    },
    {
      id: "gujarat-land-survey",
      title: "Land Survey Gujarat",
      tagline: "Modern platform exploring Gujarat land records, 7/12 & 8A village data, and survey resources",
      description: "A comprehensive React & TypeScript application helping citizens and landowners explore Gujarat land survey information, 7/12 village records, property details, and official government land-related resources through an intuitive, accessible search interface.",
      category: "Full Stack Web",
      featured: true,
      platform: ["Web"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Platform", value: "Vercel" },
        { label: "Records Covered", value: "Gujarat Wide" },
        { label: "Language", value: "TypeScript" }
      ],
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Search Engine", "Public Data API"],
      features: [
        "Interactive search for Gujarat land survey numbers, village maps, and talukas",
        "Direct lookup assistance for 7/12 and 8A revenue records",
        "Fully responsive mobile-friendly layout for rural field officers and landowners",
        "Blazing fast performance deployed with continuous deployment on Vercel"
      ],
      demoUrl: "https://land-survey-gujarat-enos.vercel.app",
      githubUrl: "https://github.com/krishrawal734/land-survey-gujarat",
      screenColor: "from-emerald-600 to-teal-900"
    },
    {
      id: "realtime-chat-app",
      title: "Real-Time Chat Application",
      tagline: "Instant multi-user messaging app with live online status and authentication",
      description: "A responsive real-time messaging application built with React, Vite, and modern WebSockets. Offers private and group chat conversations, instant message delivery without page reloads, user authentication, and online/offline presence indicators.",
      category: "React & Vite",
      featured: true,
      platform: ["Web", "Expo"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Latency", value: "<50ms" },
        { label: "Auth", value: "Secure JWT" },
        { label: "UI", value: "Tailwind CSS" }
      ],
      tags: ["React.js", "TypeScript", "Vite", "WebSockets", "Tailwind CSS", "Real-Time Sync"],
      features: [
        "Instant bidirectional message delivery using WebSocket channels",
        "Live presence tracking showing real-time online/typing status",
        "Secure user registration, authentication, and avatar customization",
        "Clean mobile-first UI with smooth auto-scrolling message streams"
      ],
      demoUrl: "https://real-time-chat-application-delta-wheat.vercel.app",
      githubUrl: "https://github.com/krishrawal734/-Real-Time-Chat-Application",
      screenColor: "from-purple-600 to-pink-900"
    },
    {
      id: "studyai",
      title: "StudyAI - Intelligent Learning Assistant",
      tagline: "Mobile AI companion for interactive quizzes, flashcards & concept explanations",
      description: "An educational mobile application built with React Native, Expo, and TypeScript. Harnesses modern generative AI APIs to generate custom study flashcards, multiple-choice quizzes, and step-by-step topic summaries for students.",
      category: "Mobile App",
      featured: false,
      platform: ["iOS", "Android", "Expo"],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "AI Engine", value: "Smart API" },
        { label: "Flashcards", value: "Dynamic" },
        { label: "Framework", value: "React Native" }
      ],
      tags: ["React Native", "Expo SDK", "TypeScript", "AI API", "NativeWind", "Zustand"],
      features: [
        "AI-generated dynamic quizzes based on custom syllabus topics",
        "Interactive flip-animation flashcards for spaced repetition study",
        "Dark mode optimized for late-night study sessions",
        "Offline caching for downloaded quiz sets"
      ],
      demoUrl: "https://github.com/krishrawal734/studyai",
      githubUrl: "https://github.com/krishrawal734/studyai",
      screenColor: "from-amber-600 to-red-900"
    },
    {
      id: "file-sharing-app",
      title: "Cross-Device File Sharing App",
      tagline: "Frictionless cross-platform file transfer between mobile and desktop",
      description: "A fast, cross-platform file sharing solution designed with React Native, Expo, and Web technologies. Allows users to transfer documents, media, and folders across Android, iOS, and desktop browsers with QR code pairing.",
      category: "Mobile App",
      featured: false,
      platform: ["iOS", "Android", "Web"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Transfer", value: "High Speed" },
        { label: "Pairing", value: "QR Code" },
        { label: "Stack", value: "Expo + Web" }
      ],
      tags: ["Expo", "React Native", "TypeScript", "File System API", "QR Code Scanner"],
      features: [
        "Instant device pairing via dynamic QR code scanning",
        "Progress bar tracking with chunked upload and download handlers",
        "Support for photos, videos, and multi-file archives",
        "Clean mobile-first UI with dark mode support"
      ],
      demoUrl: "https://github.com/krishrawal734/File-Sharing-App",
      githubUrl: "https://github.com/krishrawal734/File-Sharing-App",
      screenColor: "from-cyan-600 to-blue-900"
    },
    {
      id: "git-profile-explorer",
      title: "GitHub Profile & Repo Explorer",
      tagline: "Interactive developer portfolio analyzer and repository search engine",
      description: "An intuitive web application that allows users to search any GitHub username and inspect real-time metrics: repositories, stars, commit activity, avatar, top languages, and bio directly via the GitHub REST API.",
      category: "React & Vite",
      featured: false,
      platform: ["Web"],
      image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "API", value: "GitHub REST" },
        { label: "Build", value: "Vite + React" },
        { label: "Deployment", value: "Vercel" }
      ],
      tags: ["React.js", "TypeScript", "Vite", "GitHub API", "Tailwind CSS"],
      features: [
        "Real-time user profile lookup with repository sorting",
        "Detailed language distribution breakdowns",
        "Direct link navigation to star and clone repositories",
        "Smooth error handling for rate limits and non-existent accounts"
      ],
      demoUrl: "https://git-profile-explorer-ten.vercel.app",
      githubUrl: "https://github.com/krishrawal734/GitProfileExplorer",
      screenColor: "from-indigo-600 to-slate-900"
    }
  ] as Project[],

  experiences: [
    {
      role: "Frontend Developer",
      company: "Felix ITs System Ahmedabad",
      location: "Ahmedabad, Gujarat, India",
      period: "2025 ",
      type: "Professional Role",
      description: "Developing cross-platform mobile applications using React Native & Expo along with high-performance responsive web applications in React and TypeScript.",
      achievements: [
        "Architected 'WorkPulse', an Expo SDK 52 mobile application featuring anti-fraud GPS attendance capture, night shift overtime calculations, and Supabase integration.",
        "Created production-grade React & Vite web applications including 'Land Survey Gujarat' deployed live on Vercel.",
        "Built modular UI systems using Tailwind CSS and NativeWind, ensuring pixel-perfect parity across iOS, Android, and web screens."
      ],
      techStack: ["React Native", "Expo SDK 52", "React.js", "TypeScript", "NativeWind", "Supabase", "Tailwind CSS"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Trentium Solution (Trentiums)",
      companyUrl: "https://www.trentiums.com/",
      location: "Ahmedabad, Gujarat, India",
      period: "2026",
      type: "Internship",
      description: "Completed frontend development internship at Trentiums, engineering modern web components, optimizing responsive user interfaces, and integrating RESTful APIs for client digital solutions.",
      achievements: [
        "Built responsive, accessible UI modules using React.js, modern JavaScript (ES6+), and Tailwind CSS.",
        "Collaborated with cross-functional teams to integrate backend REST APIs and improve web performance.",
        "Practiced production-level Git branching workflows, peer code reviews, and cross-browser quality assurance."
      ],
      techStack: ["React Native", "Expo SDK 52", "React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap", "REST APIs", "Git"]
    },
    {
      role: "Integrated BCA (Computer Applications)",
      company: "Pragati College, Associated with GGTU",
      location: "Rajasthan, India",
      period: "2024 - 2027",
      type: "Education & Degree",
      description: "Undergraduate study focusing on software engineering, data structures, database management systems (DBMS), and modern full-stack application development.",
      achievements: [
        "Maintained 63+ public repositories on GitHub showcasing practical projects in React, React Native, TypeScript, and APIs.",
        "Active contributor to mobile and open-source frontend developer tools."
      ],
      techStack: ["Computer Science", "Data Structures", "DBMS / SQL", "Web Technologies", "OOP"]
    }
  ] as Experience[],

  expoHighlights: [
    {
      title: "Expo SDK 52 & Expo Router v4",
      desc: "Typed, file-based routing architecture with universal links, native tabs, modals, and shared element screen transitions.",
      badge: "Expo Router v4"
    },
    {
      title: "Anti-Fraud GPS & Device APIs",
      desc: "Integrated expo-location with mock location detection (Fake GPS blocker) and reverse geocoding for tamper-proof attendance punch tracking.",
      badge: "expo-location"
    },
    {
      title: "PDF Generation & Native Sharing",
      desc: "Dynamic HTML-to-PDF rendering with expo-print, calculating employee payroll statements and sharing instantly via expo-sharing.",
      badge: "expo-print"
    },
    {
      title: "EAS Cloud Pipelines & Maestro",
      desc: "Automated iOS & Android cloud builds with EAS Build alongside automated Maestro flow tests for reliable mobile delivery.",
      badge: "EAS & Maestro"
    }
  ]
};
