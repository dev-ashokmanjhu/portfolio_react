export const personalInfo = {
  name: "Ashok Manjhu",
  title: "Software Developer",
  email: "dev.ashokmanjhu@gmail.com",
  phone: "+91 8949879634",
  location: "Jaipur, Rajasthan, India",
  github: "https://github.com/dev-ashokmanjhu",
  linkedin: "https://www.linkedin.com/in/ashok-manjhu-99348322a",
  bio: "Full Stack Developer with over 2 years of experience in designing and developing scalable web and mobile applications using React.js, Node.js, and AWS. Skilled in delivering end-to-end solutions, including system architecture, API development, deployment, and maintenance. Strong foundation in performance optimization, cloud infrastructure, and agile development methodologies. Contributed to high-impact projects with a focus on clean code, system reliability, and effective team collaboration.",
  shortBio: "Building scalable web and mobile applications with modern technologies",
  resume: "https://drive.google.com/file/d/17Kt6NYI8LoB_j2NbMmiH5Lkims8BWxfw/view?usp=sharing",
  education: {
    degree: "Bachelor of Science",
    university: "Maharishi Dayanand Saraswati University, Ajmer",
    duration: "Jul 2020 - May 2023",
    percentage: "81.53%"
  },
  certifications: [
    {
      name: "Full Stack Developer Bootcamp (MERN Stack)",
      issuer: "Andrei Neagoie, Udemy",
      date: "Oct 2022"
    },
    {
      name: "React & Node.js – The Complete Guide",
      issuer: "Maximilian Schwarzmüller, Udemy",
      date: "Dec 2022"
    }
  ]
};

export const navigationLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const skills = {
  "Languages": [
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "TypeScript", icon: "fas fa-code" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "SQL", icon: "fas fa-database" }
  ],
  "Frontend": [
    { name: "React.js", icon: "fab fa-react" },
    { name: "Next.js", icon: "fas fa-n" },
    { name: "Ionic React", icon: "fas fa-mobile-alt" },
    { name: "React Native", icon: "fab fa-react" }
  ],
  "Backend": [
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-database" }
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "fab fa-aws" },
    { name: "GCP", icon: "fab fa-google" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Docker", icon: "fab fa-docker" }
  ],
  "Tools & Others": [
    { name: "Google Vision API", icon: "fas fa-eye" },
    { name: "Gemini", icon: "fas fa-robot" },
    { name: "Stripe", icon: "fab fa-stripe" },
    { name: "PayPal", icon: "fab fa-paypal" },
    { name: "RESTful APIs", icon: "fas fa-exchange-alt" }
  ]
};

export const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Fargowiz Pvt. Ltd.",
    location: "Jaipur, Rajasthan, 302020, India",
    duration: "Mar 2023 - Present",
    achievements: [
      "Designed and led the development of complex software solutions, ensuring alignment with business goals and technical requirements, resulting in a 30% increase in system efficiency.",
      "Managed client calls, gathered feedback, and ensured the timely delivery of features, enhancing client satisfaction and achieving a 95% satisfaction rate.",
      "Contributed to the end-to-end delivery of new features, from requirement gathering to deployment, ensuring timely delivery and stakeholder alignment.",
      "Provided mentorship and technical guidance to junior developers, fostering a collaborative and growth-oriented team environment, improving productivity by 25% and reducing onboarding time by 15%.",
      "Conducted code reviews and resolved escalations while effectively coordinating with team members to enhance application stability and performance, resulting in a 30% reduction in technical debt.",
      "Developed clean, maintainable code using Agile methodology, unit testing, and Test-Driven Development (TDD) to improve code quality and reduce bugs by 50%."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Authenticate Pro",
    role: "Lead Developer",
    technologies: ["Ionic React", "Node.js", "AWS"],
    description: "Comprehensive product authentication ecosystem helping users verify product authenticity through certified experts, protecting against counterfeit goods in e-commerce.",
    links: {
      android: "#",
      ios: "#"
    },
    achievements: [
      "Led the end-to-end development of the Authenticate Pro app, delivering monthly releases on time and managing deployments and releases on the App Store and Play Store.",
      "Structured and maintained the codebase for optimal performance and scalability, implementing best practices in code structuring and maintenance to support future development, reducing rework by 30%.",
      "Spearheaded key features such as the Core Order Flow, real-time Chat, Stripe and PayPal integration, in-app Wallet, AI-based authentication using Gemini, NFC-based scanning, authentication certificates, memberships, push notifications, promo codes, and more.",
      "Developed the Admin Web Portal in React.js for order management, analytics, and expert payroll (manual + Stripe Express).",
      "Implemented the Auto-Conclusion System, automating repetitive admin tasks and reducing manual effort by 90%."
    ]
  },
  {
    id: 2,
    title: "Conversatum",
    role: "Developer",
    technologies: ["React Native", "Node.js"],
    description: "AI-powered voice recorder and transcription app for professionals, educators, and researchers to transcribe, analyze, and manage conversations effectively.",
    links: {
      android: "#",
      ios: "#"
    },
    achievements: [
      "Contributed to initial MVP development and technical setup.",
      "Developed core features, including voice recording with AI-powered transcription, prompt execution on transcripts (summarization, note generation), and transcript editing with speaker segmentation and formatting tools.",
      "Proactively identified and resolved over 20 critical bugs and handled escalations, ensuring smooth and efficient operation of audio recording.",
      "Optimized app performance and reduced app load time by refactoring heavy components and implementing lazy loading where applicable."
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/ashok",
  linkedin: "https://linkedin.com/in/ashok",
  twitter: "https://twitter.com/ashok",
  instagram: "https://instagram.com/ashok"
};

export const contactInfo = {
  email: "ashok@example.com",
  phone: "+1 234 567 8900",
  address: "New York, USA",
  availability: "Open for opportunities"
};

export const themeColors = {
  primary: "#3B82F6",
  primaryDark: "#2563EB",
  secondary: "#1E293B",
  background: "#0F172A",
  text: "#F8FAFC",
  textSecondary: "#94A3B8"
}; 