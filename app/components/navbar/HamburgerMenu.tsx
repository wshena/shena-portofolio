'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { sideNavLinks } from '@/app/const';

const SideNavLink = ({label, link}:{label:string, link:string}) => {
  return (
    <Link href={link} className='text-lg pb-3 lg:pb-0 md:text-3xl font-bold text-gray-400 hover:text-black transition-all translate-x-0 hover:translate-x-3 duration-300 border-b lg:border-b-0'>{label}</Link>
  )
}

const HamburgerMenu = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  }

  useEffect(() => {
    handleClick()
  }, [])

  return (
    <>
      <button onClick={handleClick} className="relative"> <IoMenu size={30}/> </button>
      
      {/* Desktop */}
      <div className={`hidden lg:block fixed top-0 h-[100vh] bg-white z-50 border w-[30%] p-10 transition-all duration-700 ${isClick ? '-right-[1000px]' : 'right-0'}`}>
        <button onClick={handleClick}> <RxCross2 size={30}/> </button>
        <div className="flex flex-col gap-[30px] mt-[30px]">
          {
            sideNavLinks.map((item, idx) => {
              return (
                <SideNavLink label={item.label} link={item.to} key={idx}/>
              )
            })
          }
        </div>
      </div>
      {/* Desktop */}

      {/* Mobile */}
      <div className={`absolute block lg:hidden left-0 w-[100vw] h-[100vh] bg-white z-10 p-[20px] transition-all duration-700 ${isClick ? '-top-[1000px]' : 'top-[71px] md:top-[113px]'}`}>
        <div className="flex flex-col gap-[20px]">
          {
            sideNavLinks.map((item, idx) => {
              return (
                <SideNavLink label={item.label} link={item.to} key={idx}/>
              )
            })
          }
        </div>
      </div>
      {/* Mobile */}
    </>
  )
}

export default HamburgerMenu