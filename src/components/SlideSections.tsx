import Image from 'next/image'
import { FaFacebookSquare, FaInstagram, FaPlay } from 'react-icons/fa'
import FancyBtn from './FancyBtn'
import Divider from './Divider'
import { Rajdhani } from 'next/font/google'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const rajdhani = Rajdhani({
  weight: ['400', '700', '600'],
  subsets: ['latin'],
})

export default function SlideSections() {
  return (
    <div className="bg-cyan-50">
      <section className="xl:sticky left-0 top-0 p-10 flex justify-center flex-wrap xl:flex-nowrap items-center gap-2">
        <div className="flex flex-col gap-5 p-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }} // Starts deep below
            whileInView={{ opacity: 1, y: 0 }} // Animates when in view
            viewport={{ once: true }} // Ensures animation happens only once
            transition={{ duration: 0.7, ease: 'easeOut' }} // Smooth transition
            className={`${rajdhani.className} text-5xl font-bold text-[#003342]`}
          >
            Trusted by Thousands Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 300 }} // Starts deep below
            whileInView={{ opacity: 1, y: 0 }} // Animates when in view
            viewport={{ once: true }} // Ensures animation happens only once
            transition={{ duration: 1, ease: 'easeOut' }} // Smooth transition
            className="max-w-[420px]"
          >
            Donec pede justo fringilla vel aliquet. nec vulputate eget arcu In
            enim justo.
          </motion.p>
          <div className="flex flex-wrap gap-5">
            <div className="flex">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/front-view-looking-at-camera-young-woman-farmer-in-a-garden-with-trees-stands-smiling-brunette--e1681372418107-768x768.jpg"
                  width={60}
                  height={60}
                  alt="user"
                  className="rounded-full -ml-2 ring-4 ring-cyan-50"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Image
                  src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/mid-adult-man-in-office-arms-folded-looking-at-camera-smiling-e1681372704313-768x768.jpg"
                  width={60}
                  height={60}
                  alt="user"
                  className="rounded-full -ml-2 ring-4 ring-cyan-50"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              >
                <Image
                  src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/young-happy-woman-at-refrigerated-section-of-supermarket-looking-at-camera--e1681373784115.jpg"
                  width={60}
                  height={60}
                  alt="user"
                  className="rounded-full -ml-2 ring-4 ring-cyan-50"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeOut' }}
              >
                <Image
                  src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/outdoor-portrait-of-african-american-man-with-crossed-arms-looking-at-camera-e1681376874850.jpg"
                  width={60}
                  height={60}
                  alt="user"
                  className="rounded-full -ml-2 ring-4 ring-cyan-50"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="text-3xl">
                <span>5k</span>
                <span className="font-bold text-[#18CBE4]">+</span>
              </p>
              <span className="text-[#333]">Happy Clients</span>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center content-center gap-8">
          <ReviewCard
            review="I suffered from chronic back pain, but after practicing yoga regularly, I've noticed a significant decrease in discomfort."
            name="Alex Peterson"
            occupation="Web Developer"
            src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/mid-adult-man-in-office-arms-folded-looking-at-camera-smiling-e1681372704313-150x150.jpg"
          />
          <ReviewCard
            review="Yoga has become a form of self-expression for me, allowing me to move my body in ways that feel natural and freeing."
            name="Paul Goodman"
            occupation="Web Designer"
            src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/portrait-of-male-athlete-listening-music-on-headphones-in-the-rain-and-looking-at-camera--e1681376029830-150x150.jpg"
          />
          <ReviewCard
            review="Yoga has helped me become more mindful and present in my daily life, leading to increased happiness and fulfillment. I highly recommand it."
            name="Sylvia Santos"
            occupation="Teacher"
            src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/head-shot-portrait-of-a-young-blonde-woman-looking-at-the-camera-e1681376724284-150x150.jpg"
          />
          <ReviewCard
            review="I used to have trouble sleeping, but after incorporating yoga into my nightly routine, I fall asleep faster and sleep more soundly."
            name="Madi Lords"
            occupation="Chef"
            src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/charming-asian-woman-with-a-smile-standing-holding-tablet-and-confidently-looking-at-the-camera-in-e1681376439660-150x150.jpg"
          />
        </div>
      </section>

      <section className="bg-white xl:sticky left-0 top-0 z-10 pt-1">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`${rajdhani.className} text-[#003342] text-center text-5xl font-bold my-20`}
        >
          Our Yoga Instructors
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-30 p-10">
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="group relative w-[300px] text-center"
          >
            <Image
              src="/images/logo-big.png"
              width={300}
              height={300}
              alt="logo"
              className="mb-4"
            />
            <Image
              src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/woman-meditates-ok-WWXTFSB.png"
              width={300}
              height={400}
              alt="young woman practicing yogar"
              className="mb-4 absolute left-0 top-0 float-animation"
            />

            <div className="hidden group-hover:block relative">
              <ul className="flex justify-center absolute bottom-0 left-7 gap-2 text-2xl ml-10 text-[#18CBE4] ">
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaFacebookSquare className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaXTwitter className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaInstagram className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2.5">
              <p
                className={`${rajdhani.className} text-[#003342] mt-10 text-2xl font-bold`}
              >
                Jessica Hobs
              </p>
              <p className="text-[#18CBE4]">Yoga Instructor</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="group relative w-[300px] text-center"
          >
            <Image
              src="/images/logo-big.png"
              width={300}
              height={300}
              alt="logo"
              className="mb-4"
            />
            <Image
              src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/meditating-in-yoga-GHLYW8E.png"
              width={300}
              height={400}
              alt="young woman practicing yogar"
              className="mb-4 absolute left-0 top-0 float-animation"
            />
            <div className="hidden group-hover:block relative">
              <ul className="flex justify-center absolute bottom-0 left-7 gap-2 text-2xl ml-10 text-[#18CBE4] ">
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaFacebookSquare className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaXTwitter className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaInstagram className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2.5">
              <p
                className={`${rajdhani.className} text-[#003342] mt-10 text-2xl font-bold`}
              >
                Christina Rose
              </p>
              <p className="text-[#18CBE4]">Yoga Instructor</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="group relative w-[300px] text-center"
          >
            <Image
              src="/images/logo-big.png"
              width={300}
              height={300}
              alt="logo"
              className="mb-4"
            />
            <Image
              src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/woman-doing-meditation-and-yoga-YQPKBMT.png"
              width={300}
              height={400}
              alt="young woman practicing yogar"
              className="mb-4 absolute left-0 top-0 float-animation"
            />
            <div className="hidden group-hover:block relative">
              <ul className="flex justify-center absolute bottom-0 left-7 gap-2 text-2xl ml-10 text-[#18CBE4] ">
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaFacebookSquare className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaXTwitter className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
                <li className="text-white p-3 rounded-full cursor-pointer bg-[#18CBE4] hover:bg-[#5fb0bb]">
                  <FaInstagram className="transition-all duration-500 ease-in-out  hover:animate-ping" />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2.5">
              <p
                className={`${rajdhani.className} text-[#003342] mt-10 text-2xl font-bold`}
              >
                Hanny Wesley
              </p>
              <p className="text-[#18CBE4]">Yoga Instructor</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white mb-20 xl:sticky left-0 top-0 z-20 xl:px-30 px-5 pt-5 h-screen">
        <Image
          src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/Group-4.png"
          width={100}
          height={100}
          alt=""
          className=" relative -left-25 hidden xl:block"
        />
        <div className="bg-[#d9acf54f] p-10 rounded-tr-4xl rounded-bl-4xl">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col justify-start gap-10">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`${rajdhani.className} text-3xl font-bold text-[#003342]`}
              >
                Yogafit Working Hour
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="text-[#333333b0] max-w-[400px]"
              >
                Donec pede justo fringilla. aliquet nec vulputate eget arcu In
                enim justo.
              </motion.p>
              <div className="text-[#003342] flex flex-col gap-4 font-bold max-w-[450px]">
                <div className="flex justify-between gap-3 items-center">
                  <span className="max-w-[300px]">Monday - Friday</span>
                  <Divider />
                  <span className="max-w-[250px]">09.00 - 20.00</span>
                </div>
                <div className="flex justify-between gap-3 items-center">
                  <span className="">Saturday</span>
                  <Divider />
                  <span className="max-w-[250px]">09.00 - 19.00</span>
                </div>
                <div className="flex justify-between gap-3 items-center">
                  <span>Sunday</span>
                  <Divider />
                  <span className="max-w-[250px] ">09.00 - 15.00</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="relative"
            >
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/people-doing-yoga-on-the-beach-e1681803021989.jpg"
                width={600}
                height={600}
                alt=""
                className="xl:relative mt-10 xl:mt-0 xl:block min-w-[280px] bottom-30 rounded-tl-4xl rounded-br-4xl"
              />
              <div className="hidden rounded-tr-4xl cursor-pointer xl:grid place-content-center absolute left-0 bottom-30 w-20 h-20 bg-white transition-all duration-500 ease-in-out hover:bg-[#18CBE4] hover:text-white">
                <FaPlay />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center justify-between"
          >
            <p className="xl:text-2xl text-lg font-bold text-[#003342]">
              This Yoga Support by
            </p>
            <div className="flex overflow-hidden w-[75%]">
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/snowflake-logo-recv2EQNlU3plB13W.png"
                width={200}
                height={200}
                alt=""
                className=""
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/inspire-logo-recwek1xLvPBRvnpm.png"
                width={200}
                height={200}
                alt=""
                className=""
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/nextmove-recXWUjUgwS26HIuj.png"
                width={200}
                height={200}
                alt=""
                className=""
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/pinpoint-reco6Ys7nWU8RWf7m.png"
                width={200}
                height={200}
                alt=""
                className=""
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/proline-logo-recM5LCJ6omCJzS0g.png"
                width={200}
                height={200}
                alt=""
                className=""
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/sitemark-logo-recr9fsEK43RqqITU.png"
                width={200}
                height={200}
                alt=""
                className=""
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/Waveless-logo-recc8dyXMtZC2sJ8h.png"
                width={200}
                height={200}
                alt=""
                className=""
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-teal-950 relative xl:sticky left-0 top-0 z-30 flex flex-wrap justify-between items-center p-10 pb-0 xl:p-30 xl:h-[70vh]">
        <div className="text-white flex justify-center flex-col gap-10 items-start mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`${rajdhani.className} xl:text-5xl text-2xl xl:leading-14 font-bold max-w-[550px]`}
          >
            Want to Improve Your Well-Being? Start With a Free Class Today!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <FancyBtn href="#">Get a Free Class</FancyBtn>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 1, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          <Image
            src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/cheerful-young-woman-with-yoga-NPYKHGK.png"
            width={500}
            height={100}
            alt=""
            className="xl:relative xl:bottom-50 bottom-0 xl:h-[625px]"
          />
        </motion.div>
      </section>
    </div>
  )
}

interface ReviewCardProps {
  review: string
  src: string
  name: string
  occupation: string
}

function ReviewCard({ review, src, name, occupation }: ReviewCardProps) {
  return (
    <section className="rounded-tr-4xl rounded-bl-4xl w-[300px] p-10 bg-white flex flex-col gap-10 shadow-2xl">
      <p>"{review}"</p>
      <div className="flex gap-6">
        <Image
          src={src}
          width={50}
          height={50}
          alt="user"
          className="rounded-full"
        />
        <div>
          <p
            className={`${rajdhani.className} text-xl font-bold text-[#003342]`}
          >
            {name}
          </p>
          <p className="text-[#333b]">{occupation}</p>
        </div>
      </div>
    </section>
  )
}
