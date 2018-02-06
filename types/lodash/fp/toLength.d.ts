import _ = require("../index");

declare namespace Lodash {
    interface ToLength {
        (): ToLength;
        (value: any): number;
    }
}

declare const toLength: Lodash.ToLength;
export = toLength;
