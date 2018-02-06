import _ = require("../index");

declare namespace Lodash {
    interface After {
        (): After;
        (func: TFunc): After1x1;
        (func: TFunc, ...args: any[]) => any>(
                n: number): TFunc;
    }
    interface After1x1 {
        (): After1x1;
        (...args: any[]) => any>(
                n: number): TFunc;
    }
}

declare const after: Lodash.After;
export = after;
