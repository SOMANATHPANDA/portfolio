const profile = {
  headshot: "/photo.jpg",
  name: "Somanath Panda",
  title: "Full-Stack Developer (MERN)",
  location: "Bengaluru, India",
  email: "somanathpanda590@gmail.com",
  phone: "+91 9853999383",
  summary:
    "Full-Stack Developer with 2 years of experience in building responsive, scalable applications using the MERN stack with Redux, authentication, and server deployment. Skilled in delivering high-performance, user-centric web solutions.",
  social: {
    github: "https://github.com/SOMANATHPANDA",
    linkedin: "https://www.linkedin.com/in/somanath-panda-software-engineer/",
    // website: "https://vaidyog.com/",
    resumeUrl: "/Somanath_Software_Developer.pdf",
  },
  skills: [
    "Java", "JavaScript", "PHP",
    "React", "Node.js", "Express", "Redux", "Laravel", "SOLID Principles", "Docker",
    "MongoDB", "MySQL", "Firebase",
    "VS Code", "Postman", "Git", "GitHub", "CI/CD", "Agile", "Microservices"
  ],
  experience: [
    {
      company: "Apie Technologies Pvt Ltd.",
      role: "Software Developer",
      period: "Dec 2024 – Present",
      location: "Bhubaneswar, Odisha",
      bullets: [
        "Implemented Stripe payment gateway integration and configured webhooks.",
        "Developed push notifications using Firebase Cloud Messaging.",
        "Collaborated with cross-functional teams to integrate third-party APIs."
      ],
    },
    {
      company: "Kods Technologies Pvt Ltd.",
      role: "Software Engineer",
      period: "Aug 2023 – Oct 2024",
      location: "Bengaluru, Karnataka",
      bullets: [
        "Developed responsive web apps with MERN stack, improving engagement by 30%.",
        "Integrated Redux for efficient state management.",
        "Designed REST APIs with Node & Express, reducing retrieval times by 25%."
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
      name: "Firedesk — Maintenance System",
      tagline: "Fire extinguisher & pump room maintenance tool.",
      highlights: [
        "Developed a full-stack MERN application to streamline fire extinguisher and pump room maintenance workflows.",
        "Built REST APIs with Node.js and Express to handle asset management, inspection schedules, and compliance tracking.",
        "Integrated real-time notifications to alert teams about upcoming maintenance tasks and safety checks.",
        "Implemented dynamic reporting features for compliance audits, enabling PDF/Excel report exports.",
        "Designed a responsive frontend with React + Redux for role-based dashboards (Admin, Technician, Inspector).",
        "Deployed the application on AWS with CI/CD pipelines to ensure scalability and continuous updates."
      ],
      links: { demo: "https://firedesk.in/" },
      tags: ["MERN", "Redux", "AWS", "CI/CD", "Real-Time Notifications"],
    },
    {
      name: "Munsride — Ride-Hailing Platform",
      tagline: "An Ola-like ride booking and management system.",
      highlights: [
        "Developed a ride-hailing app using Laravel + PHP, designed for real-time trip management.",
        "Integrated Google Maps APIs for route optimization, live driver tracking, and fare estimation.",
        "Implemented ride booking, cancellation, and trip history with role-based access for drivers and users.",
        "Built a payment module with secure transactions and digital receipts.",
        "Created an intuitive admin panel for managing users, trips, and payments with detailed analytics.",
        "Optimized backend with MySQL for relational data and faster query performance."
      ],
      links: { demo: "https://munsride.com/" },
      tags: ["Laravel", "PHP", "MySQL", "Google Maps API", "Payment Integration"],
    },
    { 
      name : "Coming Soon",
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
  about: `As a passionate Full-Stack Developer with 2 years of experience, I specialize in building scalable web applications that bridge intuitive user experiences with robust backend systems. 

    My journey has allowed me to work across diverse projects—from healthcare-focused platforms to real-time dashboards—where I combined my skills in React, Node.js, Express, and MongoDB to deliver impactful solutions. 

    I enjoy tackling challenges involving real-time data, cloud deployments, and microservices, ensuring applications are not only functional but also future-ready. 

    What drives me is the continuous opportunity to learn and grow, while contributing to teams that value clean, maintainable code and modern development practices. 

    📩 I’m always open to connecting with professionals in tech, exploring new opportunities, and collaborating on projects that make a difference.
  `,
};

export default profile;
