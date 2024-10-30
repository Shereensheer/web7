'use client'
import React from 'react'

function Hero() {
  return (
    <div>
        <section className="text-white-600 body-font h-screen  bg-cover " style={{ backgroundImage: "url('/red.jpeg')" }}  >
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font font-bold sm:text-6xl text-3xl mb-4  text-white">
    
        Experience  The Best Beauty Services
  </h1>     
        <br className=" text-white  text-sm " />
      
    
    <div className="flex justify-center">
        <a href='/component/contact'>
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
          Appointment
        </button></a>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero