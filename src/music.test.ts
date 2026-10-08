import { describe, it, expect } from "vitest";
import { songs } from "./music";

describe("music", () => {
  it("should have at least 3 items", () => {
    expect(songs.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Payphone'", () => {
    expect(songs).toContain("Payphone");
  });
});

