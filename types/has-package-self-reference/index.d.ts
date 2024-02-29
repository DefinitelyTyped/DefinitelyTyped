// This is necessary to disallow import of `has-package-self-reference/index` or `has-package-self-reference/index.js`:
// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "has-package-self-reference" {
    /**
     * Whether the current environment supports self-reference for packages
     * with the `exports` field in `package.json`.
     *
     * Is `null` in a bundled browser environment.
     */
    const hasPackageSelfReference: boolean | null;
    export = hasPackageSelfReference;
}
