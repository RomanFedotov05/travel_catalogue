import React from "react";

interface FilterBarProps {
  count: number;
  currentSort: "price" | "rating";
  onSortChange: (sort: "price" | "rating") => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  count,
  currentSort,
  onSortChange,
}) => {
  return (
    <div className="filterBar">
      <div className="filterCount">
        Знайдено турів: <strong>{count}</strong>
      </div>
      <div className="sortGroup">
        <span>Сортувати за:</span>
        <span
          className={`sortOption ${currentSort === "rating" ? "sortOptionActive" : ""}`}
          onClick={() => onSortChange("rating")}
        >
          Рейтингом
        </span>
        <span
          className={`sortOption ${currentSort === "price" ? "sortOptionActive" : ""}`}
          onClick={() => onSortChange("price")}
        >
          Ціною
        </span>
      </div>
    </div>
  );
};
