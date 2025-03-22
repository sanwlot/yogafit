import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SlideSections from '@/components/SlideSections'
import YogaClasses from '@/components/YogaClasses'
import { rajdhani } from './layout'

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <h1
          className={`${rajdhani.className} max-w-[800px] mx-auto text-center text-5xl xl:text-6xl font-bold mb-20`}
        >
          The Transformative Powers of Yoga and Meditation
        </h1>
        <Hero />
        <About />
        <YogaClasses />
        <SlideSections />
      </main>

      <Footer />
    </div>
  )
}
