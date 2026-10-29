import React from "react";

export const Loader: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "60px 0" }}>
      <div
        style={{
          display: "inline-block",
          width: "46px",
          height: "46px",
          border: "4px solid rgba(255, 255, 255, 0.2)",
          borderTopColor: "#f65261",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p style={{ marginTop: "16px", color: "#aaaaaa", fontSize: "15px" }}>
        Завантаження каталогу турів...
      </p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
