import _ = require("../index");

declare namespace Lodash {
    interface Divide {
        (): Divide;
        (divisor: number): Divide1x1;
        (divisor: number, dividend: number): number;
    }
    interface Divide1x1 {
        (): Divide1x1;
        (dividend: number): number;
    }
}

declare const divide: Lodash.Divide;
export = divide;
