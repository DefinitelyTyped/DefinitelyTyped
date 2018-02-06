import _ = require("../index");

declare namespace Lodash {
    interface ParseInt {
        (): ParseInt;
        (radix: number): ParseInt1x1;
        (radix: number, string: string): number;
    }
    interface ParseInt1x1 {
        (): ParseInt1x1;
        (string: string): number;
    }
}

declare const parseInt: Lodash.ParseInt;
export = parseInt;
