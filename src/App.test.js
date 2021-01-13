import { render, screen } from "@testing-library/react";
import App from "./App";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";

test("renders Range Controls text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Range Controls/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders FIXED RANGE text", () => {
  render(<Exercise1 mode={"fixed"} />);
  const linkElement = screen.getByText(/FIXED RANGE/i);
  expect(linkElement).toBeInTheDocument();
});
