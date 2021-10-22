// Type definitions for validate-npm-package-license 3.0
// Project: https://github.com/kemitchell/validate-npm-package-license.js#readme
// Definitions by: Gabriel Fournier <https://github.com/carboneater>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace validateLicense {
    interface Result {
        inFile?: string | undefined;
        spdx?: true | undefined;
        unlicensed?: true | undefined;
        validForOldPackages: boolean;
        validForNewPackages: boolean;
        warnings?: string[] | undefined;
    }
}

declare function validateLicense(license: string): validateLicense.Result;

export = validateLicense;
