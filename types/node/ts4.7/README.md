# Tests with `lib-dom`

This directory **does not** contain separate types for use with TypeScript version 4.7 and below.  It is a "bogus" folder designed to force `dts-lint` to run a separate set of tests, with a separate tsconfig.  Tests included by `node-tests.ts` in this folder will execute with the `lib: ['dom']` compiler option.

Any existing tests (under `../ts4.8/test/`) that are expected to pass equally under server or browser environments should be included in the `node-tests.ts` entry point.  Any existing tests that would fail in a DOM environment -- for example, testing Node-specific extensions of global interfaces -- should *not* be included.  A separate test of the DOM-specific behavior may be included instead, see `./dom-events.ts` for an example.
