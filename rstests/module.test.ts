import { expect, rs, test } from "@rstest/core";

import { sum } from "../src/sum";
import { sum as reExportedSum } from "../src";

rs.mock("../src/sum", () => {
  return {
    sum: (a: number, b: number) => a + b + 100,
  };
});

test("sum", () => {
  expect(sum(1, 2)).toBe(103); // PASS
});

test("reExportedSum", () => {
  expect(reExportedSum(1, 2)).toBe(103); // expected 103, got 3 actically
});
