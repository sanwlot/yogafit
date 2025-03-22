'use client'

import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SlideSections from '@/components/SlideSections'
import YogaClasses from '@/components/YogaClasses'
import { Rajdhani } from 'next/font/google'
import { motion } from 'framer-motion'

const rajdhani = Rajdhani({
  weight: ['400', '700', '600'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <motion.h1
          initial={{ opacity: 0, y: 180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`${rajdhani.className} max-w-[800px] mx-auto text-center text-5xl xl:text-6xl font-bold mb-20`}
        >
          The Transformative Powers of Yoga and Meditation
        </motion.h1>
        <Hero />
        <About />
        <YogaClasses />
        <SlideSections />
      </main>

      <Footer />
    </div>
  )
}
