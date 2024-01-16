import React from "react";
import { IoLocationOutline } from "react-icons/io5";
export const DeliveryTo = () => {
  return (
    <div className="w-[132px] h-[50px] flex gap-2 items-center px-2 hover:rounded hover:border-white hover:cursor-pointer hover:border">
      <IoLocationOutline className="text-2xl text-white" />
      <div className="flex flex-col justify-center items-start text-white">
        <span className="text-sm text-gray-200">Deliver to</span>
        <span className="text-lg font-bold">Egypt</span>
      </div>
    </div>
  );
};
