import React from 'react'
import Image from 'next/image'

type Buttonprops = {
    label: string,
    img?: string,
    varitent?: string,
    color : string,
    type : 'button' | 'submit'
}

const Button = ({label,img,varitent,color,type}:Buttonprops) => {
  return (
    <div className=''>
    <button  type={type}
     className={` px-4 py-2   rounded-md   flex gap-2         ${ varitent } ${color} `}>
        {
            img && <Image  src={img} alt={label} width={25} height={25} />
            
        } 
        {label}
    </button>
 </div>
  )
}

export default Button