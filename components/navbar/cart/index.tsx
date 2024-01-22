import React from "react";
import { CartIcon } from "./cartIcon";

export const NavCart = () => {
  return (
    <div className="flex pt-4 px-2 pb-2 gap-2 items-end border border-black hover:border-white hover:cursor-pointer">
      <CartIcon />
      <span className="text-sm text-white capitalize">cart</span>
    </div>
  );
};
