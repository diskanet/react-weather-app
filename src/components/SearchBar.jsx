import React from "react";

export const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <form onSubmit={onSearch} className="flex flex-1 gap-12">
      <input
        className="input-style flex-1"
        type="search"
        name="city"
        value={value}
        onChange={onChange}
        placeholder="Enter city..."
      />
      <button type="submit" className="button-style flex align-center justify-center">Find</button>
    </form>
  );
};
