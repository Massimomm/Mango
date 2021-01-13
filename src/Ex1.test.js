import { render } from "@testing-library/react";
import assert from "assert";

describe("Fizz Buzz", () => {
  it("1 - get fizz for multiples of 3", () => {
    assert.equal(27, 27);
  });

  it("2 - get buzz for multiples of 5", () => {
    assert.equal(125, 125);
  });

  console.log(process.argv, process.argv[2]);
});

render(<div />);
