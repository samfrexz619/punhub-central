import React from 'react';
import Link from 'next/link';
interface Props {
  closeMobile: () => void;
}

// onClick={e => e.stopPropagation()}

const Navigation: React.FC<Props> = (props) => {

  const { closeMobile } = props;

  return (
    <div onClick={closeMobile} className='bg-modal fixed left-0 inset-y-0 h-screen z-50 right-0'>
      <nav onClick={e => e.stopPropagation()} className='h-full relative bg-white w-[280px]'>
        <ul className='px-5 pt-10'>
          <li className='py-3'>
            <Link href={'#'} className="text-base font-medium">Punchlines</Link>
          </li>
          <li className='py-3'>
            <Link href={'#'} className="text-base font-medium">FAQs</Link>
          </li>
          <li className='py-3 pb-10'>
            <Link href={'#'} className="text-base font-medium">Contact Us</Link>
          </li>
          <li className='pt-4 border-t-2 border-[#E6EBED] border-solid'>
            <button className="bg-main w-full h-12 rounded-lg text-white text-[14px] font-bold">
              OPEN APP
            </button>
          </li>
        </ul>
        <button onClick={closeMobile} className='absolute top-2 right-3'>X</button>
      </nav>
    </div>
  );
}

export default Navigation;
