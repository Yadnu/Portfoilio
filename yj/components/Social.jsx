import Link from "next/link";
import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaInstagram, FaTwitter} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub/>, path: ''},
    {icon: <FaLinkedin/>, path: ''},
    {icon: <FaMedium/>, path: ''},
    {icon: <FaInstagram/>, path: ''},
    {icon: <FaTwitter/>, path: ''},

]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className=" flex gap-5 containerStyles">
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social