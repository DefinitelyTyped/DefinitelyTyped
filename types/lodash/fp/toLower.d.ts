import _ = require("../index");

declare namespace Lodash {
    interface ToLower {
        (): ToLower;
        (string: string): string;
    }
}

declare const toLower: Lodash.ToLower;
export = toLower;
