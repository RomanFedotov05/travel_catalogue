import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { setSortBy } from "../../store/toursSlice";
import { TourCard } from "../TourCard/TourCard";
import { FilterBar } from "../FilterBar/FilterBar";

export const TourList: React.FC = () => {
  const dispatch = useDispatch();
  const { items, searchQuery, sortBy } = useSelector(
    (state: RootState) => state.tours,
  );

  // Фільтрація за пошуковим запитом (за назвою або країною)
  const filteredTours = items.filter(
    (tour) =>
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Сортування (за рейтингом від більшого, за ціною від меншого)
  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    return a.price - b.price;
  });

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
