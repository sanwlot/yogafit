import React from 'react'

export default function FancyBtn({ href, children }) {
  return (
    <a
      href={href}
      className="bg-[#18CBE4] text-white py-3 px-5 rounded-tl-xl rounded-br-xl"
    >
      {children}
    </a>
  )
}
