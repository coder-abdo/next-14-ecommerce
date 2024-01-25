import React from "react";
import Link from "next/link";
import { FaBars, FaAngleRight } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { secondaryNavLinks } from "@/utils";
import Image from "next/image";

export const SecondaryNav = () => {
  return (
    <nav
      className="bg-slate-800 shadow-slate-700 px-4 flex gap-2 items-center justify-between overflow-hidden"
      aria-label="Secondary navigation"
      role="navigation"
    >
      <Button
        variant={"ghost"}
        className="gap-2 text-white hover:bg-transparent hover:text-white border border-transparent hover:border-white capitalize rounded-none"
      >
        <FaBars />
        <span>all</span>
      </Button>
      <ul className="flex gap-2 items-center">
        {secondaryNavLinks.map((link, index) => (
          <li key={index} className="even:hidden even:lg:block">
            <Button
              className="text-white text-sm p-1  hover:bg-transparent hover:text-white border border-transparent hover:border-white capitalize rounded-none"
              asChild
              variant={"ghost"}
            >
              <Link href={link.path}>{link.text}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <Link
        href="/start-selling-today"
        className="w-[400px] inline-block border-l border border-transparent border-l-slate-700 hover:cursor-pointer hover:border hover:border-white py-1 flex-shrink-0"
      >
        <Image
          src={"/start-selling-today.png"}
          alt="start selling today"
          width={400}
          height={40}
          priority
        />
      </Link>
    </nav>
  );
};
