import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/toursSlice";
import { SearchBar } from "..//../components/SearchBar/SearchBar";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const dispatch = useDispatch();

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <header className="header">
      <div className="logo">
        travel<span>roulette</span>
      </div>
      <h1 className="title">{title}</h1>
      <SearchBar onSearch={handleSearch} />
    </header>
  );
};
