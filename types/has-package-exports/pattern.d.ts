// This is necessary to disallow import of `has-package-exports/pattern.js`:
// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'has-package-exports/pattern' {
    /**
     * Whether the current environment supports pattern `exports` in `package.json`.
     */
    const hasPackageExportsPattern: boolean;
    export = hasPackageExportsPattern;
}
