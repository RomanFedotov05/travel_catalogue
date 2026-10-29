import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export const TourDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tour = useSelector((state: RootState) =>
    state.tours.items.find((item) => item.id === id),
  );

  if (!tour) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2>Тур не знайдено</h2>
        <p style={{ margin: "15px 0", color: "#888" }}>
          Можливо, ви перейшли за застарілим посиланням.
        </p>
        <Link
          to="/"
          style={{
            color: "#f65261",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Повернутися до каталогу
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 0" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "transparent",
          border: "1px solid #555",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Назад
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          backgroundColor: "#2e2e2e",
          padding: "30px",
          borderRadius: "8px",
        }}
      >
        <img
          src={tour.imageUrl}
          alt={tour.title}
          style={{
            width: "100%",
            maxHeight: "420px",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <span
            style={{
              color: "#f65261",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {tour.country}
          </span>
          <h1 style={{ fontSize: "32px", margin: 0 }}>{tour.title}</h1>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#f65261",
              margin: 0,
            }}
          >
            ${tour.price}
          </p>
          <p style={{ color: "#aaa", lineHeight: "1.6" }}>
            Прекрасна подорож до країни {tour.country}. Програма туру включає
            екскурсії, комфортне проживання, трансфер та супровід гіда.
          </p>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <span>
              Рейтинг туру: ⭐ <strong>{tour.rating.toFixed(1)}</strong> / 5.0
            </span>
            <button
              onClick={() =>
                alert(`Бронювання туру "${tour.title}" успішно відправлено!`)
              }
              className="searchBtn"
              style={{ marginLeft: "auto" }}
            >
              Забронювати
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
