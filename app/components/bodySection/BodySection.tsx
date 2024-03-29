"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { playfair_display } from "../../fonts";
import Button from "./Button";
import { phoneImages } from "./bodyData";
import './bodySection.css'


const BodySection = () => {

  // const pageItems = [
  //   {
  //     id: 1,
  //     text: <span>Share your puns and get connected with every pun lover.</span>,
  //     color: '#305DA8'
  //   },
  //   {
  //     id: 2,
  //     text: <span>Show your support and appreciation for talented artists by reacting to <br /> punchlines, sign in to continue.</span>,
  //     color: '#4DB5EA'
  //   },
  //   {
  //     id: 3,
  //     text: <span>Step into the world of rhythm and lyrics, Contribute to the punchline <br /> community, we need you to be a part of it.</span>,
  //     color: '#82ABFB'
  //   },
  // ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex === phoneImages.length - 1 ? 0 : prevIndex + 1)
    }, 3000)
    return () => clearInterval(slideTimer)
  }, [phoneImages.length])

  return (
    <div className="w-full relative lg:py-3">
      <div className="lg:px-[185px] px-3 lg:flex justify-between gap-x-8">
        <div className="lg:w-[552px] relative h-[366px]">
          <h1 className={`${playfair_display.className} text-2xl md:text-[40px] font-medium text-black leading-[48px]`}>
            Let’s revive the Creativity of the <br className="lg:hidden block" /> hip-hop culture
          </h1>
          <div className="mt-5">
            <p className="text-black text-[16px]">
              Connect with the world of rhythm and lyrics, share your puns, show your <br className="hidden md:block" /> support for talented creators, and <br className="hidden md:block" /> contribute to the punchline community—connect with every <br className="hidden md:block" /> pun lover today!
            </p>
          </div>
          <div className="block lg:hidden pt-10">
            <button className="bg-main py-4 px-12 h-12 rounded-lg text-white text-[14px] font-bold">
              OPEN APP
            </button>
          </div>
          <div className="hidden lg:flex mt-16 gap-x-4 justify-center lg:justify-start relative">
            <Button variant="app" />
            <Button variant="google" />
          </div>
          <span className="block">
            <Image
              src={'/assets/musical-note.svg'}
              alt="musical note image"
              width={500}
              height={156}
              className="absolute hidden lg:block -left-[12rem] -bottom-[12.3rem] -z-0"
            />
          </span>
        </div>
        <div className="w-rem hidden lg:block">
          <div className="w-[490px] flex h-full justify-end relative">
            <Image
              src={'/assets/video-mockup.svg'}
              alt={'phone image'}
              height={400}
              width={400}
              className="h-[490px] w-[480px] relative"
            />
            <div className="">
              {
                phoneImages.map((image, idx) => (
                  <Image
                    key={image.id}
                    src={image.image}
                    alt={image.alt}
                    height={100}
                    width={500}
                    className={`${currentIndex === idx ? 'active' : 'hidden'} rounded-30 block h-[474px] carousel w-[470px] absolute -right-[6.3rem] bottom-[0.5rem] top-2`}
                  />
                ))
              }
              {/* <Image
                src={'/assets/phone-images/phone2.svg'}
                alt={'phone image'}
                height={100}
                width={500}
                className="block absolute h-[470px] carousel w-[465px] bottom-[0.5rem] -right-[6.1rem]"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodySection;
