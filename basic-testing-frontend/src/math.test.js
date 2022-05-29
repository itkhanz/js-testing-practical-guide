import { expect } from "vitest";
import { it } from "vitest";
import { add } from "./math";

// you could also use test instead of it
it("should summarize all number values in an array", () => {
    const result = add([1, 2, 3]);
    expect(result).toBe(5);
});
