import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter component", () => {
  test("renders with initial count of 0", () => {
    render(<Counter />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("count is 0");

    const value = Number(button.textContent.replace("count is ", ""));
    expect(value).toBe(0);
    expect(button.textContent).not.toBeNull();
    expect(typeof value).toBe("number");
  });

  test("increments count on click", () => {
    render(<Counter />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
  });

  test("updated count value remains a number", () => {
    render(<Counter />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    const value = Number(button.textContent.replace("count is ", ""));
    expect(typeof value).toBe("number");
  });
});