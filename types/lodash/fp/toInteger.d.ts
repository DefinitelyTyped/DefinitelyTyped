import _ = require("../index");

declare namespace Lodash {
    interface ToInteger {
        (): ToInteger;
        (value: any): number;
    }
}

declare const toInteger: Lodash.ToInteger;
export = toInteger;
