import Image from "next/image";
import { playfair_display } from "../../fonts";
import Button from "./Button";
import PageItem from "./PageItem";
import './bodySection.scss'


const BodySection = () => {

  const pageItems = [
    {
      id: 1,
      text: <span>Share your puns and get connected with every pun lover.</span>,
      color: '#305DA8'
    },
    {
      id: 2,
      text: <span>Show your support and appreciation for talented artists by reacting to <br /> punchlines, sign in to continue.</span>,
      color: '#4DB5EA'
    },
    {
      id: 3,
      text: <span>Step into the world of rhythm and lyrics, Contribute to the punchline <br /> community, we need you to be a part of it.</span>,
      color: '#82ABFB'
    },
  ]

  return (
    <div className="w-full relative lg:py-3">
      <div className="lg:px-37 px-3 lg:flex justify-between gap-x-8">
        <div className="lg:w-[552px]">
          <h1 className={`${playfair_display.className} text-2xl md:text-[40px] font-medium text-black leading-[48px]`}>
            Let’s revive the Creativity of <br className="hidden md:block" /> the hip-hop culture
          </h1>
          <div className="mt-5">
            <p className="text-black text-[16px]">
              Connect with the world of rhythm and lyrics, share your puns, show your <br className="hidden md:block" /> support for talented creators, and <br className="hidden md:block" /> contribute to the punchline community—connect with every <br className="hidden md:block" /> pun lover today!
            </p>
          </div>
          {/* <ul className="mt-4">
            {
              pageItems.map(item => (
                <PageItem key={item.id} color={item.color} text={item.text} />
              ))
            }
          </ul> */}
          <div className="block lg:hidden pt-10">
            <button className="bg-main py-4 px-12 h-12 rounded-lg text-white text-[14px] font-bold">
              OPEN APP
            </button>
          </div>
          <div className="hidden lg:flex mt-16 gap-x-4 justify-center lg:justify-start relative">
            <Button variant="app" />
            <Button variant="google" />
          </div>
          <span className="absolute hidden lg:block -left-7 -bottom-[1rem] -z-0">
            <Image
              src={'/assets/musical-note.svg'}
              alt="musical note image"
              width={500}
              height={156}
            />
          </span>
        </div>
        <div className="relative w-rem hidden lg:flex justify-end">
          <Image
            src={'/assets/vidoe.svg'}
            alt="punhub splashscreen display"
            height={490}
            width={400}
            className="block rounded-30 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default BodySection;
