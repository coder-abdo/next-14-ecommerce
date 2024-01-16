import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const ptSans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Shopy|happy store",
  description: "shop store as an ecommerce store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ptSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
