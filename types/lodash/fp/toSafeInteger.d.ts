import _ = require("../index");

declare namespace Lodash {
    interface ToSafeInteger {
        (): ToSafeInteger;
        (value: any): number;
    }
}

declare const toSafeInteger: Lodash.ToSafeInteger;
export = toSafeInteger;
