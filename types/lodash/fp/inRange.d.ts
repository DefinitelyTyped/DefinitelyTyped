import _ = require("../index");

declare namespace Lodash {
    interface InRange {
        (): InRange;
        (end: number): InRange1x1;
        (end: number, n: number): InRange1x2;
        (end: number, n: number, start: number): boolean;
    }
    interface InRange1x1 {
        (): InRange1x1;
        (n: number): InRange1x2;
        (n: number, start: number): boolean;
    }
    interface InRange1x2 {
        (): InRange1x2;
        (start: number): boolean;
    }
}

declare const inRange: Lodash.InRange;
export = inRange;
