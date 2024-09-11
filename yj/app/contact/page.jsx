"use client";

import React from 'react'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import  { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 657 253 8036",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "yadneyajoshi3@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "1225 Deerpark Dr Apt 120, Fullerton CA 92831, United States",
  },
];

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.4, ease: "easeIn"}}} className='py-6'>

      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
        <div className='xl:w-[54%] order-2 xl:order-none'>
        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' method='POST' action="https://formspree.io/f/xyzgaylj">
          <h3 className='text-4xl text-accent'>Let's work together</h3>
          <p className='text-white/60'>
            If you wish to hire or collaborate with me, feel free to feel the form.
          </p>
          {/* input */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Input name="firstname" type="firstname" placeholder = "Firstname"/>
          <Input name="lastname" type="lastname" placeholder = "Lastname"/>
          <Input name= "email" type="email" placeholder = "Email address"/>
          <Input name="phone" type="phone" placeholder = "Phone number"/>
          </div>
          {/* select */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>
                  Select a service
                </SelectLabel>
                <SelectItem value="est">Full time job</SelectItem>
                <SelectItem value="cst">Web Development</SelectItem>
                <SelectItem value="mst">AI/ML Project</SelectItem>
                <SelectItem value="gst">Blockchain Project</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* text area */}
          <Textarea
            className="h-[200px]"
            placeholder="Type your message here."
          />
          {/* Btn */}
          <Button size="md" className="max-w-40" type="submit">
            Send message
          </Button>
        </form>
        </div>
        {/* info */}
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {
              info.map((item, index)=>{
                return <li key={index} className='flex items-center gap-6'>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h=[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"> 
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact