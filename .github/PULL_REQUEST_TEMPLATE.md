Please fill in this template.

- [ ] Use a meaningful title for the pull request. Include the name of the package modified.
- [ ] Test the change in your own code. (Compile and run.)
- [ ] Add or edit tests to reflect the change. (Run with `npm test YOUR_PACKAGE_NAME`.)
- [ ] Follow the advice from the [readme](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#make-a-pull-request).
- [ ] Avoid [common mistakes](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#common-mistakes).
- [ ] Run `npm run lint package-name` (or `tsc` if no `tslint.json` is present).

Select one of these and delete the others:

If adding a new definition:
- [ ] The package does not already provide its own types, or cannot have its `.d.ts` files generated via `--declaration`
- [ ] If this is for an NPM package, match the name. If not, do not conflict with the name of an NPM package.
- [ ] Create it with `dts-gen --dt`, not by basing it on an existing project.
- [ ] Represents shape of module/library [correctly](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html)
- [ ] `tslint.json` should be present and it shouldn't have any additional or disabling of rules. Just content as `{ "extends": "dtslint/dt.json" }`. If for reason the some rule need to be disabled, disable it for that line using `// tslint:disable-next-line [ruleName]`  and not for whole package so that the need for disabling can be reviewed.
- [ ] `tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, and `strictFunctionTypes` set to `true`.

If changing an existing definition:
- [ ] Provide a URL to documentation or source code which provides context for the suggested changes: <<url here>>
- [ ] If this PR brings the type definitions up to date with a new version of the JS library, update the version number in the header.
- [ ] Include [tests for your changes](https://github.com/DefinitelyTyped/DefinitelyTyped#testing)
- [ ] If you are making substantial changes, consider adding a `tslint.json` containing `{ "extends": "dtslint/dt.json" }`. If for reason the any rule need to be disabled, disable it for that line using `// tslint:disable-next-line [ruleName]` and not for whole package so that the need for disabling can be reviewed.

If removing a declaration:
- [ ] If a package was never on Definitely Typed, you don't need to do anything. (If you wrote a package and provided types, you don't need to register it with us.)
- [ ] Delete the package's directory.
- [ ] Add it to `notNeededPackages.json`.
