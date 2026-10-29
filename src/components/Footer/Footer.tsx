import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="logo">
        travel<span>roulette</span>
      </div>
      <p style={{ color: "#777777", fontSize: "13px" }}>
        © 2026 Travel Catalogue Project. Всі права захищено.
      </p>
    </footer>
  );
};
