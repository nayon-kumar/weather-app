import { Search } from "lucide-react";

const SearchBar = ({ featchWeather, city, setCity }) => {
  const handleSearch = () => {
    if (city.trim() !== "") {
      featchWeather(city);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        className="bg-white rounded-full text-black py-2 px-5"
        type="text"
        placeholder="Search"
        onChange={(e) => setCity(e.target.value)}
      />
      <div onClick={handleSearch}>
        <Search size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
