import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { SecondaryNav } from "@/components/secondaryNav";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          ptSans.variable,
        )}
      >
        <Navbar />
        <SecondaryNav />
        {children}
      </body>
    </html>
  );
}
