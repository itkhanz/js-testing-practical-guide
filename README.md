# JavaScript Unit Testing - The Practical Guide

This repository contains code snapshots and notes taken from JavaScript Unit Testing - The Practical Guide course.

---

## 06 - More Key Testing Library APIs

-   Testing Asynchronus Code
-   Using Setup & Cleanup Hooks
-   Concurrent Tests

---

### toBe vs toEqual

toBe checks for the exact equality thats is why it does not work for objects or arrays that are reference values in JavaScript and stored in different memory locations, so we use `toEqual()` instead

### Testing asynchronus code with callbacks

add an extra parameter `done` to the `it` so that the assertion should wait for the asynchronus function done to complete

### why Hooks

To reduce the code duplication and perform actions that need to be done before and after multiple tests we can make use of the Hooks

### Concurrent tests

-   To speedup the overall test execution, tests can be run concurrently by adding the `concurrent` annotation to `it` or the `describe` so that all the tests in suite will run concurrently. - Even when not adding the `.concurrent` property / annotation, tests that are stored in different files are executed concurrently (i.e., in parallel). This is done by both Vitest and Jest - ensuring that your tests run in a short amount of time.
-   With `.concurrent` you can enforce this behavior also inside the individual files (i.e., tests that live in one and the same file are executed concurrently).
-   Concurrent execution can reduce the amount of time your tests need to execute. A downside of concurrent execution is, that tests that perform clashing (global) state manipulations may interfere with each other.
