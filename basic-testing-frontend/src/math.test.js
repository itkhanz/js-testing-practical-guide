import { expect } from "vitest";
import { it } from "vitest";
import { add } from "./math";

// you could also use test instead of it
it("should summarize all number values in an array", () => {
    // Arrange
    const numbers = [1, 2, 3];

    //Act
    const result = add(numbers);

    //Assert
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
    expect(result).toBe(expectedResult);
});

it("should yield NaN if atleast one invalid numkber is provided", () => {
    const inputs = ["invalid", 1];

    const result = add(inputs);

    expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2"];

    const result = add(numbers);

    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
    expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
        add();
    };
    expect(resultFn).toThrow();
});
