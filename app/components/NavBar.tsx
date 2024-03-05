"use client"
import Image from "next/image";
import Link from "next/link";
import Navigation from "./mobileNav/Navigation";
import { useState } from "react";


const NavBar = () => {

  const [showMobile, setShowMobile] = useState(false)

  const handleShowMobile = () => {
    setShowMobile(prev => !prev)
  }
  return (
    <>
      <header className='w-full h-25 bg-white shadow-nav top-0 fixed z-50'>
        <nav className="lg:mx-37 mx-3 flex items-center h-full justify-between">
          <div className="flex items-center gap-x-2">
            <Link href={'/'} className="block">
              <Image
                src="/assets/logo.svg"
                alt="Vercel Logo"
                width={64}
                height={64}
                priority
              />
            </Link>
            <Link href={'/'} className="block lg:hidden">
              <Image
                src="/assets/mobile-logo.svg"
                alt="Vercel Logo"
                width={170}
                height={80}
                priority
              />
            </Link>
          </div>
          <button onClick={handleShowMobile} className="flex lg:hidden">
            <img src="/assets/menu.svg" alt="" />
          </button>
          <ul className="text-pryBlack hidden lg:flex gap-x-13">
            <li>
              <Link href={'#'} className="text-base font-medium">Punchlines</Link>
            </li>
            <li>
              <Link href={'#'} className="text-base font-medium">FAQs</Link>
            </li>
            <li>
              <Link href={'#'} className="text-base font-medium">Contact Us</Link>
            </li>
          </ul>
          <button className="bg-main hidden lg:block w-40 h-12 rounded-lg text-white text-[14px] font-bold">
            OPEN APP
          </button>
        </nav>
      </header>
      {showMobile && <Navigation closeMobile={handleShowMobile} />}
    </>
  );
}

export default NavBar;
