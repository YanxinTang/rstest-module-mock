## Version

```
System:
    OS: macOS 15.2
    CPU: (8) arm64 Apple M1
    Memory: 93.91 MB / 16.00 GB
    Shell: 5.9 - /bin/zsh
  Browsers:
    Chrome: 139.0.7258.139
    Safari: 18.2
  npmPackages:
    @rstest/core: ^0.3.1 => 0.3.1
```

## installation

```sh
pnpm install
```

## `pnpm run rstest`

**expected all tests are passed but the reExportedSum case is failed**

```
(base) username@MacBookPro rstest-module-mock % pnpm run rstest

> rstest-module-mock@1.0.0 rstest /Users/username/Developer/Javascript/rstest-module-mock
> rstest

  Rstest v0.3.1

 ✗ rstests/module.test.ts (2)
  ✗ reExportedSum (4ms)
    expected 3 to be 103 // Object.is equality

Summary of all failing tests:

 FAIL  rstests/module.test.ts > reExportedSum
AssertionError: expected 3 to be 103 // Object.is equality

- Expected
+ Received

- 103
+ 3

  15 |
  16 | test("reExportedSum", () => {
> 17 |   expect(reExportedSum(1, 2)).toBe(103); // expected 103, got 3 actically
     |                               ^
  18 | });
  19 |

        at rstests/module.test.ts:17:31


 Test Files 1 failed
      Tests 1 failed | 1 passed (2)
   Duration 101ms (build 69ms, tests 32ms)

 ELIFECYCLE  Command failed with exit code 1.
```

## `pnpm run vitest`

```
(base) username@MacBookPro rstest-module-mock % pnpm run vitest

> rstest-module-mock@1.0.0 vitest /Users/username/Developer/Javascript/rstest-module-mock
> vitest


 DEV  v3.2.4 /Users/username/Developer/Javascript/rstest-module-mock

 ✓ vitests/module.test.ts (2 tests) 1ms
   ✓ sum 1ms
   ✓ reExportedSum 0ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  00:27:00
   Duration  205ms (transform 22ms, setup 0ms, collect 19ms, tests 1ms, environment 0ms, prepare 52ms)

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
