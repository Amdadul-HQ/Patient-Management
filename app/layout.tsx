import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontPlus = Plus_Jakarta_Sans({ subsets: ["latin"],
  weight:['300','400','500','600','700'],
  variable:'--font-plus'
 });

export const metadata: Metadata = {
  title: "Care Pluse",
  description: "A Health Care Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
