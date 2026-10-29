import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TourCard } from "./TourCard";
import type { Tour } from "../../store/toursSlice";

describe("TourCard Component (Dumb)", () => {
  const mockTour: Tour = {
    id: "test-1",
    title: "Тестовий тур у гори",
    country: "Австрія",
    price: 990,
    rating: 4.95,
    imageUrl: "https://example.com/test.jpg",
  };

  test("correctly renders tour details passed via props", () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <TourCard tour={mockTour} />
      </BrowserRouter>,
    );

    expect(getByText("Тестовий тур у гори")).toBeInTheDocument();
    expect(getByText(/Австрія/i)).toBeInTheDocument();
    expect(getByText("$990")).toBeInTheDocument();
    expect(getByText(/⭐ 5.0/i)).toBeInTheDocument();

    const image = getByAltText("Тестовий тур у гори") as HTMLImageElement;
    expect(image.src).toBe("https://example.com/test.jpg");
  });
});
