import type { Experience, Research, Project, Education, Achievement, ExtraCurricular } from '../types';

export const PERSONAL_INFO = {
  name: "Promi Mojumder",
  title: "Software Engineering Graduate",
  location: "Sylhet, Bangladesh",
  summary: "Aspiring researcher in Data Science, with strong Python & ML skills. Experienced in web development and designing data-driven solutions for social impact.",
  aboutMe: "I am a passionate Software Engineering graduate with a deep interest in Data Science and Machine Learning. My journey in tech has been driven by a desire to solve real-world problems through innovative software solutions. I have experience in full-stack development, particularly with the MERN stack, and I am constantly expanding my knowledge in data-driven research. Beyond coding, I am an active participant in hackathons and a community builder, always looking for ways to share knowledge and collaborate on impactful projects.",
  email: "promimojumder8@gmail.com",
  phone: "(+880) 17-1062-8068",
  github: "promiimojumder",
  linkedin: "promimojumder",
  youtube: "@promimojumder",
  image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j4tqa42l9q4r83n6v4io.jpeg",
};

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: "Hungrin Ltd",
    role: "Frontend Developer",
    period: "Feb 2026 – Present",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    description: [
      "Joined as an equity partner with 13% milestone-based stake under a formal agreement with founder Forid Ahmed.",
      "Building the frontend of a food-tech platform using React, Next.js (App Router), and TypeScript.",
      "Designing reusable component architecture and responsive UI aligned with product design specifications.",
      "Collaborating closely with the founding team on product direction and technical decisions.",
    ],
  },
  {
    company: "VortiBhai",
    role: "QA Engineer",
    period: "2025 – Present",
    image: "https://vortibhai.com/banner.png",
    description: [
      "Performing quality assurance testing on VortiBhai — an educational platform for comparing university departments across Bangladesh.",
      "Identifying and reporting UI/UX bugs, validation issues, and functional defects via ClickUp task tracking.",
      "Testing features including authentication flows, department comparison pages, and form validation.",
      "Collaborating with the development team to reproduce bugs and verify fixes before release.",
    ],
  },
  {
    company: "ShellBeeHaken Ltd",
    role: "Software Engineer Intern",
    period: "Dec 2024 – May 2025",
    image: "/images/shellbeehaken-team.jpg",
    description: [
      "Built a full-stack Twitter-clone with real-time chat features using WebSockets, Next.js (App Router), and MongoDB.",
      "Integrated secure OAuth/email login, password reset, and email verification.",
      "Developed modules for internal HR management system (CRUD for assets, certificates, achievements).",
      "Delivered responsive frontend and backend APIs aligned with Figma designs.",
      "Participated in agile development: code reviews, bug fixes, and production code writing.",
    ],
  },
];

export const RESEARCH_WORK: Research[] = [
  {
    title: "BERT-Based Emotion Classification in Bengali: Multiclass Sentiment Analysis of Bengali Translations of the Bhagavad Gita",
    status: "Completed",
    image: "/images/gita-cover.jpg",
    secondaryImage: "/images/bert-research.jpg",
    description: [
      "Preprocessed a 42K-sentence emotion-labeled dataset and trained a verse-level sentiment prediction model.",
      "Analyzed sentiment in two Bangla Gita translations using fine-tuned BanglaBERT (G-BERT), achieving 82.36% validation accuracy and 89.18% chapter-level alignment.",
    ],
  },
  {
    title: "A Mixed-Methods Study on How Departmental Culture Affects Student Motivation and Future Goals",
    status: "Ongoing",
    image: "https://vortibhai.com/banner.png",
    description: [
      "Exploring how departmental culture, peer support, faculty behavior, and academic norms shape student motivation.",
      "Using mixed methods to reveal statistical trends and personal experiences influencing student ambition.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Twitter / X Clone",
    type: "ShellBeeHaken Ltd — Internship Project",
    date: "Dec 2024 – May 2025",
    tech: ["Next.js", "TypeScript", "MongoDB", "WebSockets", "OAuth", "Nodemailer"],
    image: "/images/twitter-clone.png",
    github: "https://github.com/PromiMojumder38/Twitter-Clone-Using-NextJS",
    live: "https://twitter-clone-using-next-js.vercel.app/",
    description: [
      "Built a full-stack Twitter/X clone with real-time chat via WebSockets and Next.js App Router.",
      "Integrated secure OAuth login, email/password auth, password reset, and email verification flows.",
      "Implemented tweet feed, follow system, notifications, and responsive UI matching the X design.",
    ],
  },
  {
    name: "Eco-Sync (DNCC Waste Management Website)",
    type: "Code Samurai Hackathon Project",
    date: "Mar 2024",
    tech: ["ReactJS", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: "/images/EcoSync.png",
    github: "https://github.com/PromiMojumder38/eco-sync",
    youtube: "https://youtube.com/watch?v=example1",
    live: "https://eco-sync-demo.example.com",
    description: [
      "Built data entry modules, backend routes, and billing features (transport slips, fuel allocation).",
      "Designed API documentation and system diagrams.",
    ],
  },
  {
    name: "SUST Autorickshaw Management System",
    type: "University Third-year Project",
    date: "Nov 2023",
    tech: ["ReactJS", "CSS", "Node.js", "Express.js", "MySQL"],
    image: "/images/sust-auto.png",
    github: "https://github.com/PromiMojumder38/SUST_Autorickshaw_Management_System",
    youtube: "https://youtu.be/nqDUCzSChFY",
    description: [
      "Automated SUST's auto-rickshaw management: registration, payment records, bill generation, and scheduling.",
      "Conducted document collection and requirement analysis.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Shahjalal University of Science and Technology (SUST)",
    degree: "B.Sc, Software Engineering",
    result: "CGPA: 3.81",
    image: "/images/sust.jpg",
  },
  {
    institution: "M.C College",
    degree: "HSC - Science",
    result: "GPA: 5.00",
    details: "Talentpool Scholarship",
    image: "/images/mc-college.jpg",
  },
  {
    institution: "Blue Bird High School",
    degree: "SSC - Science",
    result: "GPA: 5.00",
    details: "General Scholarship",
    image: "/images/bluebird.png",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Runner-up (400+ teams) in Preliminary Round 2, Finalist, Code Samurai Hackathon", image: "https://codesamuraibd.net/images/Navbar_Logo.png" },
  { title: "2nd, BUP Project Showcasing", image: "/images/bup-showcase.jpg", link: "https://www.facebook.com/swesocietysust/posts/pfbid0dg5ErgaojE4isQgcLzxiU9cYyYza9dnrSG7jJ4ohy9PBqg6G5oyW5manAT8MwsDxl" },
  { title: "Top 10, DU ITverse Hackathon", image: "/images/du-hackthverse.jpg" },
  { title: "Top 14, ITverse Project Showcasing", image: "/images/du-itverse-showcasing.jpg" },
  {
    title: "Problem Setter, BdOSN CodeRace – Luna Shamsuddoha Girls' in ICT Week 2022",
    image: "/images/girls-ict-2022.jpg",
  },
  {
    title: "Problem Setter, Luna Shamsuddoha Girls in ICT Day Celebration – All Girls Programming Contest 2023",
    image: "/images/girls-ict-2023.png",
    link: "https://toph.co/c/luna-shamsuddoha-girls-in-ict-day-celebration-2023",
  },
  {
    title: "Top 9, SUST SWE Technovent Hackathon by Brain Station 23",
    image: "/images/sust-technovent.jpg",
    link: "https://www.facebook.com/bdosn/photos/a.130954726952905/5043583699023292/?type=3&mibextid=rS40aB7S9Ucbxw6v",
  },
];

export const ECA: ExtraCurricular[] = [
  {
    title: "Create educational content on YouTube to share knowledge",
    date: "2022 – Present",
    image: "/images/youtube-eca.png",
  },
  {
    title: "Participant, BdApps National Hackathon 2022 – Regional Round, Sylhet (organized by SWE Society, SUST, powered by Robi)",
    date: "2022",
    image: "/images/bdapps-hackathon.jpg",
  },
  {
    title: "Participant, Leading University CSE Carnival Hackathon",
    date: "2023",
    image: "/images/leading-uni-hackathon.jpg",
  },
  {
    title: "Darts Manager, IICT Sports Week",
    date: "2023",
    image: "/images/darts-iict.jpg",
  },
  {
    title: "Executive Member, Shikorh, SUST",
    date: "2022 – Present",
    image: "/images/shikorh.jpg",
    link: "https://www.facebook.com/photo.php?fbid=10158750339800756&set=pb.100045146748498.-2207520000&type=3",
  },
];

export const SKILLS = [
  "Next.js", "ReactJS", "Express.js", "Node.js", "MongoDB", "SQL", "Python", "Java", "C++",
];
