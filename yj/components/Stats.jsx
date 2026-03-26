"use client";
import React from 'react'
import CountUp from 'react-countup';

const stats = [
    {
        num: 1,
        text: "Years of experience", 
    },
    {
        num: 10,
        text: "Projects completed", 
    },
    {
        num: 10 ,
        text: "Technologies mastered", 
    },
    {
        num: 350,
        text: "Code commits", 
    },
    {
        num: 125,
        text: "Problems solved"
    }

]
const Stats = () => {
  return (
    <section className='pt-6 pb-12 xl:pt-4 xl:pb-0'>
        <div className="container mx-auto">
            <div className='flex gap-4 xl:gap-0 flex-wrap max-w-[80vw] mx-auto xl:max-w-none'>
            {stats.map((item, index)=>{
                return (
                  <div key={index} className={`flex-1 flex gap-4 items-center justify-center xl:justify-start xl:px-6 ${index !== 0 ? "xl:border-l xl:border-white/10" : ""}`}>
                    <div className='flex items-end gap-1'>
                      <CountUp end={item.num} duration={8} delay={2} className='text-3xl xl:text-5xl font-extrabold text-white' />
                      {index !== 0 && <span className='text-3xl xl:text-5xl font-extrabold text-accent leading-none pb-0.5'>+</span>}
                    </div>
                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/60 text-sm xl:text-base`}>{item.text}</p>
                  </div>
                )
            })}
            </div>
        </div>
    </section>
  )
}

export default Stats