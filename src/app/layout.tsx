import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/footer";
import { BIO } from "@/utils/consts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aashruti",
  description: BIO.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-h-screen">
          <NavBar />
          <div className="flex-column flex justify-center md:pt-[60px] pt-[90px] md:max-w-[1400px] md:px-0 px-6 mx-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
