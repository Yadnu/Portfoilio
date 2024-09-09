"use client"
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { motion } from 'framer-motion';
import "swiper/css";
import {BsArrowUpRight,BsGithub} from 'react-icons/bs';
import { Tooltip,
         TooltipContent,
         TooltipContento,
         TooltipProvider,
         TooltipTrigger
 } from '@radix-ui/react-tooltip';
 import Image from 'next/image';
 import Link from 'next/link';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "Web3 Wallet",
    title: "Walleto",
    descrption:`Developed a web3 based wallet using NextJS
    Implemented HD wallet using bip39.
    Wallet supports Ethereum and Solana
    `,
    stack: [{name:"NextJS"},{name:"TypeScript"}, {name:"web3.js"}, {name:"ShadCN"}],
    image: "/assets/work/walleto.png",
    live: "https://wallet-ten-self.vercel.app/",
    github: "https://github.com/Yadnu/wallet/tree/master",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "CarePulse",
    descrption:`Developed a user-friendly SaaS health portal to efficiently manage hospital services, ensuring a secure and seamless user experience.
Monitored application performance and security using Sentry, ensuring timely detection and resolution of issues.
● Implemented a high-performance backend using Appwrite (Backend as a Service), achieving a 20% faster response time 
compared to single-threaded Node.js applications.
● Streamlined key healthcare processes, including patient registration, appointment scheduling, and medical records 
management, improving operational efficiency.
● Architected an SMS alert notification system to enhance patient communication and ensure timely updates.`,
    stack: [{name:"NextJS"},{name:"TypeScript"}, {name:"AppWrite"}, {name:"Sentry"}],
    image: "/assets/work/thum2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
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
    image: "/assets/work/thum2.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "AI / ML",
    title: "Movie Recommendation",
    descrption:`● Orchestrated the optimization of the movie recommendation system, leveraging AI and machine learning techniques, 
leading to a 35% increase in user interaction and a 12% rise in revenue from movie rentals.
● Incorporated SKlearn library for machine learning and Tkinter for the user interface. The System uses a model-based approach`,
    stack: [{name: "Python"},{name: "Tkinter"},{name: "SkLearn"}],
    image: "/assets/work/thum3.png",
    live: "",
    github: "",
  },
]
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) =>{
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on urrent slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.4, ease: "easeIn"}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'> 
        <div className="container mx-auto">
          <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
            <div className='w-full xl:w-[50%] xl:justify-between order-2 xl:order-none '>
              <div className='flex flex-col gap-[30px] h-[50%]'>
                {/* outline */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline"> {project.num}</div>
                {/* project category */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                {/* project description */}
                <p className="text-white/60"> {project.descrption}</p>
                {/* stack */}
                <ul className='flex gap-4'>
                  {project.stack.map((item, index)=>{
                    return <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                      </li>;
                  })

                  }
                </ul>
                {/* border */}
                <div className='border border-white/20'></div>
                {/* buttons */}
                <div className='flex items-center gap-4'>
                  {/* Live project button */}
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
                   {/* gitHub project button */}
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
                </div>
              </div>
            </div>
            <div className='w-full xl:w-[50%] '>
              <Swiper 
                spaceBetween={30}
                slidesPerView={1}
                className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange}
                
              >
                  {
                    projects.map((project, index) =>{
                      return <SwiperSlide key={index} className='w-full'>
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}

                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                        {/* image */}
                        <div className='relative w-full h-full'>
                          <Image
                            src={project.image}
                            fill
                            className='object-cover'
                            alt=''
                          />
                        </div>
                        </div>
                      </SwiperSlide>
                    })
                  }
                  {/* slider buttons */}
                  <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                 
              </Swiper>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default Work