import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { App } from "./App";

describe("App Component", () => {
  test("renders header, search bar, and handles async tours", async () => {
    const { getByPlaceholderText, getByRole, findByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByPlaceholderText(/Куди ви хочете поїхати/i)).toBeInTheDocument();
    expect(getByRole("button", { name: /знайти/i })).toBeInTheDocument();

    const tourTitle = await findByText(
      /Альпійська казка/i,
      {},
      { timeout: 3000 },
    );
    expect(tourTitle).toBeInTheDocument();
  });
});
