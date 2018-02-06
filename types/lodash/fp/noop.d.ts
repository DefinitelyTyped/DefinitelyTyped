import _ = require("../index");

declare namespace Lodash {
    interface Noop {
        (): Noop;
        (...args: any[]): void;
    }
}

declare const noop: Lodash.Noop;
export = noop;
