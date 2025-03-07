"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '../../constansts'
import Button from './Button'
import './HN.css'
import Menu from './Menu'
const Navber = () => {
    const [menu,setmenu] = useState(false)

    const toggleMenu = () => {
        setmenu(!menu)
    }
  return (
    <nav 
    className='  shadow-xl    z-30 py-4  px-4 flex items-center justify-between '
    >
    <Link href="/"   >
     <Image 
     src="/hilink-logo.svg" alt='logo' width={75} height={29}
     />
    </Link>
    <ul className='hidden  gap-4 md:flex md:justify-center md:items-center' >
       {
        NAV_LINKS.map((link) =>{
            return (
                <Link href={link.href} key={link.key} className='ho' >
                {link.label}
                </Link>
            )
        })
       }
       <Button  type={'button'} label={'Login'} img={'/user.svg'} 
       varitent={'bg-black'} color={'text-white'} />
     </ul>

     <Image 
     alt='menu'
     className=' md:hidden '
     src={'/menu.svg'}
     width={20}
     height={20}
     onClick={toggleMenu}
     />
      {menu && <Menu toggleMenu={toggleMenu} />} {/* Conditional rendering */}
    </nav>
  )
}

export default Navber