# JavaScript Unit Testing - The Practical Guide

This repository contains code snapshots and notes taken from JavaScript Unit Testing - The Practical Guide course.

---

## 03-Basics

-   We start with the **basic-testing-fontend** folder,and _src/util/math.js_ function as a unit.
-   Create **math.test.js** file which will execute automoatically with vitest test runner that is configured in package.json. `vitest --run --reporter verbose` is set as a test command, if you also add ` --globals` at the end, then you do not need to import any test commands at the top of test scripts.
-   Run the tests with `npm test` command.
-   The `--reporter verbose` flags will give the details.
-   If you want to watch the test continuously, you can run `npm run test:watch` command which watches for any changes to the test and automatically reexecutes them.
-   Same tests can also be run for backend projects.
