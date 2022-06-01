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
