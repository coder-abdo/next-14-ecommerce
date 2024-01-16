import React from "react";
import { Logo } from "@/components/navbar/logo";
import { DeliveryTo } from "@/components/navbar/deliverTo";

export const Navbar = () => {
  return (
    <nav className="bg-black flex items-center py-2 px-1">
      <Logo />
      <DeliveryTo />
    </nav>
  );
};
