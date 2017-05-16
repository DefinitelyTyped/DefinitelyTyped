Please fill in this template.

- [ ] Use a meaningful title for the pull request. Include the name of the package modified.
- [ ] Test the change in your own code. (Compile and run.)
- [ ] Follow the advice from the [readme](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#make-a-pull-request).
- [ ] Avoid [common mistakes](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#common-mistakes).
- [ ] Run `npm run lint package-name` (or `tsc` if no `tslint.json` is present).

Select one of these and delete the others:

If adding a new definition:
- [ ] The package does not provide its own types, and you can not add them.
- [ ] If this is for an NPM package, match the name. If not, do not conflict with the name of an NPM package.
- [ ] Create it with `dts-gen --dt`, not by basing it on an existing project.
- [ ] `tslint.json` should be present, and `tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, and `strictNullChecks` set to `true`.

If changing an existing definition:
- [ ] Provide a URL to documentation or source code which provides context for the suggested changes: <<url here>>
- [ ] Increase the version number in the header if appropriate.
- [ ] If you are making substantial changes, consider adding a `tslint.json` containing `{ "extends": "dtslint/dt.json" }`.

If removing a declaration:
- [ ] If a package was never on DefinitelyTyped, you don't need to do anything. (If you wrote a package and provided types, you don't need to register it with us.)
- [ ] Delete the package's directory.
- [ ] Add it to `notNeededPackages.json`.
