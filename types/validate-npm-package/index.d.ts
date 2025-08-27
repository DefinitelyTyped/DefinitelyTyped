/**
 * Validate a package.json file
 * @see {@link https://www.npmjs.com/package/validate-npm-package-name#naming-rules}
 * @see {@link https://www.npmjs.com/package/validate-npm-package-license}
 */
declare function isValidPkg(pck: object): isValidPkg.ValidNames | isValidPkg.InvalidNames | isValidPkg.LegacyNames;

declare namespace isValidPkg {
    interface ValidNames {
        validForNewPackages: true;
        validForOldPackages: true;
    }

    interface InvalidNames {
        validForNewPackages: false;
        validForOldPackages: false;
        errors: string[];
    }

    interface LegacyNames {
        validForNewPackages: false;
        validForOldPackages: true;
        warnings: string[];
    }
}

export = isValidPkg;
