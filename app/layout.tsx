import type { Metadata } from "next";
import { lato } from "./fonts";
import "./globals.css";
import NavBar from "./components/NavBar";


export const metadata: Metadata = {
  title: "Punhub Central",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <main className="bg-white">
          <NavBar />
          <main className="w-full relative top-25 mt-16 overflow-x-hidden">
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
