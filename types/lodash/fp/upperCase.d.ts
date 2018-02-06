import _ = require("../index");

declare namespace Lodash {
    interface UpperCase {
        (): UpperCase;
        (string: string): string;
    }
}

declare const upperCase: Lodash.UpperCase;
export = upperCase;
