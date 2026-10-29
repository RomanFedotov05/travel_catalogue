import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import "./App.css";

export const App: React.FC = () => {
  const tours = useSelector((state: RootState) => state.tours.items);
  const appTitle = process.env.REACT_APP_TITLE || "Travel Agency Catalogue";

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">{appTitle}</h1>
        <p className="subtitle">Find your next dream destination and tours!</p>
      </header>

      <main className="tourGrid">
        {tours.map((tour) => (
          <div key={tour.id} className="tourCard">
            <h3>{tour.title}</h3>
            <p>
              Країна: <strong>{tour.country}</strong>
            </p>
            <p>
              Ціна: <strong>${tour.price}</strong> | Рейтинг: ⭐ {tour.rating}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};
