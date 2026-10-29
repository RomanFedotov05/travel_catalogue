import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";

describe("App Component", () => {
  test("renders header, search bar, and initial tours", () => {
    const { getByPlaceholderText, getAllByText, getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    // Перевірка наявності поля пошуку та кнопки
    expect(getByPlaceholderText(/Куди ви хочете поїхати/i)).toBeInTheDocument();
    expect(getByRole("button", { name: /знайти/i })).toBeInTheDocument();

    // Перевірка карток турів, які підвантажуються зі сховища Redux
    expect(getAllByText(/Альпійська казка/i)[0]).toBeInTheDocument();
    expect(getAllByText(/Пляжі Балі та Убуд/i)[0]).toBeInTheDocument();
  });
});
