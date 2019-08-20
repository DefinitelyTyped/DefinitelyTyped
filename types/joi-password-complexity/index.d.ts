// Type definitions for joi-password-complexity 3.1
// Project: https://github.com/kamronbatman/joi-password-complexity
// Definitions by: Nico Flaig <https://github.com/nflaig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// tslint:disable-next-line:no-unnecessary-class
declare class PasswordComplexity {
    constructor(options?: PasswordComplexity.ComplexityOptions);
}

declare namespace PasswordComplexity {
    interface ComplexityOptions {
        min: number;
        max: number;
        lowerCase: number;
        upperCase: number;
        numeric: number;
        symbol: number;
        requirementCount: number;
    }
}

export = PasswordComplexity;
