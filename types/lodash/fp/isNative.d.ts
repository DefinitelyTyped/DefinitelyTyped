import _ = require("../index");

declare namespace Lodash {
    interface IsNative {
        (): IsNative;
        (value: any): value is (...args: any[]) => any;
    }
}

declare const isNative: Lodash.IsNative;
export = isNative;
