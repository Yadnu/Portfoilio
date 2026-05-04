"use client";
import React, { useState } from 'react'
import {TbBrandCpp, TbBrandDjango} from 'react-icons/tb';
import { FaHtml5,FaReact,FaFigma, FaNodeJs, FaJs, FaJava, FaPython, FaDocker, FaGithub, FaJenkins } from 'react-icons/fa';
import '../globals.css';

import{
  SiTailwindcss, SiNextdotjs,
  SiShadcnui,
  SiExpress,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiKubernetes,
  SiSonarqube,
  SiRedis,
  SiScikitlearn,
  SiTypescript ,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from '@/components/ui/scroll-area';
import { easeIn, motion } from 'framer-motion';
// about data
const about = {
  title: 'About me',
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yadneya Joshi"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 657 253 8036"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 year"
    },
    {
      fieldName: "Email",
      fieldValue: "yadneyajoshi3@gmail.com"
    },

  ]
};
// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  items: [
    {
      company: "Webster Solutions, India",
      position: "Software Engineer",
      duration: "Aug 2023 – Jul 2024",
      responsibilities: [
        "Led a 5-member team building a Java, Spring Boot, and microservices-based Analytics module, implementing structured exception handling, designing Oracle SQL queries, and automating data exchange via Oracle Advanced Queues.",
        "Migrated legacy Spring application to Spring Boot with Spring Security and JWT-based authentication, authored Helm charts for containerized deployment on Rancher and Harbor, and managed schema changes using Liquibase migration scripts.",
        "Collaborated on automating application testing through shell scripts integrated with Java code, reducing testing time by 50% and improving product stability.",
        "Migrated a gateway application from Java 8 to Java 21, resolving critical security vulnerabilities and ensuring backward compatibility across all dependent services.",
      ],
    },
    {
      company: "PTC Software, India",
      position: "Software Engineer Intern",
      duration: "Jun 2022 – Jun 2023",
      responsibilities: [
        "Redesigned the error reporting system to eliminate redundancy and deliver personalized bug reports to individual team members, and introduced ID-based component retrieval to reduce inter-component latency and improve system responsiveness.",
        "Performed code smell removal on legacy Windchill codebase using SonarQube, improving maintainability and reducing technical debt across core Windchill-Creo CAD interaction modules.",
        "Designed and executed automated integration tests using RestAssured framework and maintained Windchill server releases in close collaboration with Jenkins CI pipelines.",
      ],
    },
    {
      company: "Eduskills foundation",
      position: "AWS Virtual Cloud Internship",
      duration: "Feb 2022 – May 2022",
      responsibilities: [
        "AWS cloud fundamentals and virtual internship program through Eduskills foundation.",
      ],
    },
    {
      company: "Elite Techno Groups",
      position: "Python For ML/AI Internship",
      duration: "Aug 2022 – Sept 2022",
      responsibilities: [
        "Python-focused internship covering ML/AI foundations and practical exercises.",
      ],
    },
    // ADD_EXPERIENCE_HERE
  ],
}
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",

items: [
  {institution: "California State University, Fullerton",
    degree: "Master of Science, Computer Science",
    duration: "August 2024 - present",    
  },
  {institution: "Pimpri Chinchwad College of Engineering, Pune",
    degree: "Bachelor of Science, Computer Science",
    duration: "Feb 2022 - May 20223",    
  },
]

}

// skills
const skills = {
  title: "My Skills",
  items: [
    {
      skillType: "Programming Languages",
      skillList: [
        {
          icon: <TbBrandCpp />,
          name: "c++"
        },
        {
          icon: <FaJava />,
          name: "JAVA",
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
        },
        {
          icon: <SiTypescript  />,
          name: "TypeScript"
        },
        {
          icon: <FaPython />,
          name: "Python"
        },
      ]
    },
    {
      skillType: "Front-end",
      skillList:[
        {
          icon:<FaHtml5/>,
          name: "HTML5"
        },
        {
          icon: <FaReact/>,
          name: "ReactJS"
        },
        {
          icon: <SiNextdotjs />,
          name: "NextJs"
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
        },
        {
          icon: <SiShadcnui />,
          name: "ShadCN Ui",
        }
      ]
    },
    {
      skillType:"Backend",
      skillList:[
        {
          icon:<FaNodeJs />,
          name: "Node JS"
        },
        {
          icons: <SiExpress />,
          name: "Express JS"
        },
        {
          icon: <SiDjango />,
          name: "Django"
        }
      ]
    },
    {
      skillType: "Database",
      skillList:[
        {
          icon: <SiMysql />,
          name: "MySQl",
        },
        {icon: <SiPostgresql/>,
          name: "PostgreSQL"
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB"
        },
        {
          icon: <SiPrisma/>,
          name: "Prisma ORM"
        },
        {
          icon: <SiRedis />,
          name: "Redis Queue"
        }
      ]
    },
    {
      skillType: "DevOps",
      skillList: [
        {
          icon: <FaDocker/>,
          name: "Docker",
        },
        {
          icon: <FaGithub />,
          name: "GitHub"
        },
        {
          icon: <FaJenkins />,
          name: "Jenkins",
        },
        {
          icon: <SiKubernetes />,
          name: "Kubernetes",
        },
        {
          icon: <SiSonarqube />,
          name: "Sonarqube"
        },
      ]

    },
    {
      skillType: "Artificail Intelligence / Machine Learning",
      skillList: [
        {
          icon: <SiScikitlearn />,
          name: "SK learn"
        }
      ]
    }
  ]

}
const Resume = () => {
  const [activeExp, setActiveExp] = useState(null);
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity:1,
        transition: {
          delay: 2.4, duration: 0.4, ease: "easeIn"
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value = "experience" className="w-full" >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className='text-4xl font-bold'>{experience.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 gap-[30px]'>
                  {experience.items.map((item, index) => {
                    const isOpen = activeExp === index;
                    return (
                      <li
                        key={index}
                        onClick={() => setActiveExp(isOpen ? null : index)}
                        className={`bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2 cursor-pointer hover:bg-[#2a2a31] transition-colors duration-300 select-none`}
                      >
                        {/* header row */}
                        <div className='flex w-full justify-between items-start gap-4'>
                          <div className='flex flex-col gap-2 flex-1'>
                            <span className='text-accent text-sm'>{item.duration}</span>
                            <h3 className='text-xl min-h-[48px] text-center lg:text-left leading-tight'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0'></span>
                              <p className='text-white/60 text-sm'>{item.company}</p>
                            </div>
                          </div>
                          <span className={`text-accent text-xl font-light mt-1 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </div>
                        {/* responsibilities — visible when expanded */}
                        {isOpen && item.responsibilities && (
                          <ul className='mt-4 flex flex-col gap-3 w-full border-t border-white/10 pt-4'>
                            {item.responsibilities.map((bullet, i) => (
                              <li key={i} className='flex items-start gap-3 text-white/70 text-sm leading-relaxed'>
                                <span className='text-accent mt-[3px] flex-shrink-0'>•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value = "education" className="w-full" >
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=>{
                    return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2'>
                      <span className='text-accent text-sm'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[48px] text-center lg:text-left leading-tight'>{item.degree}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0'></span>
                        <p className='text-white/60 text-sm'>{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value = "skills" className="w-full h-full" >
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <div>
                      <h3 className='text-4xl font-bold text-accent'>{skills.title}</h3>

                    </div>
                    <ul className='flex flex-col'>
                      {
                        skills.items.map((skillCategory, index) => (

                          <div key={index} >
                            <div className='min-h-[64px]'><h3 className='text-2xl'>{skillCategory.skillType}</h3></div>
                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                              {skillCategory.skillList.map((skill, skillIndex) => (
                                <li key={skillIndex} className=' hover:text-blue-400 '>
                                  <TooltipProvider delayDuration={100} className='flex flex-row'>
                                    <Tooltip>
                                      <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                        <p className='capitalize'>{skill.name}</p>
                                        </TooltipContent>
                                       
                                      
                                    </Tooltip>
                                  
                                  </TooltipProvider>
                                  
                                </li>
                              ))}
                          
                            </ul>
                           
                          </div>
                        ))
                      }
                    </ul>
                  </div>
            </TabsContent>
            {/* about */}
            <TabsContent value = "about" className="w-full text-center xl:text-left" >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4x font-bold'>
                  {about.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index)=>{
                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl '>{item.fieldValue}</span>
                    </li>
                  })}
                </ul> 
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume