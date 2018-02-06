import _ = require("../index");

declare namespace Lodash {
    interface ToUpper {
        (): ToUpper;
        (string: string): string;
    }
}

declare const toUpper: Lodash.ToUpper;
export = toUpper;
