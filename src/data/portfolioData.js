// Portfolio data extracted and structured for Nitish Saini

export const personalInfo = {
  name: "Nitish Saini",
  role: "Machine Learning Engineer & Full Stack Developer",
  tagline: "Machine Learning Engineer • Full Stack Developer • AI Enthusiast",
  subtitle: "B.Tech @ IIIT Kota • Senior ML Lead at ArcRobotics",
  bio: "Bridging machine learning and modern full-stack development to build intelligent, production-ready applications—from real-time biometric pipelines to event-driven AI SaaS.",
  phone: "+91-7300025608",
  email: "nitishsaini044@gmail.com",
  github: "https://github.com/nitishsaini-44",
  huggingface: "https://huggingface.co/nitishsaini44",
  docker: "https://hub.docker.com/u/nitishssaini",
  linkedin: "https://www.linkedin.com/in/nitish-s044/",
  location: "Jaipur, Rajasthan",
  availability: "Seeking an Internship / SDE Roles",
  resume: "https://drive.google.com/file/d/1TaL7AZ4_gx6WIW4wO4POAKc-5OJBRoLO/view?usp=sharing",
  collegeId: "2023KUEC2080",
};

export const aboutMe = {
  headline: "Hi, I'm Nitish Saini — an AI/ML Engineer and Full-Stack Developer.",
  paragraphs: [
    "I am an Electronics and Communication Engineering undergraduate at IIIT Kota and the Senior Machine Learning Lead at ArcRobotics x ML Club. I build end-to-end intelligent systems, combining rigorous machine learning with production-grade full-stack engineering.",
    "My hands-on work ranges from developing SynapseSync (an event-driven AI SaaS utilizing Groq, LLaMA 3.1, Celery, and Google Cloud Pub/Sub) to architecting a Smart Biometric Attendance platform powered by InsightFace and ONNX Runtime. Whether training predictive ML ensembles, fine-tuning NLP pipelines, or designing high-performance REST APIs with FastAPI and PostgreSQL, I focus on delivering scalable, reliable solutions.",
    "Alongside building software, I direct a team of 12 engineers in computer vision and robotics at IIIT Kota, and have mentored 20+ junior developers in Python, deep learning workflows, and model deployment."
  ],
  stats: [
    { value: "10+", label: "Delivered Projects" },
    { value: "20+", label: "Developers Mentored" },
    { value: "12", label: "Team Members Led" }
  ]
};

export const education = [
  {
    institution: "Indian Institute of Information Technology, Kota",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "2023 – Present",
    score: "Roll: 2023KUEC2080",
    details: "Core Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Linear Algebra & Optimization, Signal Processing."
  },
  {
    institution: "D.S. Science Academy, Gangapur, Rajasthan",
    degree: "Senior Secondary (Class XII - State Board)",
    period: "Completed",
    score: "96.4%",
    details: "Physics, Chemistry, and Mathematics with State Academic Merit."
  },
  {
    institution: "KUHU International Sr. Sec. School",
    degree: "Secondary School (Class X - State Board)",
    period: "Completed",
    score: "86.4%",
    details: "Foundational Sciences & Mathematics."
  }
];

export const leadership = [
  {
    role: "Senior Machine Learning Lead",
    org: "ArcRobotics x ML Club, IIIT Kota",
    period: "2023 – Present",
    description: "Directing 4+ ML-driven robotics and computer vision initiatives with a 12-member engineering team. Designed training curricula, established Git review workflows, and reduced onboarding time by 30%."
  }
];

export const projects = [
  {
    id: "synapsesync",
    title: "SynapseSync",
    subtitle: "AI Email Triage & Lead Management SaaS",
    category: "Full-Stack & AI",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1200&auto=format&fit=crop",
    description: "A production-grade SaaS platform automating email classification, lead management, and real-time notifications with GPT-OSS 20B and event-driven architecture.",
    backstory: "Handling high volumes of business communication requires immediate prioritization and automated workflows. SynapseSync is an end-to-end cloud platform integrating Gmail API and Google Cloud Pub/Sub for push-based, near-real-time ingestion without continuous polling. Using Groq API with GPT-OSS 20B, incoming emails are categorized into urgent, sales, support, and spam with automated executive summaries and reply drafts. Backed by Celery workers, PostgreSQL, and Flask-SocketIO, it provides enterprise-grade reliability and instant updates to a modern React 19 dashboard.",
    highlights: [
      "Integrated Groq API (GPT-OSS 20B) to classify emails into urgent, sales, support, and spam categories, generate summaries, and draft replies.",
      "Implemented Gmail API and Google Cloud Pub/Sub push notifications for near-real-time email processing without continuous polling.",
      "Built an asynchronous processing pipeline using Celery and concurrent email processing.",
      "Designed a PostgreSQL database architecture for persistent email storage, lead management, and analytics.",
      "Integrated Flask-SocketIO for real-time dashboard updates and Discord webhooks for automated email alerts.",
      "Implemented multi-user Gmail OAuth, JWT authentication, encrypted credentials, rate limiting, and user-level data isolation.",
      "Developed an interactive React 19, Vite, Tailwind CSS, and Recharts dashboard with lead filtering, analytics, and automation controls.",
      "Deployed the frontend on Vercel and the backend on Render."
    ],
    technologies: [
      "React 19", "Vite", "Tailwind CSS", "Python", "Flask", "Groq API", 
      "GPT-OSS 20B", "PostgreSQL", "Celery", "GCP Pub/Sub", "Gmail API", 
      "Socket.IO", "Discord Webhooks", "JWT", "Docker"
    ],
    tags: ["Full-Stack & AI", "Generative AI", "Cloud SaaS"],
    status: "Production",
    links: { 
      github: "https://github.com/nitishsaini-44/synapsesync", 
      live: "https://synapsesync-sam.vercel.app" 
    },
    metrics: [
      { label: "AI Model", value: "GPT-OSS 20B" },
      { label: "Architecture", value: "Pub/Sub" },
      { label: "Async Pipeline", value: "Celery" },
      { label: "Security", value: "OAuth & JWT" }
    ],
    featured: true,
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    subtitle: "AI Biometric Attendance Platform",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    description: "A full-stack biometric attendance management platform combining face recognition, 3 role-based portals, and academic analytics.",
    backstory: "Traditional manual attendance systems are prone to proxy attendance and inefficiency. This platform provides an end-to-end automated biometric solution utilizing InsightFace (buffalo_l model) for high-accuracy face detection, landmark localization, and 512-dimensional facial embedding extraction. Student identities are recognized via cosine similarity across live webcams or group classroom photographs. The architecture separates heavy ML inference into a dedicated Python Flask service while a Node.js/Express backend handles business logic, PostgreSQL database with Prisma ORM, and comprehensive academic analytics including an automated 75% attendance eligibility calculator.",
    highlights: [
      "Implemented three role-based portals for administrators, teachers, and students.",
      "Integrated InsightFace (buffalo_l) for face detection, landmark localization, embedding extraction, and biometric matching.",
      "Used 512-dimensional face embeddings and cosine similarity for student identification during attendance sessions.",
      "Supported live webcam recognition, classroom/group-photo recognition, and manual attendance fallback.",
      "Built a relational database architecture using PostgreSQL and Prisma ORM to manage students, teachers, classes, subjects, attendance records, and audit logs.",
      "Developed attendance analytics, subject-wise reports, CSV exports, and a 75% attendance eligibility calculator.",
      "Added JWT authentication, password hashing, administrative controls, and audit trails for attendance corrections.",
      "Separated biometric inference into a Python Flask service, integrated with the Node.js and Express backend."
    ],
    technologies: [
      "React", "Vite", "Tailwind CSS", "Node.js", "Express.js", 
      "Python", "Flask", "PostgreSQL", "Prisma ORM", "InsightFace", 
      "ONNX Runtime", "JWT", "Hugging Face"
    ],
    tags: ["Computer Vision", "Full-Stack & AI", "Biometrics"],
    status: "Live",
    links: { 
      github: "https://github.com/nitishsaini-44/SmartAttendanceSystem", 
      live: "https://smart-attendance-portal1.vercel.app/" 
    },
    metrics: [
      { label: "Embeddings", value: "512-D" },
      { label: "Accuracy", value: "95%+" },
      { label: "Portals", value: "3 Roles" },
      { label: "Model", value: "InsightFace" }
    ],
    featured: true,
  },
  {
    id: "synapsesync-analytics",
    title: "SynapseSync Analytics Dashboard",
    subtitle: "Data Analytics & Business Intelligence",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "A comprehensive Business Intelligence and analytics dashboard analyzing live communication data with interactive visual KPI reporting.",
    backstory: "To unlock actionable intelligence from high-volume customer emails, I constructed an automated analytics pipeline executing data extraction, cleaning, and metric computation. I created 8 interactive Plotly dashboards to visualize inquiry volume, resolution time, customer urgency, and historical trends. The system also embeds an AI-powered assistant via Groq for natural language data querying and automated chart synthesis.",
    highlights: [
      "Built a high-performance BI pipeline handling data extraction, schema validation, and KPI reporting from PostgreSQL.",
      "Engineered 8 interactive Plotly dashboards visualizing reply velocities, urgency distributions, and seasonal volume trends.",
      "Implemented an AI-powered analytics assistant with Groq for natural language data querying and dynamic chart synthesis.",
      "Connected FastAPI microservices with PostgreSQL for sub-second analytical aggregations."
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "Pandas", "Plotly", "FastAPI", "Groq API"],
    tags: ["Data Analytics", "Business Intelligence"],
    status: "Completed",
    links: { 
      github: "https://github.com/nitishsaini-44/SynapseSync-Analytics-Dashboard" 
    },
    metrics: [
      { label: "Dashboards", value: "8" },
      { label: "AI Querying", value: "Groq LLaMA" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Backend", value: "FastAPI" }
    ],
    featured: false,
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    subtitle: "ML Classification & Streamlit",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    description: "An end-to-end machine learning pipeline using XGBoost and SMOTE to identify at-risk customers and prevent attrition.",
    backstory: "Customer retention is critical for any recurring subscription business. In this project, I performed extensive exploratory data analysis, data cleaning, and feature engineering to uncover key churn drivers. To tackle severe class imbalance in subscription datasets, I applied SMOTE (Synthetic Minority Over-sampling Technique). Hyperparameters were optimized via exhaustive GridSearchCV, resulting in a model achieving a 0.91 ROC-AUC score. The inference pipeline is exposed via Flask REST APIs and an interactive Streamlit dashboard.",
    highlights: [
      "Developed a high-performance binary classification pipeline using XGBoost to predict customer attrition.",
      "Applied SMOTE (Synthetic Minority Over-sampling Technique) to effectively resolve class imbalance.",
      "Tuned hyperparameters exhaustively using GridSearchCV to maximize the ROC-AUC score.",
      "Achieved a reported ROC-AUC score of 0.91 on held-out test data.",
      "Exposed real-time prediction endpoints via Flask REST APIs and built an interactive Streamlit dashboard."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "SMOTE", "GridSearchCV", "Flask", "Streamlit"],
    tags: ["Machine Learning", "Data Analytics"],
    status: "Live Demo",
    links: { 
      github: "https://github.com/nitishsaini-44/Customer-Churn-Prediction", 
      live: "https://churnsenseai.streamlit.app/" 
    },
    metrics: [
      { label: "ROC-AUC", value: "0.91" },
      { label: "Model", value: "XGBoost" },
      { label: "Sampling", value: "SMOTE" },
      { label: "Tuning", value: "GridSearch" }
    ],
    featured: false,
  },
  {
    id: "sentiment-api",
    title: "Sentiment Analysis Web Application",
    subtitle: "NLP Classification Pipeline",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    description: "An end-to-end NLP classification system utilizing Word2Vec embeddings and Support Vector Machines for high-accuracy text sentiment detection.",
    backstory: "Accurate sentiment analysis requires deep linguistic representations capable of capturing semantic nuance. I designed a complete text preprocessing and tokenization pipeline using NLTK and Gensim, followed by dense semantic vector extraction with Word2Vec. A Support Vector Machine (SVM) classifier was trained on benchmark text datasets, reaching 89.6% accuracy and an F1-score of 0.88. The trained model is deployed behind a production Flask REST API for real-time inference.",
    highlights: [
      "Built an end-to-end sentiment classification pipeline using Word2Vec embeddings and Support Vector Machine (SVM).",
      "Performed text preprocessing, tokenization, stop-word removal, and feature engineering using NLTK and Gensim.",
      "Achieved a verified 89.6% accuracy and a 0.88 F1-score on evaluated benchmark datasets.",
      "Deployed a lightweight Flask-based inference API enabling low-latency real-time sentiment predictions."
    ],
    technologies: ["Python", "Scikit-learn", "Word2Vec", "SVM", "NLTK", "Gensim", "Flask", "NLP"],
    tags: ["Machine Learning", "NLP"],
    status: "Completed",
    links: { 
      github: "https://github.com/nitishsaini-44/sentiment-analysis-engine" 
    },
    metrics: [
      { label: "Accuracy", value: "89.6%" },
      { label: "F1-Score", value: "0.88" },
      { label: "Embedding", value: "Word2Vec" },
      { label: "Classifier", value: "SVM" }
    ],
    featured: false,
  },
  {
    id: "california-home-prices",
    title: "California Home Price Prediction",
    subtitle: "Regression & Predictive Modeling",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    description: "A machine learning regression system comparing multiple predictive algorithms to accurately forecast residential property values.",
    backstory: "Accurate housing valuation demands robust feature transformation, geographic factor modeling, and rigorous cross-validation. In this project, I cleaned and normalized complex housing census datasets, engineered spatial and economic features, and rigorously benchmarked Linear Regression, Decision Trees, and Random Forest regressors using k-fold cross-validation. The final tuned Random Forest ensemble achieved an outstanding R² score of 0.87, delivering highly reliable price predictions.",
    highlights: [
      "Trained, evaluated, and compared Linear Regression, Decision Tree, and Random Forest ensemble models.",
      "Conducted rigorous k-fold cross-validation to prevent data leakage and evaluate generalized performance.",
      "Engineered spatial, socioeconomic, and structural features to capture non-linear real estate price drivers.",
      "Achieved a reported R² score of 0.87 with the optimized Random Forest regression model."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "K-Fold CV"],
    tags: ["Machine Learning", "Data Analytics"],
    status: "Completed",
    links: { 
      github: "https://github.com/nitishsaini-44" 
    },
    metrics: [
      { label: "R² Score", value: "0.87" },
      { label: "Best Model", value: "Random Forest" },
      { label: "Validation", value: "K-Fold" },
      { label: "Type", value: "Regression" }
    ],
    featured: false,
  },
  {
    id: "stock-rl",
    title: "Stock Market DQN Agent",
    subtitle: "Deep Reinforcement Learning",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    description: "An autonomous trading agent utilizing Deep Q-Networks (DQN) to optimize Buy, Hold, and Sell decisions on historical financial market data.",
    backstory: "Traditional rule-based algorithmic trading often fails to adapt to non-stationary market dynamics. In this research project, I built a Deep Q-Network (DQN) model capable of discovering optimal sequential trading policies. I engineered critical time-series financial indicators (such as Simple Moving Averages and rolling percentage returns) and trained the agent across 300+ simulation episodes. The agent achieved an empirical ~70% win-rate accuracy, with policy visualizations and backtesting displayed in an interactive Streamlit dashboard.",
    highlights: [
      "Built a Deep Q-Network (DQN) reinforcement learning model to learn autonomous buy/hold/sell actions on financial market data.",
      "Processed historical equity data and engineered 4 key time-series features (SMA, rolling volatility, returns).",
      "Trained the agent over 300+ simulation episodes, achieving ~70% accuracy across multiple performance metrics.",
      "Developed an interactive Streamlit dashboard for real-time model predictions and historical backtesting visualization."
    ],
    technologies: ["Python", "TensorFlow", "Deep Q-Networks", "Streamlit", "Pandas", "NumPy", "Time Series"],
    tags: ["Reinforcement Learning", "Machine Learning", "FinTech"],
    status: "Research",
    links: { 
      github: "https://github.com/nitishsaini-44/StockTradingBot" 
    },
    metrics: [
      { label: "Episodes", value: "300+" },
      { label: "Win Rate", value: "~70%" },
      { label: "Algorithm", value: "DQN" },
      { label: "Interface", value: "Streamlit" }
    ],
    featured: false,
  },
];

export const skills = {
  "Programming Languages": ["Python", "C", "C++", "JavaScript", "SQL", "Java"],
  "AI & Machine Learning": [
    "Machine Learning", "Deep Learning", "NLP", "Computer Vision", 
    "Scikit-Learn", "TensorFlow", "PyTorch", "Sentiment Analysis", 
    "Classification", "Regression", "Feature Engineering", "Model Evaluation"
  ],
  "Generative AI & LLMs": [
    "Large Language Models (LLMs)", "Prompt Engineering", "LLM API Integration", 
    "Groq API", "LLaMA 3.1", "OpenAI API", "Text Summarization", "AI Reply Generation", "AI Automation"
  ],
  "Computer Vision & Biometrics": [
    "InsightFace", "Face Detection", "Facial Embeddings", "Cosine Similarity", "ONNX Runtime", "Biometric Recognition"
  ],
  "Frontend Development": [
    "React.js", "React 19", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI", "Real-Time Dashboards", "Recharts"
  ],
  "Backend & APIs": [
    "Python Flask", "FastAPI", "Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "RBAC", "Socket.IO", "Webhooks"
  ],
  "Databases & Cloud": [
    "PostgreSQL", "Prisma ORM", "MongoDB", "MySQL", "Google Cloud Pub/Sub", "Gmail API", "Celery", "Upstash Redis"
  ],
  "DevOps & Tools": [
    "Git", "GitHub", "Docker", "Postman", "Vercel", "Render", "Hugging Face", "CI/CD"
  ],
  "Core CS & Systems": [
    "Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "System Design Fundamentals"
  ]
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
