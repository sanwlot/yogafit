import Image from 'next/image'

export default function SlideSections() {
  return (
    <div className="bg-cyan-50">
      <section className="sticky left-0 top-0 p-10 flex justify-center items-center gap-2">
        <div className="flex flex-col gap-7 p-20">
          <h1 className="text-5xl w-[420px] font-bold">
            Trusted by Thousands Client
          </h1>
          <p className="w-[420px]">
            Donec pede justo fringilla vel aliquet. nec vulputate eget arcu In
            enim justo.
          </p>
          <div className="flex gap-5">
            <div className="flex ">
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/front-view-looking-at-camera-young-woman-farmer-in-a-garden-with-trees-stands-smiling-brunette--e1681372418107-768x768.jpg"
                width={60}
                height={60}
                alt="user"
                className="rounded-full -ml-2 ring-4 ring-cyan-50"
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/mid-adult-man-in-office-arms-folded-looking-at-camera-smiling-e1681372704313-768x768.jpg"
                width={60}
                height={60}
                alt="user"
                className="rounded-full -ml-2 ring-4 ring-cyan-50"
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/young-happy-woman-at-refrigerated-section-of-supermarket-looking-at-camera--e1681373784115.jpg"
                width={60}
                height={60}
                alt="user"
                className="rounded-full -ml-2 ring-4 ring-cyan-50"
              />
              <Image
                src="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/outdoor-portrait-of-african-american-man-with-crossed-arms-looking-at-camera-e1681376874850.jpg"
                width={60}
                height={60}
                alt="user"
                className="rounded-full -ml-2 ring-4 ring-cyan-50"
              />
            </div>
            <div>
              <p className="text-3xl">
                <span>5k</span>{' '}
                <span className="font-bold text-[#18CBE4]">+</span>
              </p>
              <span className="text-[#333]">Happy Clients</span>
            </div>
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
      <section className="bg-white sticky left-0 top-0 z-10 p-30">
        <h1 className="text-center text-5xl font-bold my-20">
          Our Yoga Instructors
        </h1>
        <div className="flex justify-center gap-30 p-10">
          <div className="relative w-[300px] text-center">
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
              className="mb-4 absolute left-0 top-0"
            />
            <div className="flex flex-col gap-2.5">
              <p className="mt-10 text-2xl font-bold">Jessica Hobs</p>
              <p className="text-[#18CBE4]">Yoga Instructor</p>
            </div>
          </div>
          <div className="relative w-[300px] text-center">
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
              className="mb-4 absolute left-0 top-0"
            />
            <div className="flex flex-col gap-2.5">
              <p className="mt-10 text-2xl font-bold">Christina Rose</p>
              <p className="text-[#18CBE4]">Yoga Instructor</p>
            </div>
          </div>
          <div className="relative w-[300px] text-center">
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
              className="mb-4 absolute left-0 top-0"
            />
            <div className="flex flex-col gap-2.5">
              <p className="mt-10 text-2xl font-bold">Hanny Wesley</p>
              <p className="text-[#18CBE4]">Yoga Instructor</p>
            </div>
          </div>
        </div>
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
          <p className="text-xl font-bold">{name}</p>
          <p className="text-[#333b]">{occupation}</p>
        </div>
      </div>
    </section>
  )
}
