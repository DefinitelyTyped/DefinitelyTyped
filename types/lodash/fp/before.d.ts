import _ = require("../index");

declare namespace Lodash {
    interface Before {
        (): Before;
        (func: TFunc): Before1x1;
        (func: TFunc, ...args: any[]) => any>(
                n: number): TFunc;
    }
    interface Before1x1 {
        (): Before1x1;
        (...args: any[]) => any>(
                n: number): TFunc;
    }
}

declare const before: Lodash.Before;
export = before;
