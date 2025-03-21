import React from 'react'

interface FancyBtnProps {
  href: string
  children: React.ReactNode
}

export default function FancyBtn({ href, children }: FancyBtnProps) {
  return (
    <a
      href={href}
      className="bg-[#18CBE4] text-white py-3 px-5 rounded-tl-xl rounded-br-xl"
    >
      {children}
    </a>
  )
}
