import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Providers from "@/lib/Providers";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asif's PortFolio | Home",
  description: "It is portfolio of Asif who is a full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </Providers>
  );
}
