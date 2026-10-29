import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="searchBox">
      <input
        type="text"
        className="searchInput"
        placeholder="Куди ви хочете поїхати? (наприклад: Швейцарія, Рим)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit" className="searchBtn">
        Знайти
      </button>
    </form>
  );
};
