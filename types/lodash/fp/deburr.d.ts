import _ = require("../index");

declare namespace Lodash {
    interface Deburr {
        (): Deburr;
        (string: string): string;
    }
}

declare const deburr: Lodash.Deburr;
export = deburr;
