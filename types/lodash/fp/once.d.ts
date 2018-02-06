import _ = require("../index");

declare namespace Lodash {
    interface Once {
        (): Once;
        (...args: any[]) => any>(func: T): T;
    }
}

declare const once: Lodash.Once;
export = once;
