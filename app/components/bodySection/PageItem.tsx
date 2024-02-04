import { ReactElement } from "react";

interface Props {
  color: string;
  text: ReactElement;
}

const PageItem: React.FC<Props> = ({ color, text }) => {

  return (
    <li className="flex gap-x-2 py-3 items-center text-textPry text-base">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
        <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill={color}/>
      </svg>
      { text }
    </li>
  );
}

export default PageItem;
