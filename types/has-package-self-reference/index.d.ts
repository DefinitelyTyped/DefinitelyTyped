// Type definitions for has-package-self-reference 1.0
// Project: https://github.com/inspect-js/has-package-self-reference#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This is necessary to disallow import of `has-package-self-reference/index` or `has-package-self-reference/index.js`:
// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'has-package-self-reference' {
    /**
     * Whether the current environment supports self-reference for packages
     * with the `exports` field in `package.json`.
     *
     * Is `null` in a bundled browser environment.
     */
    const hasPackageSelfReference: boolean | null;
    export = hasPackageSelfReference;
}
