import React from 'react'
import FancyBtn from './FancyBtn'
import Image from 'next/image'
import {
  FaAddressBook,
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaLocationArrow,
  FaMap,
  FaPhone,
  FaPhoneAlt,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa'
import { FaLocationDot, FaX, FaXRay, FaXTwitter } from 'react-icons/fa6'
import Divider from './Divider'

export default function Footer() {
  return (
    <footer className="sticky left-0 top-0 z-50">
      <section className="flex gap-10 items-center py-20">
        <div className="p-10 pr-0 flex flex-col gap-10 justify-center items-start">
          <h1 className="text-5xl font-bold">Our Latest Articles</h1>
          <FancyBtn href="#">View More</FancyBtn>
        </div>

        <div
          style={{
            textShadow: '2px 2px #333',
            backgroundImage:
              "url('https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/woman-doing-yoga-on-the-beach-e1681798498704.jpg')",
          }}
          className="flex text-white p-10 flex-col justify-end bg-cover bg-center h-[480px] w-[350px] rounded-tr-4xl rounded-bl-4xl "
        >
          <p>News</p>
          <p className="text-2xl">
            The Science Behind Yoga: How It Affects Your Brain And Body
          </p>
          <p>April 25, 2023</p>
        </div>

        <div>
          <div className="flex p-10 gap-5 justify-end items-center bg-cover bg-center ">
            <Image
              alt=""
              width={300}
              height={300}
              src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/portrait-of-attractive-blonde-hair-young-woman-exercise-yoga-outdoor--e1682387007214.jpg"
              className="rounded-tl-4xl rounded-br-4xl"
            />

            <div className="w-[300px] flex flex-col gap-2">
              <p className="text-[#18CBE4]">News</p>
              <p className="text-2xl">
                The Science Behind Yoga: How It Affects Your Brain And Body
              </p>
              <p className="text-[#3333339c]">April 25, 2023</p>
            </div>
          </div>

          <div className="flex p-10 gap-5 justify-end items-center bg-cover bg-center ">
            <Image
              alt=""
              width={300}
              height={300}
              src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/shot-of-two-young-women-meditating-during-their-yoga-routine-on-the-beach-e1681977179490.jpg"
              className="rounded-tl-4xl rounded-br-4xl"
            />

            <div className="w-[300px] flex flex-col gap-2">
              <p className="text-[#18CBE4]">News</p>
              <p className="text-2xl">
                Yoga Flow: Exploring the Benefits of Mindful Movement
              </p>
              <p className="text-[#3333339c]">April 20, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="-m-56">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d5eeff"
            fillOpacity="1"
            d="M0,160L120,186.7C240,213,480,267,720,261.3C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d5eeff"
            fillOpacity="1"
            d="M0,160L120,186.7C240,213,480,267,720,261.3C960,256,1200,192,1320,160L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div> */}

      <section className="p-20">
        <div
          style={{
            backgroundImage: 'url("/images/pattern.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
          }}
          className="mx-auto rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-center gap-12 p-20 max-w-[900px] bg-teal-950 text-white"
        >
          <h1 className="text-4xl w-[700px] mx-auto text-center">
            The Ultimate Resource For Yoga and Wellness. Subscribe Now!
          </h1>
          <div className="w-full flex justify-center">
            <input
              className="bg-white text-black p-4 rounded-bl-xl w-[400px]"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="p-4 rounded-tr-xl bg-[#18CBE4]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between py-10 px-32 ">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-[#18CBE4]">Contact Us</p>
            <p className="text-4xl font-bold">hello@yogafit.com</p>
            <div className="flex items-center gap-10">
              <p className="flex gap-2 items-center">
                <FaLocationDot className="text-[#18CBE4]" />
                <span className="text-[#33333391]">
                  Jalan Raya Ubud No. 99x Gianyar - Bali
                </span>
              </p>
              <p className="flex gap-2 items-center">
                <FaPhoneAlt className="text-[#18CBE4]" />{' '}
                <span className="text-[#33333391]">+123-456-7890</span>
              </p>
            </div>
          </div>
          <div>
            <Image src="/images/logo.png" width={120} height={120} alt="logo" />
          </div>
        </div>
        <div className="flex items-center  py-10 px-32">
          <p className="text-[#33333391] w-[280px]">Follow our social media</p>
          <Divider />
          <ul className="flex gap-2 text-xl ml-10 text-[#18CBE4] ">
            <li className="hover:text-[#4ba8b5] cursor-pointer">
              <FaFacebookSquare />
            </li>
            <li className="hover:text-[#4ba8b5] cursor-pointer">
              <FaXTwitter />
            </li>
            <li className="hover:text-[#4ba8b5] cursor-pointer">
              <FaYoutube />
            </li>
            <li className="hover:text-[#4ba8b5] cursor-pointer">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </section>

      <section className="flex justify-between py-7 px-32 bg-teal-950 text-white">
        <p>Yoga, Meditation & Fitness replica developed by Ajay Sanwlot</p>
        <p>Copyright © 2025. All rights reserved.</p>
      </section>
    </footer>
  )
}
