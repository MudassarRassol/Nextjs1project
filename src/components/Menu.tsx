import React from 'react'
import { NAV_LINKS } from '../../constansts'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
const Menu = ({toggleMenu} : {toggleMenu : ()=>void}) => {
  return (
    <>
    <div className=' absolute w-full left-0  h-screen top-0  bg-white  ' >
    <div className=' flex  justify-between  items-center mt-4  px-4 ' >
    <Image
     src={'/hilink-logo.svg'}
     width={80}
     height={80}
     alt='logo'
     />
     <Image
          src={'/close.svg'}
          width={30}
          height={30}
          alt='logo'
          className=' bg-black  rounded-3xl '
          onClick={toggleMenu}
     />
    </div>
    <ul className=' gap-4 flex flex-col px-4 mt-5 ' >
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
    </div>
    </>
  )
}

export default Menu