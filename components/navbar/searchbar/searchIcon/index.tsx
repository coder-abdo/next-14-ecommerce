import React from "react";
import { IoIosSearch } from "react-icons/io";

export const SearchIcon = () => {
  return (
    <div className="hover:bg-orange-400 hover:cursor-pointer flex justify-center items-center w-14 bg-orange-300 rounded-tr rounded-br text-3xl">
      <IoIosSearch />
    </div>
  );
};
