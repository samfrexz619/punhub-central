import { Playfair_Display, Lato } from "next/font/google";


export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  display: 'swap'
})