import _ = require("../index");

declare namespace Lodash {
    interface IsFunction {
        (): IsFunction;
        (value: any): value is (...args: any[]) => any;
    }
}

declare const isFunction: Lodash.IsFunction;
export = isFunction;
