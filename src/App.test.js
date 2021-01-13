import { render, screen } from "@testing-library/react";
import App from "./App";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";

test("1 - renders Range Controls text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Range Controls/i);
  expect(linkElement).toBeInTheDocument();
});

test("2 - renders FIXED RANGE text", () => {
  render(<Exercise1 mode={"normal"} />);
  const linkElement = screen.getByText(/NORMAL RANGE/i);
  expect(linkElement).toBeInTheDocument();
});

// test("renders a message", () => {
//   const { container, getByText } = render(<Exercise2 mode={"fixed"} />);
//   expect(screen.getByText("fixed")).toBeInTheDocument();
//   // expect(container.firstChild).toMatchInlineSnapshot(`
//   //   <h1>FIXED</h1>
//   // `);
// });
