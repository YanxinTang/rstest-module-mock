import { expect, vi, test } from "vitest";

import { sum } from "../src/sum";
import { sum as reExportedSum } from "../src";

vi.mock("../src/sum", () => {
  return {
    sum: (a: number, b: number) => a + b + 100,
  };
});

test("sum", () => {
  expect(sum(1, 2)).toBe(103); // PASS
});

test("reExportedSum", () => {
  expect(reExportedSum(1, 2)).toBe(103); // PASS
});
