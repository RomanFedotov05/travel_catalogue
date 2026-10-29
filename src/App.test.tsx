import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";

describe("App Component", () => {
  test("renders header, search bar, loader and async tours", async () => {
    const { getByPlaceholderText, getByRole, findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    // 1. Синхронні елементи, які є на екрані одразу
    expect(getByPlaceholderText(/Куди ви хочете поїхати/i)).toBeInTheDocument();
    expect(getByRole("button", { name: /знайти/i })).toBeInTheDocument();

    // 2. Асинхронне очікування завантаження турів через API (findByText чекає завершення запиту)
    const tourTitle = await findByText(
      /Альпійська казка/i,
      {},
      { timeout: 3000 },
    );
    expect(tourTitle).toBeInTheDocument();

    const secondTour = await findByText(
      /Пляжі Балі та Убуд/i,
      {},
      { timeout: 3000 },
    );
    expect(secondTour).toBeInTheDocument();
  });
});
