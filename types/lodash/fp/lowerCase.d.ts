import _ = require("../index");

declare namespace Lodash {
    interface LowerCase {
        (): LowerCase;
        (string: string): string;
    }
}

declare const lowerCase: Lodash.LowerCase;
export = lowerCase;
