import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/lib/Providers";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PortFolio",
  description: "It is portfolio of Asif who is a full Stack Web Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar session={session} />
          <div className="min-h-screen w-[90%] mx-auto">{children}</div>
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
