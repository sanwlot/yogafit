// import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="px-4">
        <h1 className="text-center text-6xl font-bold mb-20">
          The Transformative Powers <br /> of Yoga and Meditation
        </h1>
        <Hero />
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}
