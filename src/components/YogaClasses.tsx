import Image from 'next/image'
import FancyTxt from './FancyTxt'
import FancyBtn from './FancyBtn'
import { rajdhani } from '@/app/page'

export default function YogaClasses() {
  return (
    <section className="mt-40 flex items-center justify-center xl:justify-start gap-7 flex-wrap xl:p-10 mb-20">
      <div className="mr-80"></div>
      <Card
        title="Hatha Yoga Class"
        cardImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/group-of-diversity-yoga-sport-people-practice-with-their-coaching-in-yoga-class-e1681795794579.jpg"
        designImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/Hatha-yoga-GG7EK9Q.png"
      />
      <Card
        title="Vinyasa Yoga Class"
        cardImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/group-of-people-in-a-yoga-class-indoors-closing-eyes-and-learning-health-habits--e1681359939109.jpg"
        designImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/Vinyasa-yoga-GG7EK9Q.png"
      />
      <Card
        title="Ashtanga Yoga Class"
        cardImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/group-of-diversity-yoga-sport-people-practice-with-their-coaching-in-yoga-class-1-e1681796064165.jpg"
        designImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/Ashtanga-yoga-GG7EK9Q.png"
      />
      <Card
        title="Bikram Yoga Class"
        cardImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/group-of-diversity-practicing-yoga-class-healthy-or-meditation-exercise-stretching-e1681796338878.jpg"
        designImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/Bikram-yoga-GG7EK9Q.png"
      />
      <Card
        title="Iyengar Yoga Class"
        cardImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/relaxed-caucasian-woman-doing-yoga-at-home-in-daytime-e1681797304457.jpg"
        designImgSrc="https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/Iyengar-yoga-GG7EK9Q.png"
      />
      <ExtraCard />
    </section>
  )
}

function Card({
  title,
  cardImgSrc,
  designImgSrc,
}: {
  title: string
  cardImgSrc: string
  designImgSrc: string
}) {
  return (
    <div className="w-[300px] shadow-2xl rounded-bl-4xl rounded-tr-4xl">
      <div>
        <Image
          src={cardImgSrc}
          alt=""
          width={300}
          height={300}
          className="rounded-tr-4xl"
        />
        <div className="relative left-25 bottom-15 bg-white w-[100px] rounded-full shadow">
          <Image src={designImgSrc} alt="" width={100} height={100} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 justify-center p-5 text-center mt-[-50px]">
        <h2 className={`${rajdhani.className} text-3xl font-bold w-[250px]`}>
          {title}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, tempor sed do
          eiusmod.
        </p>
        <FancyTxt>Learn More</FancyTxt>
      </div>
    </div>
  )
}

function ExtraCard() {
  return (
    <div className="w-[300px] h-[500px] shadow-2xl rounded-bl-4xl rounded-tr-4xl bg-teal-950 grid place-content-center p-7">
      <div className="text-white text-center flex flex-col gap-4 justify-center items-center">
        <Image
          src="/images/logo-big.png"
          width={120}
          height={120}
          alt="logo"
          className="m-auto"
        />
        <h2 className={`${rajdhani.className} text-3xl font-bold`}>
          Our Yoga Class
        </h2>
        <p className="mb-5">
          Donec pede justo fringilla vel aliquet nec vulputate eget.
        </p>
        <FancyBtn href="#">View More</FancyBtn>
      </div>
    </div>
  )
}
