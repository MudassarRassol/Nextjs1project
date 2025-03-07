import React from "react";
import Image from "next/image";
import Button from "./Button";
const Hero = () => {
  return (
    <section className=" w-full   flex flex-col lg:flex-row justify-between  items-center gap-0 md:gap-6  ">
      <div className=" p-10 w-full lg:w-[40%] " >
        <Image src={"/camp.svg"} alt="camp" width={40} height={40} />
         <h1 className="text-4xl md:text-5xl font-bold ">Welcome </h1>
         <h1 className="text-4xl md:text-5xl font-bold mt-2 ">To HighLink </h1>
         <p className="text-md mt-3 ">
          HighLink is a leading global technology company, dedicated to providing innovative solutions for home entertainment and connectivity. Our mission is to create a seamless and intuitive experience for consumers, making home entertainment a joyful and enjoyable experience for everyone.
         </p>
         <div className="flex flex-col md:flex-row  mt-4 " >
          <div className="flex  " >
          {
          ['1','2','3','4','5'].map((i)=>{
             return  (
              <Image
              key={i}
              src='/star.svg'
              alt='star'
              width={30}
              height={30}
              />
             )
            
          })
         }
          </div>
         <span className=" flex gap-2 ml-2 " >
         198k
        <span className=" underline underline-offset-2" >
        Good Reviews  
        </span> 
         </span>
         </div>
         <div className=" flex flex-col md:flex-row mt-6 gap-6 " >
         <Button 
          label={"Discover More" }
          varitent={"bg-green-500"}
          color={"text-white"}
          type="submit"
         />
          <Button 
          label={"How Its Wok" }
          varitent={"bg-white"}
          color={"text-black"}
          type="submit"
          img={"/play.svg"}
         />
         </div>
      </div>
      <div className=" w-full md:w-[100%]  relative" >
        <Image src={"/hero.png"} alt="camp" 
        height={600}
        width={900}
        />
        <div className=" bg-black absolute top-0  md:top-32 p-3 rounded-3xl left-4  md:left-3 w-[200px] md:w-[250px]  " >
          <div>
          <h1 className="  text-gray-500" >Location</h1>
          <p className=" text-md  text-white " >New York City</p>
          </div>
          <div className=" flex justify-between " >
          <div>
            <h1 className="  text-gray-500 " >Distance</h1>
            <p className=" text-md  text-white " >172.2 miles</p>
          </div>
          <div>
            <h1 className="  text-gray-500" >Elevation</h1>
            <p className=" text-md  text-white " >2.040 Km</p>
          </div>
          </div>
  
        </div>
      </div>
    </section>
  );
};

export default Hero;
