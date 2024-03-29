import Image from 'next/image';
import Link from 'next/link';
import { Socials } from './Socials';

const Footer = () => {
  return (
    <footer className='w-full bg-main mt-36 py-6 text-white'>
      <div className='lg:px-37 block w-full px-3 lg:flex lg:h-[290px] lg:justify-between flex-wrap lg:flex-nowrap'>

        <div className='w-full lg:w-[132px] flex justify-center mr-20 pb-10 lg:pb-0'>
          <Link href={'/'}>
            <Image
              src={'/assets/logo-white.svg'}
              alt='logo white image'
              height={77}
              width={132}
            />
          </Link>
        </div>

        <div className='lg:w-linkWidth w-full flex justify-between pb-7 lg:pb-0 flex-wrap px-3 lg:px-0'>
          <div className='hidden lg:block'>
            <h4 className='text-22 font-medium'>Apps</h4>
            <Link href={'#'} className='block py-4 text-14 font-normal'>PunhubCentral for Android</Link>
            <Link href={'#'} className='block text-14 font-normal'>PunhubCentral for iOS</Link>
          </div>
          <div className=''>
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
          </div>
          <div className='h-full w-full md:w-auto pt-8 md:pt-0 flex flex-col justify-between'>
            <div>
              <h4 className='text-22 font-medium'>Socials</h4>
              <a href="#" className='flex gap-x-2 items-center py-2'>
                <Socials social='ig' />
                <span>PunhubCentral</span>
              </a>
              <a href="#" className='flex gap-x-2 items-center py-2'>
                <Socials social='fb' />
                <span>PunhubCentral</span>
              </a>
              <a href="#" className='flex gap-x-2 items-center py-2'>
                <Socials social='x' />
                <span>PunhubCentral</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full'>
        <div className='w-[87%] mx-auto'>
          <i className='h-[1px] block w-full bg-gray-200'></i>
          <p className='flex gap-x-2 text-14 justify-center pt-4 items-center'>
            <span className='text-3xl'>&copy;</span> Copyright 2022 - PunhubCentral.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
