import _ = require("../index");

declare namespace Lodash {
    interface Iteratee {
        (): Iteratee;
        (...args: any[]) => any>(
                func: TFunction | string | object): TFunction;
    }
}

declare const iteratee: Lodash.Iteratee;
export = iteratee;
