// This is necessary to disallow import of `has-package-exports/conditional.js`:
// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'has-package-exports/conditional' {
    /**
     * Whether the current environment supports conditional `exports` in `package.json`.
     *
     * Is `null` in a bundled browser environment.
     */
    const hasPackageExportsConditional: boolean | null;
    export = hasPackageExportsConditional;
}
