import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full bg-main h-19 mt-36 py-8'>
      <div className='mx-37 flex h-full'>
        <div className='w-[310px] flex flex-col justify-between h-full'>
          <Link href={'/'}>
            <Image
              src={'/assets/logo-white.svg'}
              alt='logo white image'
              height={77}
              width={132}
            />
          </Link>
          <p className='text-white text-[18px] flex items-center gap-x-2'>
            <span className='text-3xl'>&copy;</span> Copyright 2022 - PunhubCentral.
          </p>
        </div>
        <div className='w-310 bg-red-100'>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
