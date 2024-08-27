"use client";
import React from 'react'
import {TbBrandCpp, TbBrandDjango} from 'react-icons/tb';
import { FaHtml5,FaReact,FaFigma, FaNodeJs, FaJs, FaJava, FaPython, FaDocker, FaGithub, FaJenkins } from 'react-icons/fa';
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
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "yadneyajoshi3@gmail.com"
    },
    {
      fieldName: "Name",
      fieldValue: "Yadneya Joshi"
    },

  ]
};
// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",

items: [
  {company: "PTC Software Pune",
    position: "Software Engineering Intern",
    duration: "July 2022 - July 2023",    
  },
  {company: "Eduskills foundation",
    position: "AWS Virtual Cloud Internship",
    duration: "Feb 2022 - May 20223",    
  },
  {company: "Elite Techno Groups",
    position: "Python For ML/AI Internship",
    duration: "Aug 2022 – Sept 2022",    
  },

]
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
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume