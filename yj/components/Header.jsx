import React from 'react';
import Link from "next/link";
import { Button } from "./ui/button"; 

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-50/20'>
        <div className="container mx-auto ">
            {/*    Logo    */}
            <Link>
            <h1>
                Yadneya <span>.</span>
            </h1>
            </Link>
        </div>
    </header>
  )
}

export default Header