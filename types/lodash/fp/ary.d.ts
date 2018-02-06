import _ = require("../index");

declare namespace Lodash {
    interface Ary {
        (): Ary;
        (n: number): Ary1x1;
        (n: number, func: (...args: any[]) => any): (...args: any[]) => any;
    }
    interface Ary1x1 {
        (): Ary1x1;
        (func: (...args: any[]) => any): (...args: any[]) => any;
    }
}

declare const ary: Lodash.Ary;
export = ary;
