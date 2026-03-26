import React from 'react';
import Link from "next/link";

import { Button } from "./ui/button"; 
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='sticky top-0 z-30 py-5 xl:py-8 text-white bg-primary/80 backdrop-blur-md border-b border-white/[0.06]'>
        <div className="container mx-auto flex justify-between items-center">
            {/*    Logo    */}
            <Link href="/">
            <h1 className='text-4xl font-semibold'>
            Yadneya<span className='text-accent'>.</span>
            </h1>
            
               
            </Link>
            {/* Desktop Nav  & hire me button*/}
            <div className="hidden xl:flex items-center gap-8"><Nav/>
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>
             {/* mobile nav */}
             <div className="xl:hidden"> <MobileNav/></div>
        </div>
    </header>
  )
}

export default Header