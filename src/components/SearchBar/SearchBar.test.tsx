import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar Component (Dumb)", () => {
  test("updates input value and invokes onSearch callback on submit", () => {
    const handleSearchMock = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
      <SearchBar onSearch={handleSearchMock} />,
    );

    const input = getByPlaceholderText(
      /Куди ви хочете поїхати/i,
    ) as HTMLInputElement;
    const submitBtn = getByRole("button", { name: /знайти/i });

    // Емуляція введення тексту користувачем
    fireEvent.change(input, { target: { value: "Італія" } });
    expect(input.value).toBe("Італія");

    // Емуляція кліку на кнопку пошуку
    fireEvent.click(submitBtn);

    // Перевіряємо, чи викликався колбек із правильним значенням
    expect(handleSearchMock).toHaveBeenCalledTimes(1);
    expect(handleSearchMock).toHaveBeenCalledWith("Італія");
  });
});
