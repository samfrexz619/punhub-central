import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: '#00658B',
        pryBlack: '#424141',
        textPry: '#00070A'
      },
      spacing: {
        25: '100px',
        37: '156px',
        13: '52px',
        19: '308px',
        310: 'calc(100% - 310px)'
      },
      boxShadow: {
        nav: '0px 4px 4px 0px rgba(234, 234, 234, 0.25)',
      },
      fontSize: {
        base: '16px',
      }
    },
  },
  plugins: [],
};
export default config;
