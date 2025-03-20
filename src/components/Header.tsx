import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <ul className="flex justify-center items-center gap-14 p-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Classes</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li className="text-center">
          <Image
            className="mx-10"
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={40}
          />
        </li>
        <li>
          <span>Pages</span>
        </li>
        <li>
          <span>Blog</span>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  )
}
