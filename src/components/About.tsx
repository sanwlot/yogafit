import Image from 'next/image'
import FancyBtn from './FancyBtn'

export default function About() {
  return (
    <section className="flex items-center justify-center">
      <div className=" w-1/2 flex justify-center items-center">
        <div className="relative scale-200">
          <Image
            src="/images/yoga-mandala.png"
            alt="yoga mandala"
            width={300}
            height={300}
            className=""
          />
          <Image
            src="/images/woman-practicing-yoga.png"
            alt="woman practicing yoga"
            width={500}
            height={500}
            className="absolute left-0 top-0"
          />
        </div>
      </div>
      <div className="relative w-1/2 flex flex-col gap-6 justify-start items-start">
        <h2 className="font-bold text-4xl">
          Connecting Mind, Body, and Spirit through
        </h2>
        <p className="w-[500px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo. Ligula eget dolor aenean massa cum sociis natoque.
        </p>
        <div className="flex items-center">
          <div className="flex gap-6 items-center p-5 w-[300px]">
            <div>
              <Image
                src="/images/yoga-expert-icon-1.png"
                alt="yoga expert"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">Expert Trainer</h3>
              <p>Lorem ipsum dolor amet, adipiscing.</p>
            </div>
          </div>
          <div className="flex gap-6 items-center p-5 w-[300px]">
            <div>
              <Image
                src="/images/yoga-place-icon-1.png"
                alt="yoga expert"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">Comfort Place</h3>
              <p>Lorem ipsum dolor amet, adipiscing.</p>
            </div>
          </div>
        </div>
        <FancyBtn href={'#'}>About Us</FancyBtn>
      </div>
    </section>
  )
}
