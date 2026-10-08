import { describe, it, expect } from "vitest";
import { MY_SNACKS } from "./snacks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(MY_SNACKS.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Popcorn'", () => {
    expect(MY_SNACKS).toContain("Popcorn");
  });
});

