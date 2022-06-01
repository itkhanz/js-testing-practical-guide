import { it, expect } from "vitest";
import { vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1];
            },
        },
    };
});

it("should execute the writeFile method", () => {
    const testData = "Test";
    const testFilename = "test.txt";

    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    writeData(testData, testFilename);
    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
