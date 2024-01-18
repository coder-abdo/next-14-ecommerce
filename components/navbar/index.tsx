import React from "react";
import { Logo } from "@/components/navbar/logo";
import { DeliveryTo } from "@/components/navbar/deliverTo";
import { SearchBar } from "@/components/navbar/searchbar";

export const Navbar = () => {
  return (
    <nav className="bg-black flex items-center gap-2 py-2 px-1">
      <Logo />
      <DeliveryTo />
      <SearchBar />
    </nav>
  );
};
