// This is necessary to disallow import of `has-package-exports/pattern.js`:
// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "has-package-exports/pattern" {
    /**
     * Whether the current environment supports pattern `exports` in `package.json`.
     */
    const hasPackageExportsPattern: boolean;
    export = hasPackageExportsPattern;
}
