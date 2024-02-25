import Image from "next/image";
import { playfair_display } from "../../fonts";
import Button from "./Button";
import PageItem from "./PageItem";



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
      text: <span>Step into the world of rhythm and lyrics, Contribute to the punchline <br  /> community, we need you to be a part of it.</span>,
      color: '#82ABFB'
    },
  ]

  return (
    <div className="w-full relative py-3">
      <div className="lg:px-37 px-3 lg:flex justify-between">
        <div className="lg:w-[552px]">
          <h1 className={`${playfair_display.className} text-2xl md:text-[43px] font-medium text-main leading-[48px]`}>
            Let’s revive the Creativity of <br className="hidden md:block" /> the hip-hop culture
          </h1>
          <ul className="mt-4">
            {
              pageItems.map(item => (
                <PageItem key={item.id} color={item.color} text={item.text} />
              ))
            }
          </ul>
          <div className="flex mt-16 gap-x-4 justify-center lg:justify-start">
            <Button variant="app" />
            <Button variant="google" />
          </div>
          <span className="absolute -left-7 -bottom-[12rem] -z-0">
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
            src={'/assets/functionality.gif'} 
            alt="punhub splashscreen display" 
            height={490} 
            width={200} 
            className="rounded-30 border-solid border-pryBlack border-4 absolute block left-[197px] -top-1"
          />
          <Image 
            src={'/assets/PunhubCentral-main.gif'} 
            alt="punhub splashscreen display" 
            height={490} 
            width={200} 
            className="rounded-30 border-solid border-pryBlack border-4 relative block"
          />
        </div>
      </div>
    </div>
  );
}

export default BodySection;
