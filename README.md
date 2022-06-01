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
