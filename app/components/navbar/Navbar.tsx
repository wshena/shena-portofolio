import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between px-5 py-5 md:px-6 lg:px-5 xl:px-0 md:py-8 border-b z-20">
      <Link href={'/'}>
        <Image src={'/logo.png'} width={50} height={50} alt='Logo' />
      </Link>
      <div className="hidden md:flex flex-col items-center">
        <h1 className='font-bold text-xl'>Wisnu Shena Arrafi</h1>
        <h3 className='text-sm text-gray-400 uppercase tracking-[0.25em]'>Junior Frontend Developer</h3>
      </div>
      <HamburgerMenu />
    </nav>
  )
}

export default Navbar