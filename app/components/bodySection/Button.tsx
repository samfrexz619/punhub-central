import Image from "next/image";

interface Props {
  variant: 'google' | 'app';
}

const Button: React.FC<Props> = ({ variant }) => {
  return (
    <button className="z-10">
      {variant === 'app'
        ? <Image
          src={'/assets/apple.svg'}
          alt="app store image"
          height={52}
          width={180}
          className="w-[140px] lg:w-[180px]"
        />
        : <Image
          src={'/assets/google.svg'}
          alt="app store image"
          height={52}
          width={180}
          className="w-[140px] lg:w-[180px]"
        />}
    </button>
  );
}

export default Button;
