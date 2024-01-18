import { SearchBarSelect } from "@/components/navbar/searchbar/selectbar";
import { SearchInput } from "@/components/navbar/searchbar/searchInput";
import { SearchIcon } from "@/components/navbar/searchbar/searchIcon";

export const SearchBar = () => {
  return (
    <div className="flex flex-1">
      <SearchBarSelect />
      <SearchInput />
      <SearchIcon />
    </div>
  );
};
