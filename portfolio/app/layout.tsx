import type { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import React from "react";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"], weight: ['400', '500', '600', '700']
});

const Ovo = OvoFont({
  subsets: ["latin"], weight: ['400']
});


export const metadata: Metadata = {
  title: "Jimi Ademola",
  description: "Personal website showcasing experience, previous work and tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.className } ${Ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
