import _ = require("../index");

declare namespace Lodash {
    interface Negate {
        (): Negate;
        (...args: any[]) => any>(predicate: T): T;
    }
}

declare const negate: Lodash.Negate;
export = negate;
