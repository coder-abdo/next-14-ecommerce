import React from "react";
import { Logo } from "@/components/navbar/logo";
import { DeliveryTo } from "@/components/navbar/deliverTo";
import { SearchBar } from "@/components/navbar/searchbar";
import { Languages } from "@/components/navbar/languages";
import { Sign } from "@/components/navbar/signIn";

export const Navbar = () => {
  return (
    <nav className="bg-black flex items-center gap-2 py-2 px-1">
      <Logo />
      <DeliveryTo />
      <SearchBar />
      <Languages />
      <Sign />
    </nav>
  );
};
