import type { Metadata } from 'next'
import { Mulish, Rajdhani } from 'next/font/google'
import './globals.css'

export const rajdhani = Rajdhani({
  weight: ['400', '700', '600'],
  subsets: ['latin'],
})

const mulish = Mulish({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yogafit',
  description: 'Developed by Ajay',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased`}>{children}</body>
    </html>
  )
}
