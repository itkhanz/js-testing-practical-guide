import { it, expect } from "vitest";
import { vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");

it("should execute the writeFile method", () => {
    const testData = "Test";
    const testFilename = "test.txt";

    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    writeData(testData, testFilename);
    expect(fs.writeFile).toBeCalled();
});
