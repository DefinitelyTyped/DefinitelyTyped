Please fill in this template.

- [x] Use a meaningful title for the pull request. Include the name of the package modified.
- [x] Test the change in your own code. (Compile and run.)
- [x] Add or edit tests to reflect the change. (Run with `npm test`.)
- [x] Follow the advice from the [readme](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#make-a-pull-request).
- [x] Avoid [common mistakes](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#common-mistakes).
- [x] Run `npm run lint package-name` (or `tsc` if no `tslint.json` is present).

Select one of these and delete the others:

If adding a new definition:
- [x] The package does not already provide its own types, or cannot have its `.d.ts` files generated via `--declaration`
- [x] If this is for an NPM package, match the name. If not, do not conflict with the name of an NPM package.
- [x] Create it with `dts-gen --dt`, not by basing it on an existing project.
- [x] `tslint.json` should be present, and `tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, and `strictFunctionTypes` set to `true`.
