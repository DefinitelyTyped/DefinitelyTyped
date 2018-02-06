import _ = require("../index");

declare namespace Lodash {
    interface Clamp {
        (): Clamp;
        (upper: number): Clamp1x1;
        (upper: number, number: number): Clamp1x2;
        (upper: number, number: number, lower: number): number;
    }
    interface Clamp1x1 {
        (): Clamp1x1;
        (number: number): Clamp1x2;
        (number: number, lower: number): number;
    }
    interface Clamp1x2 {
        (): Clamp1x2;
        (lower: number): number;
    }
}

declare const clamp: Lodash.Clamp;
export = clamp;
