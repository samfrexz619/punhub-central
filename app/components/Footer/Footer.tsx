import Image from 'next/image';
import Link from 'next/link';
import { Socials } from './Socials';

const Footer = () => {
  return (
    <footer className='w-full bg-main h-19 mt-36 py-8 text-white'>
      <div className='mx-37 flex h-full justify-between gap-x-32'>
        <div className='w-[310px] flex flex-col justify-between h-full'>
          <Link href={'/'}>
            <Image
              src={'/assets/logo-white.svg'}
              alt='logo white image'
              height={77}
              width={132}
            />
          </Link>
          <p className='flex items-center gap-x-2 text-14'>
            <span className='text-3xl'>&copy;</span> Copyright 2022 - PunhubCentral.
          </p>
        </div>
        <div className='w-310 flex justify-between'>
          <div>
            <h4 className='text-22 font-medium'>Apps</h4>
            <Link href={'#'} className='block py-4 text-14 font-normal'>PunhubCentral for Android</Link>
            <Link href={'#'} className='block text-14 font-normal'>PunhubCentral for iOS</Link>
          </div>
          <div>
            <h4 className='text-22 font-medium'>Quicklinks</h4>
            <Link href={'#'} className='block py-4 text-14 font-normal'>Punchlines</Link>
            <Link href={'#'} className='block text-14 font-normal'>Help</Link>
            <Link href={'#'} className='block py-4 text-14 font-normal'>FAQs</Link>
            <Link href={'#'} className='block text-14 font-normal'>Contact Us</Link>
          </div>
          <div className='flex flex-col h-full justify-between'>
            <div>
              <h4 className='text-22 font-medium'>Company</h4>
              <Link href={'#'} className='block py-4 text-14 font-normal'>About</Link>
              <Link href={'#'} className='block text-14 font-normal'>Privacy Policy</Link>
              <Link href={'#'} className='block py-4 text-14 font-normal'>Terms of Use</Link>
            </div>
            <div className='flex gap-x-4'>
              <Socials  />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
