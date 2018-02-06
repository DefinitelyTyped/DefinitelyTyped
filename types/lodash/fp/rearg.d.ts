import _ = require("../index");

declare namespace Lodash {
    interface Rearg {
        (): Rearg;
        (...indexes: Array<_.Many<number>>): Rearg1x1;
        (...indexes: Array<_.Many<number>>, func: (...args: any[]) => any): (...args: any[]) => any;
    }
    interface Rearg1x1 {
        (): Rearg1x1;
        (func: (...args: any[]) => any): (...args: any[]) => any;
    }
}

declare const rearg: Lodash.Rearg;
export = rearg;
