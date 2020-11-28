// Type definitions for validate-npm-package-name 3.0
// Project: https://github.com/npm/validate-npm-package-name
// Definitions by: Florian Keller <https://github.com/ffflorian>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace validate {
    let scopedPackagePattern: RegExp;

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

declare function validate(name: string): validate.ValidNames | validate.InvalidNames | validate.LegacyNames;

export = validate;
