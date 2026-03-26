const profile = {
  headshot: "/photo.jpg",
  name: "Somanath Panda",
  title: "Full-Stack Developer (MERN)",
  location: "Bengaluru, India",
  email: "somanathpanda590@gmail.com",
  phone: "+91 9853999383",
  summary:
    "Full-Stack Developer with ~3 years of experience building scalable, high-performance web applications using the MERN stack. Experienced in developing end-to-end systems including payment integrations, voice-processing platforms, and domain-specific products. Skilled in React, Node.js, Express, and MongoDB, with a strong focus on system reliability, API optimization, and delivering real business impact.",
  social: {
    github: "https://github.com/SOMANATHPANDA",
    linkedin: "https://www.linkedin.com/in/somanath-panda-software-engineer/",
    resumeUrl: "/Somanath_Software_Developer.pdf",
  },
  skills: [
    "Java", "JavaScript", "PHP",
    "React", "Node.js", "Express", "Redux", "Laravel", "SOLID Principles", "Docker",
    "MongoDB", "MySQL", "Firebase", "Socket.IO", "Webhook",
    "VS Code", "Postman", "Git", "GitHub", "CI/CD", "Agile", "Microservices"
  ],
  experience: [
    {
      company: "Apie Technologies Pvt Ltd.",
      role: "Software Developer",
      period: "Dec 2024 – Dec 2025",
      location: "Bhubaneswar, Odisha",
      bullets: [
        "Implemented end-to-end Stripe payment integration to streamline billing, improving transaction reliability by 35%.",
        "Built a scalable Firebase Cloud Messaging notification system, increasing real-time user engagement by 25%.",
        "Integrated multiple third-party APIs, reducing operational friction and improving system efficiency by 40%.",
        "Collaborated in Agile teams and mentored junior developers to ensure timely delivery of new features."
      ],
    },
    {
      company: "Kods Technologies Pvt Ltd.",
      role: "Software Engineer",
      period: "Aug 2023 – Oct 2024",
      location: "Bengaluru, Karnataka",
      bullets: [
        "Contributed to a healthcare-focused MERN application, building patient management modules and ensuring HIPAA-compliant data flows.",
        "Integrated MongoDB for scalable data modeling and efficient storage solutions.",
        "Automated deployment pipelines using GitHub Actions to AWS EC2, reducing manual release efforts by 40%.",
        "Improved API performance by implementing caching and query optimization in MongoDB, reducing response times by 20%.",
      ],
    },
  ],
  projects: [
    {
      name: "Vaidyog — Healthcare Job Portal",
      tagline: "A Naukri-like platform tailored for the medical field.",
      highlights: [
        "Built a dedicated MERN stack job portal exclusively for doctors, nurses, and healthcare professionals.",
        "Developed secure authentication and profile management using JWT and Multer for image uploads.",
        "Implemented recruiter and candidate dashboards with advanced filtering and search capabilities.",
        "Designed job posting, application tracking, and shortlisting workflows to simplify recruitment.",
        "Optimized frontend with React + Redux Toolkit for fast state-driven UI and seamless navigation.",
        "Deployed on AWS ensuring scalability for growing job seeker and recruiter traffic."
      ],
      links: { demo: "https://vaidyog.com/" },
      tags: ["MERN", "Redux Toolkit", "JWT", "AWS", "Healthcare"],
    },
    {
      name: "Senton VPN — Stripe Auto-Pay",
      tagline: "VPN service platform with automated Stripe billing",
      highlights: [
        "Designed and implemented a Stripe-based auto-pay system to handle complete subscription lifecycles, reducing billing-related support issues by 50%.",
        "Built robust webhook handling and retry mechanisms, improving failed payment recovery rates by 20%.",
        "Developed fault-tolerant billing workflows ensuring near-zero revenue leakage and consistent transaction processing.",
        "Integrated secure payment flows with backend APIs using Node.js and Express for seamless subscription management.",
        "Optimized system reliability by handling edge cases like failed payments, renewals, and subscription upgrades."
      ],
      tags: ["MERN", "Stripe", "Subscriptions", "Payments", "Webhooks"],
      links: { demo: "https://www.sentonvpn.com/" },
    },
    {
      name: "Speak2Earn — Voice Validation Platform",
      tagline: "Speech-based validation system with admin analytics dashboard.",
      highlights: [
        "Integrated Bhashini APIs for real-time speech processing and multilingual language analysis.",
        "Developed voice validation logic including duration checks, speaker intent verification, and Kappa score evaluation.",
        "Built a scalable backend using Node.js to process and validate large volumes of voice submissions efficiently.",
        "Designed an RBAC-based admin dashboard with advanced filtering, review workflows, and data export capabilities.",
        "Enabled structured data insights by implementing filters and reporting tools for voice validation metrics."
      ],
      tags: ["Node.js", "Speech APIs", "RBAC", "Admin Dashboard", "Data Processing"],
      links: { demo: "https://speak2earn.com/" }
    },
    {
      name: "Coming Soon",
      tagline: "Stay tuned for updates!",
      highlights: [],
      tags: []
    }
  ],
  education: [
    {
      school: "College of Engineering and Technology, Bhubaneswar",
      degree: "B.Tech in Computer Science",
      period: "2018 – 2021",
    },
  ],
  about: `I’m a Full-Stack Developer with ~3 years of experience building scalable, high-impact web applications using the MERN stack.

I specialize in designing end-to-end systems — from intuitive frontends in React to robust backend architectures with Node.js, Express, and MongoDB. My experience includes working on real-world products involving payment systems, voice-processing platforms, and domain-specific marketplaces.

At Apie Technologies, I worked on Stripe-based payment integrations and notification systems that improved transaction reliability and boosted user engagement. I enjoy solving complex backend challenges like handling asynchronous workflows, optimizing APIs, and building fault-tolerant systems.

Some of my key work includes:
• Building a subscription-based billing system (Senton VPN) with Stripe, reducing support issues by 50%.
• Developing a voice validation platform (Speak2Earn) using speech APIs and advanced filtering workflows.
• Creating a healthcare job portal (Vaidyog) with secure authentication and scalable deployment on AWS.

I’m passionate about writing clean, maintainable code and continuously improving system performance and user experience. I enjoy working in collaborative environments, learning new technologies, and building products that solve real-world problems.

📩 Open to exciting opportunities where I can contribute, grow, and build impactful solutions.`
};

export default profile;
