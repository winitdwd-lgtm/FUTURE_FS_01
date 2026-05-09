import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vineet Dharwad | Engineer & Innovator",
  description: "Portfolio of Vineet Dharwad - Software Development Enthusiast, GenAI Developer, and Problem Solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050914] text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
