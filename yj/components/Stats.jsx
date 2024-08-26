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
        num: 20 ,
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
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className="container mx-auto">
            <div className='flex gap-6 flex-wrap max-w-[80vw] mx-auto xl:max-w-none '>
            {stats.map((item, index)=>{
                return <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                    <CountUp end={item.num} duration={10} delay={2} className='text-3xl xl:text-4xl font-extrabold' /> <p className='text-4xl xl:text-6xl font-extrabold'>{index === 0 ? "": "+"}</p>
                <p className={`${item.text.length <15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                </div>
                
            })}
            </div>
            
        </div>
    </section>
  )
}

export default Stats