// import Image from 'next/image'
import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SlideSections from '@/components/SlideSections'
import YogaClasses from '@/components/YogaClasses'

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <h1 className="text-center text-6xl font-bold mb-20">
          The Transformative Powers <br /> of Yoga and Meditation
        </h1>
        <Hero />
        <About />
        <YogaClasses />
        <SlideSections />
      </main>

      <footer>{/* <h1>Footer</h1> */}</footer>
    </div>
  )
}
