import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { setSortBy, fetchTours } from "../../store/toursSlice";
import { TourCard } from "../TourCard/TourCard";
import { FilterBar } from "../FilterBar/FilterBar";
import { Loader } from "../Loader/Loader";

export const TourList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, searchQuery, sortBy, isLoading, error } = useSelector(
    (state: RootState) => state.tours,
  );

  // Ініціалізація завантаження даних під час монтування компонента
  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  // Фільтрація
  const filteredTours = items.filter(
    (tour) =>
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Сортування
  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    return a.price - b.price;
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0", color: "#f65261" }}>
        <p>{error}</p>
        <button
          onClick={() => dispatch(fetchTours())}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#f65261",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Спробувати знову
        </button>
      </div>
    );
  }

  return (
    <div>
      <FilterBar
        count={sortedTours.length}
        currentSort={sortBy}
        onSortChange={(sort) => dispatch(setSortBy(sort))}
      />

      {sortedTours.length === 0 ? (
        <div
          style={{ textAlign: "center", padding: "50px 0", color: "#999999" }}
        >
          <h3>Турів за вашим запитом не знайдено</h3>
        </div>
      ) : (
        <main className="tourGrid">
          {sortedTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </main>
      )}
    </div>
  );
};
