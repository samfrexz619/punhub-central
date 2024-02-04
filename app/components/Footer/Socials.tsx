import Image from "next/image";


export const Socials = () => {
  return (
    <>
      <a href="#">
        <Image 
          src={'/assets/socials/insta.svg'} 
          alt='instagram icon'
          height={24}
          width={24}
        />
      </a>
      <a href="#">
        <Image 
          src={'/assets/socials/facebook.svg'} 
          alt='instagram icon'
          height={24}
          width={24}
        />
      </a>
      <a href="#">
        <Image 
          src={'/assets/socials/twitter.svg'} 
          alt='instagram icon'
          height={24}
          width={24}
        />
      </a>
    </>
  )
}
