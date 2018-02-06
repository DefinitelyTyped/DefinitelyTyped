import _ = require("../index");

declare namespace Lodash {
    interface Subtract {
        (): Subtract;
        (subtrahend: number): Subtract1x1;
        (subtrahend: number, minuend: number): number;
    }
    interface Subtract1x1 {
        (): Subtract1x1;
        (minuend: number): number;
    }
}

declare const subtract: Lodash.Subtract;
export = subtract;
