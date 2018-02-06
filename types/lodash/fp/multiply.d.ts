import _ = require("../index");

declare namespace Lodash {
    interface Multiply {
        (): Multiply;
        (multiplicand: number): Multiply1x1;
        (multiplicand: number, multiplier: number): number;
    }
    interface Multiply1x1 {
        (): Multiply1x1;
        (multiplier: number): number;
    }
}

declare const multiply: Lodash.Multiply;
export = multiply;
