// Type definitions for has-package-exports 1.2
// Project: https://github.com/inspect-js/has-package-exports#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This is necessary to disallow import of `has-package-exports/index` or `has-package-exports/index.js`:
// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'has-package-exports' {
    /**
     * Whether the current environment supports the `exports` field in `package.json`.
     *
     * Is `null` in a bundled browser environment.
     */
    const hasPackageExports: boolean | null;
    export = hasPackageExports;
}
