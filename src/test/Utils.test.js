import { generateText } from "../utils/utils";

test("1 - should output a text with value", () => {
  const output = generateText("Price Range Selected", 70.99);
  expect(output).toBe("Price Range Selected 70.99 €");
});

test("2 - should output a text without value", () => {
  const output = generateText("Min and Max value can't be CROSSED");
  expect(output).toBe("Min and Max value can't be CROSSED");
});

test("3 - should output with a NULL value", () => {
  const output = generateText("Price Range Selected", null);
  expect(output).toBe("Price Range Selected");
});
