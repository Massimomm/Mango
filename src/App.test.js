import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Range Controls link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Range Controls/i);
  expect(linkElement).toBeInTheDocument();
});
