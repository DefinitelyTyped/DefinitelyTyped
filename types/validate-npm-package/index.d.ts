// Type definitions for validate-npm-package 1.0
// Project: https://github.com/thejameskyle/validate-npm-package#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Validate a package.json file
 * @see {@link https://www.npmjs.com/package/validate-npm-package-name#naming-rules}
 * @see {@link https://www.npmjs.com/package/validate-npm-package-license}
 */
declare function validateNpmPackage(pck: object): validateNpmPackage.Result;

declare namespace validateNpmPackage {
    interface Result {
        errors: string[];
        validForNewPackages: boolean;
        validForOldPackages: boolean;
        warnings: string[];
    }
}

export = validateNpmPackage;
