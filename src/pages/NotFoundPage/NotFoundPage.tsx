import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1 style={{ fontSize: "72px", color: "#f65261", margin: 0 }}>404</h1>
      <h2 style={{ margin: "15px 0" }}>Сторінку не знайдено</h2>
      <p style={{ color: "#888", marginBottom: "25px" }}>
        Запитувана сторінка не існує або була переміщена.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#f65261",
          color: "#fff",
          padding: "10px 24px",
          textDecoration: "none",
          borderRadius: "4px",
          fontWeight: 600,
        }}
      >
        На головну
      </Link>
    </div>
  );
};
