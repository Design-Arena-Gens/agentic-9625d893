import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "NeuraForge | Workflow Intelligence for Enterprise AI",
  description:
    "Transform unstructured, proprietary enterprise data into orchestrated workflow intelligence for autonomous AI agents and multimodal copilots."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950`}>
        {children}
      </body>
    </html>
  );
}
