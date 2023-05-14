import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders search input", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders dropdown when search term is entered", async () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "John" } });

    const dropdownItem = await screen.findByText(/John/);
    expect(dropdownItem).toBeInTheDocument();
  });
});
