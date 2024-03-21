import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shena | Portofolio Website",
  description: "Shena | Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="max-w-[1000px] mx-auto relative">
          <Navbar />
        </header>
        <div className="container px-[20px] py-[20px] md:px-[50px] md:py-[40px]">
          {children}
        </div>
        <footer className="container p-[20px] md:p-[50px] bg-[#2e2e2e]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
