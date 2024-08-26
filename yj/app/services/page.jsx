"use client";

import { BsArraowDownRight } from "react-icons/bs";
import Link from "next/link";
import React from 'react';
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "I create dynamic, responsive websites using React, Next.js, Node.js, and Django. I'm also flexible to switch stacks according to project requirements, ensuring the best possible solution for your needs.",
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
    href:""
  }
]
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto"> 
        <motion.div initial={{opacity:0}} animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease:'easeIn'} }}>
          {
            services.map((service, index) =>{
              return <div key={index}>
                <div>
                  <div>{service.num}</div>
                  <Link href={service.href}>
                    <BsArraowDownRight />
                  </Link>
                </div>
              </div>
            })
          }

        </motion.div>
      </div>
    </section>
  )
}

export default Services