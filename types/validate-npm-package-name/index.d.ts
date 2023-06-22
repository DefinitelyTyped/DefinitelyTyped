// Type definitions for validate-npm-package-name 4.0
// Project: https://github.com/npm/validate-npm-package-name
// Definitions by: Florian Keller <https://github.com/ffflorian>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace validate {
    interface Results {
        validForNewPackages: boolean;
        validForOldPackages: boolean;
        errors?: string[] | undefined;
        warnings?: string[] | undefined;
    }

    interface ValidNames extends Results {
        validForNewPackages: true;
        validForOldPackages: true;
    }

    interface InvalidNames extends Results {
        validForNewPackages: false;
        validForOldPackages: false;
        errors: string[];
    }

    interface LegacyNames extends Results {
        validForNewPackages: false;
        validForOldPackages: true;
        warnings: string[];
    }
}

declare function validate(name: string): validate.ValidNames | validate.InvalidNames | validate.LegacyNames;

export = validate;
