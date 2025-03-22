import React from 'react'

interface FancyBtnProps {
  href: string
  children: React.ReactNode
}

export default function FancyBtn({ href, children }: FancyBtnProps) {
  return (
    <a
      href={href}
      className="bg-[#18CBE4] text-white py-3 px-5 rounded-tl-xl rounded-br-xl transition-all duration-500 ease-in-out hover:shadow-2xl hover:bg-teal-800"
    >
      <span className="transition-all duration-500 ease-in-out hover:scale-110">
        {' '}
        {children}
      </span>
    </a>
  )
}
