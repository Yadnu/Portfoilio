"use client";
import { AnimatePresence, delay, motion } from "framer-motion";
import React from 'react'
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
        <div ey = {pathName}>
          <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" initial={{opacity: 1}} animate={{opacity: 0, transition: {delay:1, duration: 0.4, ease: 'easeInOut' }}} 
           />
        {children}
      
        </div>
    </AnimatePresence>
  )
}

export default PageTransition;