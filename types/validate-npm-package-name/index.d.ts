// Type definitions for validate-npm-package-name 3.0
// Project: https://github.com/npm/validate-npm-package-name
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace validate {
    let scopedPackagePattern: RegExp;

    interface Result {
        errors?: string[];
        validForNewPackages: boolean;
        validForOldPackages: boolean;
        warnings?: string[];
    }
}

declare function validate(name: string): validate.Result;

export = validate;
