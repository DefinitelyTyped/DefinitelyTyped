import _ = require("../index");

declare namespace Lodash {
    interface NthArg {
        (): NthArg;
        (n: number): (...args: any[]) => any;
    }
}

declare const nthArg: Lodash.NthArg;
export = nthArg;
