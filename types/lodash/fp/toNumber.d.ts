import _ = require("../index");

declare namespace Lodash {
    interface ToNumber {
        (): ToNumber;
        (value: any): number;
    }
}

declare const toNumber: Lodash.ToNumber;
export = toNumber;
