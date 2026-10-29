import React from "react";
import type { Tour } from "../../store/toursSlice";

interface TourCardProps {
  tour: Tour;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="tourCard">
      <img src={tour.imageUrl} alt={tour.title} className="cardImg" />
      <div className="cardBody">
        <div className="cardHeader">
          <h3 className="cardTitle">{tour.title}</h3>
          <span className="cardPrice">${tour.price}</span>
        </div>
        <div className="cardMeta">
          <span>Країна: {tour.country}</span>
          <span>⭐ {tour.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};
