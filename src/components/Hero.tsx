import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'
import { IoIosPlay } from 'react-icons/io'
import FancyBtn from './FancyBtn'
import FancyTxt from './FancyTxt'

export default function Hero() {
  return (
    <div>
      <div className="flex items-center justify-around mb-30">
        <div className="bg-[#d9acf59a] h-40 w-2xs p-3 rounded-tr-3xl rounded-bl-3xl flex items-center justify-center">
          <div className="relative bottom-20 left-0">
            <Image
              src="/images/yoga-girl-in-warrior-pose-indoor.png"
              width={150}
              height={230}
              alt="yoga girl in warrior pose indoor"
              className="mb-4"
            />
            <p>
              Get more than <strong>+30 videos</strong>
            </p>
          </div>
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl p-2">
            <IoIosPlay />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/logo-big.png"
            width={300}
            height={300}
            alt="logo"
            className="mb-4"
          />
          <Image
            src="/images/young-woman-practicing-yoga.png"
            width={300}
            height={400}
            alt="young woman practicing yogar"
            className="mb-4 absolute left-0 top-0"
          />
        </div>
        <div className="w-[300px]">
          <div className="mb-10">
            <p>
              A yoga and meditation teacher is a professional who has in-depth
              knowledge and training in the practices of yoga and meditation.
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <FancyBtn href={'#'}>Book Class</FancyBtn>
            <a href="#" className="text-[#18CBE4] flex items-center gap-2 ">
              <FaPhone />
              <FancyTxt>Contact Us</FancyTxt>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 py-40 text-center">
        <div className="w-[300px] flex justify-center items-center flex-col gap-5">
          <div className="relative">
            <div className=" bg-[#d9acf59a] w-[120px] h-[120px] rounded-full"></div>
            <Image
              src="/images/yoga-meditation-retreat-1.png"
              width={200}
              height={300}
              alt="logo"
              className="absolute left-0 bottom-0 rounded-b-[400px]"
            />
          </div>
          <h3 className="font-bold text-2xl">Peace of Mind</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor.
          </p>
          <a href="#" className="text-[#18CBE4] flex items-center gap-2 ">
            <FancyTxt>Lear More</FancyTxt>
          </a>
        </div>
        <div className="w-[300px] flex justify-center items-center flex-col gap-5">
          <div className="relative">
            <div className=" bg-[#d9acf59a] w-[120px] h-[120px] rounded-full"></div>
            <Image
              src="/images/yoga-meditation-retreat-2.png"
              width={200}
              height={300}
              alt="logo"
              className="absolute left-0 bottom-0 rounded-b-[400px]"
            />
          </div>
          <h3 className="font-bold text-2xl">Mental Health</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor.
          </p>
          <a href="#" className="text-[#18CBE4] flex items-center gap-2 ">
            <FancyTxt>Lear More</FancyTxt>
          </a>
        </div>
        <div className="w-[300px] flex justify-center items-center flex-col gap-5">
          <div className="relative">
            <div className=" bg-[#d9acf59a] w-[120px] h-[120px] rounded-full"></div>
            <Image
              src="/images/yoga-meditation-retreat-3.png"
              width={200}
              height={300}
              alt="logo"
              className="absolute left-0 bottom-0 rounded-b-[400px]"
            />
          </div>
          <h3 className="font-bold text-2xl">Gain Flexability</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor.
          </p>
          <a href="#" className="text-[#18CBE4] flex items-center gap-2 ">
            <FancyTxt>Lear More</FancyTxt>
          </a>
        </div>
      </div>
    </div>
  )
}
