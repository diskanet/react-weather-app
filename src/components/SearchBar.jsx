import React from "react";

export const SearchBar = (props) => {
  return (
    <form>
      <input type="text" name="city" placeholder="Enter city..." />
      <button>Find</button>
    </form>
  );
};
