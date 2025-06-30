import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaPhone } from 'react-icons/fa';

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section by id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Project' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'experience', label: 'Experiences' }
  ];

  const projects = [
    {
      title: 'Jurnal Bumil',
      description: 'is a web application that helps pregnant women monitor their pregnancy health independently and in coordination with midwives or medical professionals. Its main features include daily complaint tracking, check-up schedules, progress charts, pregnancy education, and online consultations with midwives. The application aims to enhance awareness, comfort, and safety for mothers throughout their pregnancy.',
      image: '/jurnalBumil.jpeg',
      color: 'from-green-400 to-green-600',
      link: 'https://github.com/risya22008/JurnalBumil'
    },
    {
      title: 'Tanya Berita',
      description: 'is an AI-powered web application that delivers the latest news by category and features an intelligent chatbot. Users can browse news based on their interests (such as technology, economy, or sports) and ask questions related to the news content directly to the chatbot. The application is built with React for the frontend and TypeScript for the backend, integrated with a news API and AI model to provide context-based answers. Its goal is to offer an interactive and informative news-reading experience.',
      image: '/tanyaBerita.jpeg',
      color: 'from-blue-400 to-blue-600',
      link: 'https://github.com/risya22008/TanyaBerita'
    },
    {
      title: 'Web Pencarian Aksara Jawa',
      description: 'is a Semantic Web-based application that allows users to search for Javanese vocabulary along with its script form, Latin transliteration, meaning, and example sentences. This application utilizes RDF and OWL technologies to build a structured vocabulary ontology, enabling semantic search and relationships between words. Its main goal is to help preserve local languages through an intelligent and structured digital system.',
      image: '/aksaraJawa.jpeg',
      color: 'from-purple-400 to-purple-600',
      link: 'https://github.com/risya22008/Web-Pencarian-Aksara-Jawa'
    }
  ];

  const certificate = [
    {
      title: 'DeepLearning.AI TensorFlow Developer',
      image: '/sertif1.jpg',
      link: 'https://coursera.org/share/2b7421a3efa1a62b92f8101a1dfc973c'
    },
    {
      title: 'Machine Learning',
      image: '/sertif2.png',
      link: 'https://coursera.org/share/670d8481c4cf35e3b804572c4960aa4e'
    },
    {
      title: 'Sequences, Time Series and Prediction',
      image: '/sertif3.png',
      link: 'https://coursera.org/share/5709e6c774cb2f0d7b822a1068b25b59'
    },
    {
      title: 'Browser-based Models with TensorFlow.js',
      image: '/sertif4.jpg',
      link: 'https://coursera.org/share/80673a90d891ce53f90d441e2aaadb15'
    },
    {
      title: 'Data Pipelines with TensorFlow Data Services',
      image: '/sertif5.jpg',
      link: 'https://coursera.org/share/f2d4a84b80d7b7a62048792394760077'
    },
    {
      title: 'Custom Models, Layers, and Loss Functions with TensorFlow',
      image: '/sertif6.png',
      link: 'https://coursera.org/share/8043dcab77039ae37f0675cd5cf27b4d'
    },
    {
      title: 'Device-based Models with TensorFlow Lite',
      image: '/sertif7.png',
      link: 'https://coursera.org/share/d3e42462db94d2e687a4d1cbdde006ef'
    },
    {
      title: 'Advanced Computer Vision with TensorFlow',
      image: '/sertif8.png',
      link: 'https://coursera.org/share/2825028538077551ef4b9b47d939d5ed'
    },
    {
      title: 'Generative AI for Everyone',
      image: '/sertif9.png',
      link: 'https://coursera.org/share/68379d276ea79d100756fb613cb519ff'
    },
    {
      title: 'Structuring Machine Learning Projects',
      image: '/sertif10.png',
      link: 'https://coursera.org/share/1731c83b9eedd3c3b9c5833169cf26e8'
    },
    {
      title: 'Build Basic Generative Adversarial Networks (GANs)',
      image: '/sertif11.png',
      link: 'https://coursera.org/share/db103fe453e9899e0fadae29118d7d9b'
    },
    {
      title: 'Custom and Distributed Training with TensorFlow',
      image: '/sertif12.png',
      link: 'https://coursera.org/share/ffe8557ad49e4cc82ef5be4f78a621e1'
    },
    {
      title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
      image: '/sertif13.png',
      link: 'https://coursera.org/share/6197b64804e8a65390fa4872dfe058f0'
    },
    {
      title: 'Convolutional Neural Networks in TensorFlow',
      image: '/sertif14.png',
      link: 'https://coursera.org/share/f19248f78ad5914c693577fc8ccce722'
    },
    {
      title: 'Using Python to Interact with the Operating System',
      image: '/sertif15.png',
      link: 'https://coursera.org/share/34ddcf3856b6a3dbadfabec6fe7c8c4e'
    },
    {
      title: 'Linear Algebra for Machine Learning and Data Science',
      image: '/sertif16.png',
      link: 'https://coursera.org/share/1b5567909c520a22c59662c22bbd889e'
    },
    {
      title: 'Natural Language Processing in TensorFlow',
      image: '/sertif17.png',
      link: 'https://coursera.org/share/59c2b24e4901e34b8bf4e04b22d95765'
    },
    {
      title: 'Advanced Learning Algorithms',
      image: '/sertif18.png',
      link: 'https://coursera.org/share/6e913737abc727e0c9409382950e2c38'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      image: '/sertif19.png',
      link: 'https://coursera.org/share/405505020913406597b713a494bf41ea'
    },
    {
      title: 'Crash Course on Python',
      image: '/sertif20.png',
      link: 'https://coursera.org/share/d22f3a5bc19dc4471b2c843de1c0e3f0'
    },
    {
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      image: '/sertif21.png',
      link: 'https://coursera.org/share/f4589c6374ad3cd26ca824ee5cfcc92f'
    },
    {
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      image: '/sertif22.png',
      link: 'https://drive.google.com/file/d/1VCXaDhw8x5VguY0bhGod9erVyaYuAuTy/view?usp=drive_link'
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      image: '/sertif23.png',
      link: 'https://drive.google.com/file/d/1DXjAtBcyZHsrXZfdjvEBdXEl4OLG25oX/view?usp=drive_link'
    },
    {
      title: 'CCNA: Introduction to Networks',
      image: '/sertif24.png',
      link: 'https://drive.google.com/file/d/1Hsn2YTZNKVuS_D5PEiFG4oOh0KGCrelE/view?usp=drive_link'
    },
  ];

  const tools = [
    { name: 'Node.js', icon: '🟢', description: 'Runtime environment for executing JavaScript on the server' },
    { name: 'TypeScript', icon: '🔷', description: 'A statically typed programming language that enhances code reliability' },
    { name: 'Express.js', icon: '⚡', description: 'A minimal and flexible backend framework for building RESTful APIs' },
    { name: 'Firebase Auth', icon: '🔐', description: 'Handles user authentication, including registration, login, and email OTP verification' },
    { name: 'Firestore', icon: '🔥', description: 'Firebase’s NoSQL database used to store user and content data' },
    { name: 'Docker', icon: '🐳', description: 'Enables containerization and backend deployment' },
    { name: 'Google Cloud Run', icon: '☁️', description: 'Cloud service for running containerized backend applications' },
    { name: 'Vite', icon: '⚡', description: 'Dev server proxy to connect frontend and backend during development' },
    { name: 'Postman', icon: '📮', description: 'Used for testing endpoints and debugging APIs' },
    { name: 'Git & GitHub', icon: '🔧', description: 'Version control system and platform for collaborative development' }
  ];

  const backendSkills = [
    'Developing RESTful APIs using Express',
    'Managing authentication and authorization with Firebase',
    'Implementing email verification with OTP',
    'Performing CRUD operations and structuring Firestore collections',
    'Handling filtering, pagination, and query parameters',
    'Using middleware for input validation and logging',
    'Utilizing environment variables for configuration and security',
    'Deploying backend applications to Google Cloud Run with Docker',
    'Debugging APIs using Postman',
    'Using Git for version control and collaborative project management'
  ];


  const experiences = [
    {
      title: 'Machine Learning Cohort · Apprenticeship',
      company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      period: 'Sep 2024 - Dec 2024',
      description: [
        'Selected as 1 of 4,636 participants from over 45,000 applicants across Indonesia for the prestigious Bangkit 2024 Batch 2 program, endorsed by the Ministry of Education, Culture, Research, and Technology (Kemdikbudristek).',
        'Completed an intensive curriculum covering Machine Learning, Mathematics, and TensorFlow.',
        'Collaborated remotely with diverse teams to solve real-world industry projects, applying AI and data-driven solutions to practical problems.',
        'Applied data preprocessing, feature engineering, and model evaluation techniques to solve real-world business problems through capstone project development.',
        'Enhanced project management, communication, and problem-solving skills through agile development practices and weekly industry mentor sessions.'
      ],
      image: '/bangkit.jpeg',
      link: 'https://drive.google.com/file/d/1K-YZdBIMtq2GCwzBwUJE5VOrJfmJFG25/view?usp=drive_link'
    },
    {
      title: 'Financial Bureau Staff · Organization',
      company: 'Executive Board of Himatif FMIPA Unpad',
      period: 'Jan 2023 - Dec 2023',
      description: [
        "Managed the organization's financial transactions and ensured proper cash flow tracking.",
        'Prepared and submitted routine financial reports to maintain transparency and accountability.',
        'Assisted in drafting and reviewing annual budget plans for events and operational needs.',
        'Recorded and organized income and expenditure data in an accurate and timely manner.',
        'Collaborated with other bureaus to allocate funds efficiently and in accordance with the budget.',
        'Developed financial documentation such as receipts, ledgers, and end-of-period financial statements.',
        'Practiced financial responsibility, attention to detail, and strong ethical standards in all tasks.'
      ],
      image: '/himatif.png',
      link: 'https://drive.google.com/file/d/1LlZ-zqWtr-qpRBkTUCCym0g2dv-TctiV/view?usp=drive_link'
    },
    {
      title: 'Human Resources Staff · Volunteering',
      company: 'Informatics Festival 2024 - Himatif FMIPA Unpad',
      period: 'Jul 2024 - Oct 2024',
      description: [
        'Supported recruitment, onboarding, and member data management.',
        'Assisted in maintaining a positive and collaborative organizational culture.',
        'Managed attendance records, performance tracking, and internal evaluations.',
        'Contributed to the planning and execution of team-building and bonding activities.',
        'Ensured effective internal communication between members and departments.',
        'Practiced confidentiality, professionalism, and people-oriented problem solving.'
      ],
      image: '/himatif.png',
      link: 'https://drive.google.com/file/d/1FS1hR8FZr44SJHPQFxyCgNApOC47kzxD/view?usp=drive_link'
    },
    {
      title: 'Head of Public Relations Division · Volunteering',
      company: 'Informatics Fun Day 2023 - Himatif FMIPA Unpad',
      period: 'Oct 2023 - Nov 2023',
      description: [
        'Created a detailed list of invitees and managed timely delivery of formal invitations to boost event participation.',
        'Ensured clear and responsive communication with guests, including updates about agenda, venue, and purpose.',
        'Utilized social media and official channels to promote the event and increase engagement.',
        'Collaborated with other divisions to align promotional strategies and maintain visual consistency.'
      ],
      image: '/himatif.png',
      link: 'https://drive.google.com/file/d/1DnHTQ-KcDT-Tff0Cadjwjs0vu035jSaf/view?usp=drive_link'
    },
    {
      title: 'Treasurer · Volunteering',
      company: 'Informatics Festival 2023 - Himatif FMIPA Unpad',
      period: 'Aug 2023 - Oct 2023',
      description: [
        'Managed financial records, ensuring accuracy in tracking income and expenditures.',
        'Created and maintained detailed financial reports for transparency.',
        'Developed and monitored budgets for various programs and events.',
        'Oversaw cash flow and ensured timely fund disbursement and reimbursement.',
        'Worked with the Finance Bureau to allocate funds based on approved budgets.',
        'Prepared financial statements for internal evaluation and reporting.',
        'Upheld financial policies and demonstrated high integrity in fund management.'
      ],
      image: '/himatif.png',
      link: 'https://drive.google.com/file/d/1BABFvdJfckkG9qf0q2cOQn31XK32Re5Z/view?usp=drive_link'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-purple-400 text-lg font-medium">Hello</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I am{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Risya Annisa' Chairyah
                </span>
              </h1>
              <p className="text-xl text-purple-300 font-semibold">Backend Enthusiast</p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am highly interested in backend development, particularly in designing scalable APIs,
                optimizing database interactions, and building reliable system architectures. I enjoy
                working behind the scenes to ensure that applications run smoothly, securely, and efficiently.
              </p>
              <p>
                I love exploring backend cloud technologies, such as serverless architecture and database
                management on platforms like Firebase and Google Cloud. I'm continuously learning new
                backend tools, design patterns, and performance optimization techniques.
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/risya-annisa-chairyah-027209335"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/risya22008"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:risyaannisachairyah1411@gmail.com"
                className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/30 flex items-center gap-3 font-semibold">
              <FaDownload />
              Download CV
            </button> */}
          </div>

          {/* Right Profile */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-3xl p-1 shadow-2xl shadow-purple-600/30">
                <div className="w-full h-full bg-gray-900 rounded-3xl flex items-center justify-center">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden">
                    <img
                      src="/risya.png"
                      alt="Risya Annisa' Chairyah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
            <p className="text-gray-400">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-60 h-40 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                  <img src={project.image} alt={project.title} className="w-40 h-30 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-300 text-sm font-medium"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificates" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Certificates</h2>
            <p className="text-gray-400">My verified online certifications</p>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {certificate.map((cert, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-white">{cert.title}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Tools & Technology Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🔧 Tools & Technology</h2>
            <p className="text-gray-400">Backend technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-purple-300">{tool.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Backend Skills Section */}
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold mb-8 text-center">🛠️ Backend Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="text-green-400 font-bold">✅</div>
                  <p className="text-gray-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experiences</h2>
            <p className="text-gray-400">My professional journey</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Image instead of icon */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-700 bg-white flex-shrink-0">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  {/* Experience Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-purple-400 mb-2">
                      {exp.company} • {exp.period}
                    </p>

                    {/* Bullet point description */}
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {Array.isArray(exp.description)
                        ? exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))
                        : <li>{exp.description}</li>}
                    </ul>
                  </div>

                  {/* Optional: remove or modify as needed */}
                  <button
                    onClick={() => window.open(exp.link, '_blank')}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-300"
                  >
                    View Details
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <footer className="py-20 px-6 bg-gray-900/50 border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400">Let's work together</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="font-semibold">0896-2303-4199</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-semibold">risyaannisachairyah1411@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <svg width="200" height="150" className="text-purple-400">
                  <circle cx="100" cy="75" r="60" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
                  <path d="M160 30 L180 50 L170 70" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M40 30 L20 50 L30 70" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}