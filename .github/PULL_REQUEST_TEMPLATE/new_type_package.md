<!--
    Please fill in this template.
-->

## Checklist

-   [ ] Use a meaningful title for the pull request. Include the name of the package modified.
-   [ ] Test the change in your own code. (Compile and run.)
-   [ ] Add or edit tests to reflect the change. (Run with `npm test`.)
-   [ ] Follow the advice from the [readme](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#make-a-pull-request).
-   [ ] Avoid [common mistakes](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md#common-mistakes).
-   [ ] Run `npm run lint package-name` (or `tsc` if no `tslint.json` is present).
-   [ ] The package does not already provide its own types, or cannot have its `.d.ts` files generated via `--declaration`
-   [ ] If this is for an NPM package, match the name. If not, do not conflict with the name of an NPM package.
-   [ ] Create it with `dts-gen --dt`, not by basing it on an existing project.
-   [ ] `tslint.json` should be present, and `tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, and `strictFunctionTypes` set to `true`.
