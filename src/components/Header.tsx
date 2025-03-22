'use client'

import Image from 'next/image'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowDown } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { Rajdhani } from 'next/font/google'
const rajdhani = Rajdhani({
  weight: ['400', '700', '600'],
  subsets: ['latin'],
})

export default function Header() {
  const [showPagesNav, setShowPagesNav] = useState(false)
  const [showBlogNav, setShowBlogNav] = useState(false)
  const [showNav, setShowNav] = useState(false)
  return (
    <header className={rajdhani.className + 'text-xl font-semibold'}>
      {/* mobile */}
      <section className="xl:hidden flex items-center justify-between pt-5 px-5 mb-20">
        <div className="p-2">
          <Image src="/images/logo.png" width={60} height={60} alt="logo" />
        </div>
        <div onClick={() => setShowNav(!showNav)}>
          <GiHamburgerMenu className="text-3xl text-[#18CBE4] cursor-pointer" />
        </div>

        {/* NAV */}
        {showNav && (
          <div className="fixed left-0 top-0 h-screen w-[320px] bg-white z-999 shadow-2xl">
            <div className="flex justify-between items-center p-5">
              <div className="">
                <Image
                  src="/images/logo.png"
                  width={70}
                  height={70}
                  alt="logo"
                />
              </div>
              <div onClick={() => setShowNav(false)}>
                <IoClose className="text-3xl text-[#18CBE4] cursor-pointer" />
              </div>
            </div>

            <ul className="flex flex-col justify-start items-start gap-7 p-7 text-xl">
              <li>
                <a href="#" className="text-[#18CBE4] font-bold">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#18CBE4] transition-all duration-500"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#18CBE4] transition-all duration-500"
                  href="#"
                >
                  Classes
                </a>
              </li>

              <li className="relative">
                <span
                  onClick={() => {
                    setShowPagesNav(!showPagesNav)
                    setShowBlogNav(false)
                  }}
                  className="flex items-center gap-1 hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                >
                  <span className={`${showPagesNav && 'text-[#18CBE4]'}`}>
                    Pages
                  </span>
                  <IoIosArrowDown />
                </span>
                {showPagesNav && (
                  <ul className="flex flex-col gap-5 w-[200px] p-5 bg-white">
                    <li>
                      <a
                        href="#"
                        className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                      >
                        404 Page
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <span
                  onClick={() => {
                    setShowBlogNav(!showBlogNav)
                    setShowPagesNav(false)
                  }}
                  className="flex items-center gap-1 hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                >
                  <span className={`${showBlogNav && 'text-[#18CBE4]'}`}>
                    Blog
                  </span>{' '}
                  <IoIosArrowDown />
                </span>
                {showBlogNav && (
                  <ul className="flex flex-col gap-5 w-[200px] p-5 bg-white">
                    <li>
                      <a
                        href="#"
                        className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                      >
                        Single Post
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  className="hover:text-[#18CBE4] transition-all duration-500"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* desktop nav */}
      <ul className="hidden xl:flex justify-center items-center gap-14 p-10">
        <li>
          <a href="#" className="text-[#18CBE4] font-bold">
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#18CBE4] transition-all duration-500"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#18CBE4] transition-all duration-500"
            href="#"
          >
            Classes
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#18CBE4] transition-all duration-500"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="text-center">
          <Image
            className="mx-10"
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={40}
          />
        </li>
        <li className="relative">
          <span
            onMouseEnter={() => {
              setShowPagesNav(true)
              setShowBlogNav(false)
            }}
            className="flex items-center gap-1 hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
          >
            <span className={`${showPagesNav && 'text-[#18CBE4]'}`}>Pages</span>
            <IoIosArrowDown />
          </span>
          {showPagesNav && (
            <ul
              onMouseLeave={() => setShowPagesNav(false)}
              className="flex flex-col gap-5 shadow-2xl shadow-black w-[200px] p-5 absolute top-15 z-100 bg-white rounded-tr-3xl rounded-bl-3xl"
            >
              <li>
                <a
                  href="#"
                  className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                >
                  404 Page
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="relative">
          <span
            onMouseEnter={() => {
              setShowBlogNav(true)
              setShowPagesNav(false)
            }}
            className="flex items-center gap-1 hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
          >
            <span>Blog</span> <IoIosArrowDown />
            {showBlogNav && (
              <ul
                onMouseLeave={() => setShowBlogNav(false)}
                className="flex flex-col gap-5 shadow-2xl shadow-black w-[200px] p-5 absolute top-15 z-100 bg-white rounded-tr-3xl rounded-bl-3xl"
              >
                <li>
                  <a
                    href="#"
                    className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                  >
                    Single Post
                  </a>
                </li>
              </ul>
            )}
          </span>
        </li>
        <li>
          <a
            className="hover:text-[#18CBE4] transition-all duration-500"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  )
}
