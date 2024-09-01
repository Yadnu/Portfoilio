import Link from "next/link";
import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaInstagram, FaTwitter} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/Yadnu'},
    {icon: <FaLinkedin/>, path: 'https://www.linkedin.com/in/yadneya-joshi-920299198/'},
    {icon: <FaMedium/>, path: 'https://medium.com/@yadneyajoshi3'},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/yadneya_joshi_/'},
    {icon: <FaTwitter/>, path: 'https://x.com/tecob207'},

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