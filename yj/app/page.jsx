import React from 'react'
import { FiDownload } from "react-icons/fi";

//Components
import Social from '@/components/Social';
import { Button } from "@/components/ui/button";
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Link from "next/link";
const Home = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-sm xl:text-base tracking-[4px] uppercase text-accent/80 font-medium'>Software Developer</span>
            <h1 className='h1 mt-2 mb-6'>
              Hello I&apos;m <br />
              <span className='text-accent' style={{textShadow: '0 0 40px rgba(0,255,153,0.35)'}}>Yadneya Joshi</span>
            </h1>
            <p className='max-w-[480px] mb-9 text-white/60 leading-relaxed'>
              I craft elegant digital experiences — from full-stack web apps and AI/ML systems to Web3 applications.
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-6'>
              <Link href="/assets/YadneyaResume.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 hover:accent-glow-sm transition-all duration-300">
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </Link>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-10 h-10 border border-accent/40 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home