import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";
import egyptFlag from "@/public/egypt-flag-icon.png";
export const Languages = () => {
  return (
    <Select>
      <SelectTrigger className="max-w-fit flex gap-1 border-0 text-white hover:border hover:border-white rounded-none bg-black outline-none ring-offset-transparent">
        <Image src={egyptFlag} alt="Egypt" priority width={24} height={24} />
        <SelectValue placeholder="En" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">AR</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
};
