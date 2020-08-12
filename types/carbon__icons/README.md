All these typings are automatically generated.
**Do not manually update the typings files, update the script instead.**

## Getting started
1. Compile the `generate.ts` file with the following command `tsc generate.ts --module commonjs --outDir build`. (You can use `./node_modules/.bin/tsc` instead of `tsc`)
2. Re-generate the typings with the following command `node ./build/generate.js -- ${PATH}`, where `PATH` is a variable to your checkout of the repository.
3. Verify your code with the test.
4. Check the lint: `npm run lint carbon__icons`.
5. You're ready to propose a new PR.

## What's generated ?
* `build` folder.
* `typings` folder.
* `index.d.ts` file.
* `carbon__icons-tests.ts` file.