import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";

describe("App Component", () => {
  test("renders Travel Agency Catalogue header and tours from Redux store", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText(/Travel Agency Catalogue/i)).toBeInTheDocument();
    expect(getByText(/Альпійська казка/i)).toBeInTheDocument();
  });
});
