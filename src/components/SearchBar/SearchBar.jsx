import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        className="bg-white rounded-full text-black py-2 px-5"
        type="text"
        placeholder="Search"
      />
      <div>
        <Search size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
