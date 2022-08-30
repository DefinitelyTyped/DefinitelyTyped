Please fill in this template.

- [ ] Use a meaningful title for the pull request. Include the name of the package modified.
- [ ] Test the change in your own code. (Compile and run.)
- [ ] [Add or edit tests](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#my-package-teststs) to reflect the change.
- [ ] Follow the advice from the [readme](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#make-a-pull-request).
- [ ] Avoid [common mistakes](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#common-mistakes).
- [ ] [Run `npm test <package to test>`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#running-tests).

Select one of these and delete the others:

If adding a new definition:
- [ ] The package does not already provide its own types, or cannot have its `.d.ts` files generated via `--declaration`
- [ ] If this is for an npm package, match the name. If not, do not conflict with the name of an npm package.
- [ ] Create it with `dts-gen --dt`, not by basing it on an existing project.
- [ ] Represents shape of module/library [correctly](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html)
- [ ] `tslint.json` [should contain](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#linter-tslintjson) `{ "extends": "@definitelytyped/dtslint/dt.json" }`, and no additional rules.
- [ ] `tsconfig.json` [should have](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#tsconfigjson) `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, and `strictFunctionTypes` set to `true`.

If changing an existing definition:
- [ ] Provide a URL to documentation or source code which provides context for the suggested changes: <<url here>>
- [ ] If this PR brings the type definitions up to date with a new version of the JS library, update the version number in the header.

If removing a declaration:
- [ ] If a package was never on Definitely Typed, you don't need to do anything. (If you wrote a package and provided types, you don't need to register it with us.)
- [ ] Delete the package's directory.
- [ ] Add it to `notNeededPackages.json`.
