# JavaScript Unit Testing - The Practical Guide

This repository contains code snapshots and notes taken from JavaScript Unit Testing - The Practical Guide course.

---

## 07 - Mocking & Spies: Dealing with Side Effects

### The problem with Side Effects and Tests

While running the testc cases, side effects can occur if you are interacting with the production hard drives, databases or other backend APIS that perform some delte, write or other operations that could potentially be harmful.

### Spies

"Wrappers" around functions or empty replacement for functions that allow you to track if and how a function was called

### Mocks

A replacement for an API that may provide some test-specific behavior instead

#### Readings:

[Simple definition of stub, spy, fake and mock in unit testing](https://stackoverflow.com/questions/52131231/simple-definition-of-stub-spy-fake-and-mock-in-unit-testing)

[What's the difference between a mock & stub?](https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub)

## 08 - More on Mocking

-   Mocking Global Objects & Functions
-   Mocking Frontend Features
-   Examples
