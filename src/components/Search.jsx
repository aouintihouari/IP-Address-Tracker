import { useState } from "react";
import arrow from "/images/icon-arrow.svg";

const Search = ({ onSearch }) => {
  const [ipInput, setIpInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ipInput.trim()) {
      onSearch(ipInput);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex w-full max-w-lg items-center justify-center px-6 md:mt-20"
    >
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="h-12 w-full cursor-pointer rounded-l-2xl border-none bg-white p-4 text-lg outline-none md:h-14"
        value={ipInput}
        onChange={(e) => setIpInput(e.target.value)}
      />
      <button
        type="submit"
        className="flex h-12 w-14 cursor-pointer items-center justify-center rounded-r-2xl bg-black duration-300 hover:bg-gray-800 md:h-14 md:w-20"
      >
        <img src={arrow} alt="search" />
      </button>
    </form>
  );
};

export default Search;
