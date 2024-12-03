import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/footer";

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
  description:
    "A PhD scholar at IISC Bangalore specializing in Geodynamics and Seismic Anisotropy",
  keywords: [
    "Aashruti Phd scholar IISC Bangalore",
    "IISC Bangalore PhD",
    "Geodynamics",
    "Seismic Anisotropy",
    "Resume",
    "Research",
  ],
  openGraph: {
    title: "Aashruti",
    description:
      "A PhD scholar at IISC Bangalore specializing in Geodynamics and Seismic Anisotropy",
    url: "https://aashrutimourya.github.io/",
    type: "website",
    images: {
      url: "https://aashrutimourya.github.io/image.png",
      width: 500,
      height: 400,
      alt: "Aashruti @ IISC Bangalore",
    },
  },
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
