import { render, screen } from "@testing-library/react";
import assert from "assert";
import { request } from "../utils/api";

// test("CALL API", () => {
//   request("https://demo8878015.mockable.io/mangoExercise1").then((result) => {
//     expect(190).toBeWithinRange(result);
//   });
// });

// it("works with async/await and resolves", async () => {
//   // expect.assertions(1);
//   await expect(
//     request("https://demo8878015.mockable.io/mangoExercise11").then((res) => {
//       expect(100).toBeWithinRange(res);
//     })
//   );
// });

// describe("Fizz Buzz", () => {
//   it("1 - get fizz for multiples of 3", () => {});

//   console.log(process.argv, process.argv[2]);
// });
// https://www.youtube.com/watch?v=4Fl5GH4eYZ8
test("Should return the Range", () => {
  request("https://demo8878015.mockable.io/mangoExercise1").then((result) => {
    // expect(result).toBeWithinRange(10022);
    expect(result[0]).toBe();
  });
});
