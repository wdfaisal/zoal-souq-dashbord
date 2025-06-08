import type { Metadata } from "next";
import {Alexandria, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "لوحة الادارة | زول سوق",
  description: "لوحة ادرة تطبيق زول سوق",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="en">
      <body
        className={`${alexandria.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
