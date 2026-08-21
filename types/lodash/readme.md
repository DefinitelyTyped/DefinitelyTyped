# Notes for lodash developers

## Folder Structure

- Root
  - `index.d.ts`: this is the main file that will be imported when people do `import _ from "lodash"`.
    It references files for the lodash types.
  - `fp.d.ts`: like `index.d.ts`, but for the functional programming variant of lodash.
    See https://github.com/lodash/lodash/wiki/FP-Guide.
  - `lodash-tests.ts`: contains test cases. Update these as necessary when you make a change.
  - `tsconfig.json`: usually you shouldn't modify this file. However, if you add a new file, you should
    probably add it to the `files` list in `tsconfig.json`.
  - `tslint.json`: contains lint rules. The goal is to remove all of the rule overrides and match only the `dtslint/dt.json` rules.
  - All other files: these exist so people can import individual functions, e.g. `import * as flatMap from "lodash/flatMap"`
- `common` directory: contains the main lodash types, split into multiple files for maintainability reasons.
  These files are NOT meant to be imported directly - they should only be referenced by `index.d.ts`.
- `fp` directory: contains individual functions for `lodash/fp`. These files may be imported.
  You should not modify these scripts directly - you should use a script to re-generate them (see below).
- `scripts` directory: contains code generation scripts.
  - Before running any scripts, run `npm install` in this directory (it contains its own `package.json`).
  - Most notable script is `npm run generate`, which re-generates all of the `fp` files and `lowdb` wrapper extensions.
- `v3` directory: contains types for lodash v3.
- `ts3.1` directory: contains types for `typescript>=3.1.0-0` (See `typesVersions` in `package.json`), which are maintained separately from the files in the root.

## Different ways people might use lodash

- Importing
  - `import * as _ from "lodash"`
  - `import * as _ from "lodash/fp"`
  - `import { flatMap } from "lodash"`
  - `import { flatMap } from "lodash/fp"`
  - `import * as flatMap from "lodash/flatMap"`
  - `import * as flatMap from "lodash/fp/flatMap"`
  - `import * as flatMap from "lodash.flatmap"` (requires `npm install lodash.flatmap`)
  - `import _ = require("lodash")`
  - `import _ from "lodash"` (only if `esModuleInterop` is enabled)
- Global namespace

## Before creating a PR

- For every function you modify, don't forget to update the corresponding wrapper functions.
- If you want to add yourself to "Definitions by" section of the package header as described in the root README,
  you should add your name not only to `index.d.ts` but also the template string in `scripts/generate-modules.ts`
  since the script generates `lodash.*` packages which include the headers derived from the template.
- Re-generate the `fp` types by opening a terminal in the `scripts` directory and running `npm run generate`.
  - Note that this directory has its own `package.json`, so you'll need to run `npm install` first if you haven't already.
- Back at the root directory, do `npm run lint lodash` and make sure there are no errors.

## FAQ
- I'm fixing a bug in v4. Should I also update the v3 types?
  - In general, no.
- If the wrapper functions are almost copies of the original functions, shouldn't we auto-generate them like we do for `lodash/fp`?
  - Good idea! If you have time, submit a PR.
- When I ran `npm run lint lodash`, I got an error that looks like `<--- Last few GCs --->`.
  - Yeah, this error is really annoying. It means that node.js ran out of memory before it could run all of your tests.
    - If you see something like `Test with 2.6` before that error, it means that there's an error in an older version of typescript.
      The hard part is figuring out what the error is.
  - The general procedure for diagnosing these errors is:
    1. Delete half of the tests in `lodash-tests.ts` (either the top half or the bottom half).
      - If you delete the top half, don't delete the important stuff like `interface AbcObject`.
    2. Run `npm run lint lodash`.
    3. If it succeeds, add that half back and delete the other half.
    4. If it fails with a GC error, delete half of the remaining tests.
      - Note: If both halves succeed on their own, then the tests are probably just consuming too much memory. Try simplifying them until they pass.
    5. Repeat steps 1-4 until it gives you the real error message. Usually it's something obscure that only happens in TS 2.3/T.4,
       so commenting/modifying the test is usually the best solution.
