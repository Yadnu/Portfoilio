"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {BsArrowUpRight,BsGithub} from 'react-icons/bs';
import { Tooltip,
         TooltipContent,
         TooltipProvider,
         TooltipTrigger
 } from '@radix-ui/react-tooltip';
 import Link from 'next/link';

/** Four portfolio bands: microservices, MERN, AI, blockchain (wallet last). */
const projectSections = [
  {
    key: 'microservices',
    sectionHeading: 'Microservices',
    projects: [
      {
        num: "01",
        category: "Microservices",
        title: "Moneyfest - a banking platform",
        descrption:`• Architected a production-grade banking backend with 7 independently deployable Spring Boot / Java microservices covering auth, accounts, payments, and credit products, routed through a Spring Cloud Gateway with Eureka-based service discovery and Database-per-Service isolation enabling independent deployment and scaling of each domain.
• Implemented RS256 asymmetric JWT authentication with auto-generated RSA key pairs for stateless token validation across all services, enforced account lockout after 5 failed login attempts.
• Built an Admin Service orchestrating bulk approval workflows across 5 domain services via OpenFeign with Resilience4j circuit breakers, ensuring graceful degradation when downstream services are unavailable.`,
        stack: [{name:"Java 21"},{name:"Spring Boot"},{name:"Spring Cloud"},{name:"MySQL"},{name:"JWT"},{name:"OpenFeign"}],
        live: "",
        github: "https://github.com/Yadnu/Moneyfest-a-banking-platform",
      },
      {
        num: "02",
        category: "Microservices",
        title: "Bookify - A Distributed Hotel Booking Platform",
        descrption:`• Built a Hotel Management System using Java, Spring Boot, and microservices architecture with independently deployable User, Hotel, and Rating services registered via Netflix Eureka and routed through a Spring Cloud Gateway secured with JWT authentication.
• Configured a Spring Cloud Config Server for centralized external configuration management and designed an aggregator pattern in the User Service to compose hotel and rating data into a single API response.
• Managed multi-database persistence across PostgreSQL and MySQL using Spring Data JPA, and documented all REST APIs with Springdoc OpenAPI (Swagger UI).`,
        stack: [{name:"Java"},{name:"Spring Boot"},{name:"Microservices"},{name:"PostgreSQL"},{name:"MySQL"},{name:"Spring Cloud"}],
        live: "",
        github: "https://github.com/Yadnu/Bookify-A-Distributed-Hotel-Booking-Platform",
      },
      {
        num: "03",
        category: "Microservices",
        title: "Cronation - Cron Job Scheduler",
        descrption:`Job Scheduling Platform
• Built a Quartz job scheduling REST API using Spring Boot 3.2 and Java 21, enabling dynamic job creation, pausing, resuming, and deletion via REST endpoints with cron-based triggers stored in PostgreSQL using JDBC job store.
• Secured the application with stateless JWT authentication, implementing a custom filter chain to validate Bearer tokens on all protected routes and short-circuit CORS preflight requests.
• Designed a custom @JobComponent annotation system with a classpath scanner registrar, mirroring Spring's internal component scanning mechanism to cleanly separate job task registration from standard Spring beans.`,
        stack: [{name:"Java 21"},{name:"Spring Boot"},{name:"Quartz"},{name:"PostgreSQL"},{name:"JWT"},{name:"React"}],
        live: "",
        github: "https://github.com/Yadnu/Cronation",
      },
    ],
  },
  {
    key: 'mern',
    sectionHeading: 'MERN',
    projects: [
      {
        num: "01",
        category: "MERN",
        title: "TaxSense – AI-Powered Intelligent Platform",
        descrption:`• Designed and built a production RAG pipeline integrating Gemini API with vector retrieval and rule-based validation, enabling accurate AI-assisted recommendations grounded in structured financial data.
• Built and debugged full stack services end-to-end, shipping a React/Next.js frontend with interactive data visualizations and a Node backend with multi-stage data transformation pipelines.
• Deployed on AWS EC2 with S3 and Redis, making practical infrastructure decisions under real constraints; iterated rapidly on model behavior based on data quality feedback to improve output precision.`,
        stack: [{name:"Groq"},{name:"TypeScript"},{name:"React"},{name:"PostgreSQL"},{name:"Gemini API"},{name:"AWS"}],
        live: "https://tax-sense-tau.vercel.app/",
        github: "https://github.com/Yadnu/TaxSense",
      },
      {
        num: "02",
        category: "MERN",
        title: "Finosuke – Personal Finance Platform",
        descrption:`• Shipped a production-grade full stack application with a React/Next.js/TypeScript frontend and a Node.js/PostgreSQL backend, implementing Redis-based caching and rate limiting for performance at scale.
• Built complex SQL analytics with CTEs and aggregations powering real-time financial summaries and dynamic filtering; deployed continuously on Vercel with automated CI pipelines.
• Wrote comprehensive test coverage using Vitest and MSW for API mocking, maintaining high confidence across frontend and backend workflows through iterative shipping cycles.`,
        stack: [{name:"TypeScript"},{name:"React"},{name:"Next.js"},{name:"PostgreSQL"},{name:"Redis"},{name:"Node.js"}],
        live: "https://fino-suke.vercel.app/",
        github: "https://github.com/Yadnu/Fino-Suke",
      },
    ],
  },
  {
    key: 'ai',
    sectionHeading: 'AI',
    projects: [
      {
        num: "01",
        category: "AI / ML",
        title: "QA System using NLP",
        descrption:`● Implemented a state-of-the-art QA system utilizing a robustsummarization algorithm and leveraging BERT model for
accurate keyword extraction; achieved a 40% reduction in errors and improved accuracy in data analysis.
● Integrated APIs from reputable sourcessuch as Wikipedia and generative AI platforms to fetch diverse and reliable data for
the QA system, ensuring a comprehensive knowledge base for accurate and contextually relevant responses.
● Architected and deployed data preprocessing methodologies, filtering and validating API data, which led to a 30% reduction 
in irrelevant information and enhanced the system's accuracy and responsiveness.
● Conducted rigorous testing and fine-tuning, achieving a false positive rate reduction of 20%, thereby optimizing the QA 
system's reliability and increasing user confidence in the answers provided.`,
        stack: [{name: "Flask"}, {name: "SK-learn"}, {name:"ReactJS"}],
        live: "",
        github: "",
      },
      {
        num: "02",
        category: "AI / ML",
        title: "Movie Recommendation",
        descrption:`● Orchestrated the optimization of the movie recommendation system, leveraging AI and machine learning techniques, 
leading to a 35% increase in user interaction and a 12% rise in revenue from movie rentals.
● Incorporated SKlearn library for machine learning and Tkinter for the user interface. The System uses a model-based approach`,
        stack: [{name: "Python"},{name: "Tkinter"},{name: "SkLearn"}],
        live: "",
        github: "",
      },
    ],
  },
  {
    key: 'blockchain',
    sectionHeading: 'Blockchain',
    projects: [
      {
        num: "01",
        category: "Blockchain",
        title: "Walleto",
        descrption:`Developed a web3 based wallet using NextJS
    Implemented HD wallet using bip39.
    Wallet supports Ethereum and Solana
    `,
        stack: [{name:"NextJS"},{name:"TypeScript"}, {name:"web3.js"}, {name:"ShadCN"}],
        live: "https://wallet-ten-self.vercel.app/",
        github: "https://github.com/Yadnu/wallet/tree/master",
      },
      // ADD_PROJECT_HERE
    ],
  },
];

function countProjects(section) {
  return section.projects.filter((p) => p && typeof p === 'object' && 'title' in p).length;
}

function ProjectBand({ sectionHeading, projects }) {
  if (!projects.length) {
    return (
      <div className="flex flex-col gap-6 py-4">
        <h2 className="text-3xl xl:text-4xl font-bold text-white border-b border-accent/30 pb-4 inline-block w-max max-w-full">
          {sectionHeading}
        </h2>
        <p className="text-white/50 text-lg max-w-xl">
          No projects in this category yet.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 py-4">
      <h2 className="text-3xl xl:text-4xl font-bold text-white border-b border-accent/30 pb-4 inline-block w-max max-w-full">
        {sectionHeading}
      </h2>
      <div className="flex flex-col gap-16 w-full max-w-3xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col gap-[30px] ${index > 0 ? 'pt-16 border-t border-white/10' : ''}`}
          >
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
            <h3 className='text-[42px] font-bold leading-none text-white capitalize'>{project.title}</h3>
            <p className="text-white/60 whitespace-pre-line">{project.descrption}</p>
            <ul className='flex flex-wrap gap-4'>
              {project.stack.map((item, stackIndex) => (
                <li key={stackIndex} className='text-xl text-accent'>
                  {item.name}
                  {stackIndex !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <div className='border border-white/20'></div>
            <div className='flex items-center gap-4'>
              {project.live ? (
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              ) : null}
              {project.github ? (
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Work = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const selectedSection = selectedKey
    ? projectSections.find((s) => s.key === selectedKey)
    : null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedKey(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.4, ease: "easeIn"}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'> 
        <div className="container mx-auto px-4 xl:px-0">
          {selectedKey === null ? (
            <div className="flex flex-col gap-10">
              <div className="text-center xl:text-left">
                <h1 className="text-4xl xl:text-5xl font-bold text-white mb-3">Work</h1>
                <p className="text-white/60 max-w-xl mx-auto xl:mx-0">
                  Pick a category to browse projects.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {projectSections.map((section) => {
                  const n = countProjects(section);
                  return (
                    <button
                      key={section.key}
                      type="button"
                      onClick={() => setSelectedKey(section.key)}
                      className="group text-left bg-[#232329] hover:bg-[#2a2a31] border border-white/10 hover:border-accent/50 rounded-xl px-8 py-10 transition-all duration-300 flex flex-col gap-3 min-h-[160px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    >
                      <span className="text-2xl xl:text-3xl font-bold text-white group-hover:text-accent transition-colors">
                        {section.sectionHeading}
                      </span>
                      <span className="text-white/50 text-sm">
                        {n === 0 ? 'No projects yet' : `${n} project${n === 1 ? '' : 's'}`}
                      </span>
                      <span className="text-accent text-sm font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        View →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <motion.div
              key={selectedKey}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="flex flex-col gap-8"
            >
              <button
                type="button"
                onClick={() => setSelectedKey(null)}
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-medium w-max"
              >
                <span aria-hidden>←</span> All categories
              </button>
              {selectedSection ? (
                <ProjectBand
                  sectionHeading={selectedSection.sectionHeading}
                  projects={selectedSection.projects}
                />
              ) : null}
            </motion.div>
          )}
        </div>
    </motion.section>
  )
}

export default Work
