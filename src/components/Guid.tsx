'use client'
import React,{useState} from 'react'

const Guid = () => {
  const [slide,setslide] = useState(false);

  const toggleSwitch =()=>{
    console.log('run');
    setslide(!slide);
    console.log(slide)
  }

  return (
    <>
    <div className='  w-[95%] h-[50vh] md:h-[80vh] flex flex-row m-auto    gap-4 relative '>
      <div className={`   ${slide == true ? 'w-[10%]' : 'w-[90%]' }  bg rounded-4xl   flex items-center  justify-end transition-all duration-500 ease-linear `} >


      <div className='  mt-4 text-white   w-[80%]  float-right   backdrop-blur-md p-4 rounded-4xl ' >
            <h1 className='text-4xl text-white font-bold  m-auto text-center '>Guid</h1>
            {
              slide == false ?
              <p className='text-white'>
                Slide is on, click to toggle off.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis
                tristique ex, at cursus lectus convallis nec. Quisque vel neque
                ac justo facilisis finibus. Sed bibendum dolor 
              </p>
              :
              null
            }
        </div>

      <div className=' bg-white   w-16 h-16 -mr-9  rounded-full  flex z-50 items-center justify-center shadow-2xl'  onClick={()=>toggleSwitch()}  >
      <button className={`text-3xl  ${slide == true ? 'rotate-0' :  'rotate-180' }  transition-all duration-700 `}  >
      ➜
      </button>
        </div>



      </div>
      <div className={`  bg ${slide == true ? 'w-[90%]' : 'w-[10%]' }  bg-red-700  transition-all duration-500 ease-linear rounded-4xl flex  items-center justify-center `}  >
      <div className='  mt-4 text-white   w-[70%]  float-right   backdrop-blur-md p-4 rounded-4xl  ' >
            <h1 className='text-4xl text-white font-bold  m-auto text-center   '>Guid</h1>
            {
              slide == true ?
              <p className='text-white'>
                Slide is on, click to toggle off.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis
                tristique ex, at cursus lectus convallis nec. Quisque vel neque
                ac justo facilisis finibus. Sed bibendum
              </p>
              :
              null
            }
        </div>
      </div>
    </div>
    </>
  )
}

export default Guid