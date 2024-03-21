import React from 'react'
import { IoMdSend } from "react-icons/io";

const page = () => {
  return (
    <section className='container py-[30px] lg:py-0 xl:px-[70px] flex items-center lg:items-start lg:justify-between lg:gap-[20px] xl:gap-0'>
      <div className="h-[100vh] w-[100vw] lg:w-[50%] lg:flex items-center lg:justify-between">
        <div className="flex flex-col gap-[40px]">
          <h1 className='text-3xl lg:text-4xl uppercase font-bold tracking-widest'>Contact Me</h1>
          <form action="" className='flex flex-col gap-[40px]'>
            <div className="flex flex-col md:flex-row items-center gap-[20px]">
              <input type="text" name="name" id="name" placeholder='NAME' autoComplete='off' className='focus:outline-none pb-[10px] border-b w-[100%]'/>
              <input type="email" name="email" id="email" placeholder='YOUR EMAIL' autoComplete='off' className='focus:outline-none pb-[10px] border-b w-[100%]' />
            </div>
            <input type="text" name="subject" id="subject" placeholder='SUBJECT' autoComplete='off' className='focus:outline-none pb-[10px] border-b' />
            <input type="text" name="project" id="project" placeholder='PROJECT' autoComplete='off' className='focus:outline-none pb-[10px] border-b'/>

            <button className='py-[10px] px-[20px] gap-[15px] inline-flex w-fit items-center text-white bg-orange-500 hover:scale-[.9] transition-transform duration-300'>
              <IoMdSend />
              <span className='uppercase tracking-widest'>SEND EMAIL</span>
            </button>
          </form>
        </div>
      </div>

      <div className="hidden lg:block h-[100vh] w-[50%] bg-cover bg-center" style={{
        backgroundImage: `url('/wave.jpg')`
      }}></div>
    </section>
  )
}

export default page