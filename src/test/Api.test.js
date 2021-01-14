import { render, screen } from "@testing-library/react";
import assert from "assert";
import { request } from "../utils/api";

test("1 - EX1 - Should return a Range", () => {
  request("https://demo8878015.mockable.io/mangoExercise1").then((result) => {
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(1000);
  });
});

test("2 - EX2 - Should return an Array", () => {
  request("http://demo8878015.mockable.io/mangoExercise2").then((result) => {
    expect(result.length).toBe(6);
    expect(result).toBeWithinRange(70.99);
  });
});

test("1 - EX1 - Should return a Range", () => {
  request("https://demo8878015.mockable.io/mangoRangeValues").then((result) => {
    expect(result).toBeWithinRange(100);
  });
});
