"use client";

import Link from "next/link";
import React from 'react';
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "I create dynamic, responsive websites using React, Next.js, Node.js, and Django. I'm also flexible to switch stacks according to project requirements, ensuring the best possible solution for your needs.                                                                         ",
    href: "/"
  },
  {
    num: '02',
    title: 'AI/ML',
    description: "I develop intelligent solutions and predictive models using technologies like TensorFlow, and scikit-learn. Whether it's data analysis, machine learning, or deploying AI-driven applications, I tailor my approach to meet your specific project requirements",
    href:"/"
  },
  {
    num: '03',
    title: 'Blockchain',
    description: "I'm new to blockchain technology but actively learning to build secure, decentralized applications using this innovative technology.",
    href:"/"
  }
]
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      
      <div className="container mx-auto"> 
        <motion.div initial={{opacity:0}} animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease:'easeIn'} }} 
        className="grid grid-cols-1 md:grid-cols-2 gap-[50px]"
        >
          {
            services.map((service, index) =>{
              return <div key={index} className="flex-1 flex flex-col justify-center gap-5 group p-6 rounded-2xl border border-white/[0.06] hover:border-accent/30 bg-[#232329]/40 hover:bg-[#232329]/70 transition-all duration-500">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[56px] h-[56px] rounded-full bg-white/10 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 border border-white/10 group-hover:border-accent">
                    <div className="text-white group-hover:text-primary text-2xl transition-colors duration-500">↗</div>
                  </Link>
                </div>
                {/* title */}
                  <h2 className="text-[32px] xl:text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  {/* description */}
                  <p className="text-white/60 text-sm leading-relaxed">{service.description.trim()}</p>
                  {/* border */}
                  <div className="border-b border-white/10 w-full mt-1"></div>
                
              </div>
            })
          }

        </motion.div>
      </div>
    </section>
  )
}

export default Services