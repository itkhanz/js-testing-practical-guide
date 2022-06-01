import { expect, it } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

//Testing callback functions
it("should generate a token value", (done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            // expect(token).toBe(22);
            done();
        } catch (err) {
            done(err);
        }
    });
});

//Testing with Promises
it("should generate a token value", () => {
    const testUserEmail = "test@test.com";

    //you should actually return the promise assertion in your tests
    //This guarantees that Vitest / Jest wait for the promise to be resolved.
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

//Testing with async/await
it("should generate a token value", async () => {
    const testUserEmail = "test@test.com";

    const token = await generateTokenPromise(testUserEmail);

    //You don't need to return when using async / await (since a function annotated with async returns a promise implicitly).
    expect(token).toBeDefined();
});
