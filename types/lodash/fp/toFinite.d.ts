import _ = require("../index");

declare namespace Lodash {
    interface ToFinite {
        (): ToFinite;
        (value: any): number;
    }
}

declare const toFinite: Lodash.ToFinite;
export = toFinite;
