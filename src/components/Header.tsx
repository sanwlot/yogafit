'use client'

import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function Header() {
  const [showPagesNav, setShowPagesNav] = useState(false)
  const [showBlogNav, setShowBlogNav] = useState(false)
  return (
    <header>
      <ul className="flex justify-center items-center gap-14 p-10">
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
            <span className={`${showPagesNav && 'text-[#18CBE4] font-bold'}`}>
              Pages
            </span>
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
