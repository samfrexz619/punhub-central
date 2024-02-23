import Image from "next/image";

interface Props {
  social: string;
}

export const Socials = ({social}: Props) => {
  return (
    <span>
      {
        social === 'ig'
        ? 
            <Image 
              src={'/assets/socials/insta.svg'} 
              alt='instagram icon'
              height={24}
              width={24}
            />
        : social === 'fb'
        ? 
            <Image 
              src={'/assets/socials/facebook.svg'} 
              alt='instagram icon'
              height={24}
              width={24}
            />
        : 
            <Image 
              src={'/assets/socials/twitter.svg'} 
              alt='instagram icon'
              height={24}
              width={24}
            />
      }
    </span>
  )
}
