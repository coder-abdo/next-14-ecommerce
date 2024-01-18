import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/utils";
import React from "react";

export const SearchBarSelect = () => {
  return (
    <Select>
      <SelectTrigger className="max-w-max rounded-tl rounded-bl flex-grow focus:border-orange-400 border border-gray-300 rounded-tr-none rounded-br-none outline-none bg-gray-200">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category, idx) => (
          <SelectItem className="capitalize" value={category} key={idx}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
