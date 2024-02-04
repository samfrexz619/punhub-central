import Image from "next/image";
import Link from "next/link";


const NavBar = () => {
  return (
    <header className='w-full h-25 bg-white shadow-nav top-0 fixed z-50'>
      <nav className="mx-37 flex items-center h-full justify-between">
        <Link href={'/'}>
          <Image
            src="/assets/logo.svg"
            alt="Vercel Logo"
            width={64}
            height={64}
            priority
         />
        </Link>
        <ul className="text-pryBlack flex gap-x-13">
          <li>
            <Link href={'#'} className="text-base font-medium">Punchlines</Link>
          </li>
          <li>
            <Link href={'#'} className="text-base font-medium">FAQs</Link>
          </li>
          <li>
            <Link href={'#'} className="text-base font-medium">Contact Us</Link>
          </li>
        </ul>
        <button className="bg-main w-40 h-12 rounded-lg text-white text-[14px] font-bold">
          OPEN APP
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
