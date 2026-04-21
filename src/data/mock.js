// Mock data for Sandeepan Verma's Fighter Jet Portfolio

export const personalInfo = {
  name: "Sandeepan Verma",
  title: "AI & ML Researcher and Engineer ",
  tagline: "Research-driven undergraduate specializing in Machine Learning, Generative AI, and Agentic Systems",
  email: "sandeepanverma2310@gmail.com",
  phone: "+91 7991429447",
  location: "Bhubaneswar, Odisha, India",
  linkedin: "https://www.linkedin.com/in/sandeepan-verma-28661a336/",
  github: "https://github.com/sandeepan-verma07",
  summary: "Research-driven undergraduate specializing in Machine Learning, Generative AI, and Agentic Systems. Skilled in LLMs, RAG pipelines, and Deep Learning, with ongoing research in hallucination mitigation using retrieval-grounded optimization. Experienced in end-to-end ML workflows using Python, TensorFlow, and PyTorch. Passionate about AI safety, scalable model development, and data-driven problem solving."
};

export const researchInterests = [
  "LLMs",
  "RAG Systems",
  "Hallucination Mitigation",
  "Generative Modeling",
  "AI Agents",
  "GANs",
  "Deep Learning",
  "NLP",
  "Applied Machine Learning"
];

export const technicalSkills = {
  languages: [
    { name: "Python", level: 80 },
    { name: "Java", level: 70 },
    { name: "C", level: 100 }
  ],

  frameworks: [
    { name: "NumPy", level: 90 },
    { name: "Pandas", level: 88 },
    { name: "Scikit-learn", level: 85 },
    { name: "Seaborn", level: 75 },
    { name: "Matplotlib", level: 78 },
    { name: "PyTorch", level: 82 },
    { name: "TensorFlow", level: 80 },
    { name: "Keras", level: 76 },
    { name: "MATLAB", level: 70 }
  ],

  aiTechniques: [
    { name: "LLM Fine-Tuning", level: 78 },
    { name: "RAG Systems", level: 100 },
    { name: "GANs", level: 70 },
    { name: "Deep Learning", level: 85 },
    { name: "NLP", level: 80 },
    { name: "Agentic AI", level: 75 }
  ],

  tools: [
    { name: "LangChain", level: 80 },
    { name: "Streamlit", level: 75 },
    { name: "Flask", level: 72 },
    { name: "Git", level: 88 },
    { name: "GitHub", level: 90 }
  ],

  cloud: [
    { name: "Oracle Cloud Infrastructure", level: 100 },
    { name: "Oracle Database", level: 100 }
  ],

  softSkills: [
    { name: "Research Writing", level: 80 },
    { name: "Analytical Thinking", level: 90 },
    { name: "Collaboration", level: 100 },
    { name: "Communication", level: 100 }
  ]
};


export const projects = [
  {
    id: 1,
    title: "Hallucination Mitigation in LLMs using RAG",
    status: "Ongoing Research",
    description: "Developing techniques to reduce hallucinations in LLMs using retrieval-grounded factual reinforcement. Built RAG pipelines with LangChain and vector embeddings for evidence-backed responses.",
    highlights: ["Response consistency", "Source verification", "Agentic optimization"],
    techStack: ["LangChain", "Vector Embeddings", "Python", "LLMs"]
  },
  {
    id: 2,
    title: "CropSense — AI-Powered Yield Prediction",
    status: "Smart India Hackathon",
    description: "Built a multilingual AI web app for crop yield prediction using TensorFlow, Keras, and Google Gemini API. Integrated real-time rainfall data and developed a deep learning model for accurate yield forecasting.",
    highlights: ["Multilingual support (English & Odia)", "Real-time data integration", "Personalized recommendations"],
    techStack: ["Python", "TensorFlow", "Keras", "Streamlit", "Pandas", "NumPy", "Gemini API", "Open-Meteo API"]
  },
   {
    id: 3,
    title: "Rehabilitation Questionnaire Platform",
    status: "Freelance Production",
    description: "Built an AI-powered rehabilitation questionnaire platform for an Australian insurance client. Patients fill structured intake forms; an LLM generates clinical-grade summaries automatically. Includes full database management for patient records and questionnaire responses.",
    highlights: [
      "AI-generated clinical summaries",
      "Structured intake questionnaire flow",
      "Patient database management",
      "Australian insurance client deployment"
    ],
    techStack: ["Python", "LLM", "FastAPI", "Database Management"]
  },
 {
    id: 4,
    title: "The Teacher App — Airtel Foundation",
    status: "Active Internship",
    description: "Backend Data Management Intern at Bharti Airtel Foundation. Building and maintaining backend data pipelines and CI/CD workflows for an EdTech platform serving 2.5 lakh+ users across India.",
    highlights: [
      "Backend data pipeline development",
      "CI/CD workflow automation",
      "Scale: 2.5L+ active users"
    ],
    techStack: ["Python", "CI/CD", "Data Pipelines", "Git", "GitHub"]
  }
];


export const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025",
    subtitle: "AI Foundations Associate",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/1axoDn3-xa-E4-kuk3Min8wZ-MklPaWPc/view"
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure 2025",
    subtitle: "Generative AI Professional",
    issuer: "Oracle",
    link:"https://drive.google.com/file/d/1fHbzZ9f9UzN3Z_IoX7K30EaZiUDFdBL3/view"
  }
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  university: "Kalinga Institute of Industrial Technology (KIIT University)",
  duration: "2024 – 2028",
  cgpa: "8.81",
  expectedGraduation: "Aug 2028",
  school: {
    name: "St. Joseph's Senior Secondary School, Kanpur",
    year: "2023",
    details: "Completed Class 12 (PCMB)"
  }
};

export const aircraft = [
  {
    id: 1,
    name: "Sukhoi Su-30MKI",
    codename: "Flanker-H",
    role: "Air Superiority Fighter",
    description: "The backbone of IAF's air superiority fleet. A twin-engine, highly maneuverable 4++ generation fighter with supermaneuverability capabilities.",
    specs: {
      maxSpeed: "2,120 km/h",
      range: "3,000 km",
      ceiling: "17,300 m",
      thrust: "25,000 lbf × 2"
    },
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBW85hNln5Os5mcKaMTFPTIC5PSRkbVFxOjP93vU8K20Bx1pK-RfAxFIik9zpxmw_g-sLLWsLS9WvwNYg4lqJa_lDS5pE7ICMlfBCuiYvaO8-zfJM7ujURbRmPupC8sLHLrJOBN_gaNIqNl3UOu9aboqQXsByMR7hcxeTtfdT7eIswlEP_vaj9XwJEuRw/s4951/873231.jpg"
  },
  {
    id: 2,
    name: "Dassault Rafale",
    codename: "Omnirole",
    role: "Multirole Combat Aircraft",
    description: "IAF's cutting-edge 4.5 generation fighter. Features advanced avionics, AESA radar, and nuclear strike capability with exceptional combat versatility.",
    specs: {
      maxSpeed: "1,912 km/h",
      range: "3,700 km",
      ceiling: "15,240 m",
      thrust: "16,500 lbf × 2"
    },
    image: "https://images.unsplash.com/photo-1665504162041-b15458e47017?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxSYWZhbGUlMjBmaWdodGVyJTIwamV0fGVufDB8fHx8MTc2NTM4OTg4Mnww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    name: "MiG-21 Bison",
    codename: "Fishbed",
    role: "Interceptor / Multi-role",
    description: "The legendary supersonic fighter that has served IAF for decades. Upgraded Bison variant features modern avionics and BVR missile capability.",
    specs: {
      maxSpeed: "2,175 km/h",
      range: "1,470 km",
      ceiling: "17,800 m",
      thrust: "14,307 lbf"
    },
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg023jh_gz6oxSODbA3a8ppuUWgscUY_wRutEyeNylLkD0vgcdFf3t0nym5Z43NJ2SHGxuWZ050hWqWzaWmzZd93gHSQi1O_rVoJHxnI5VOB52jpSW9N-CO-_9fu9Hq_wsihf3j3HlhJrLrzrl9jp63XbwVPpRXj6pZavSBMKJX3mtIbpwIwH6-8Ku9q54/s1350/475225510_18265590313260225_4806571310135763339_n.png"
  }
];

export const heroImages = {
  main: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE2scJHRVyYFmeWQTg2kAelDb3Qtk1poTd1ysT-EKXlhyZt6lAW5oB5EdyZjKRODnRhumpDI-Gaoer_mvKeo7dHrX-5K10v6x8CBHwWgiG3SxPNdvNzMUuQDIlXCtDrEcVBDV3cMW1AXJqKgvGGpqgiI68sst1yTz8U6k9dd_R7-eg5Pui0WUHmuOe3xw/w1684-h1069-p-k-no-nu/2c6cdab1a68c56adf1a6128c6d65dc3d.png",
  cockpit: "https://images.unsplash.com/photo-1585836452451-3f85c51df7e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGNvY2twaXQlMjBIVUR8ZW58MHx8fHwxNzY1Mzg5ODk0fDA&ixlib=rb-4.1.0&q=85"
};
