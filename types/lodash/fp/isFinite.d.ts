import _ = require("../index");

declare namespace Lodash {
    interface IsFinite {
        (): IsFinite;
        (value: any): boolean;
    }
}

declare const isFinite: Lodash.IsFinite;
export = isFinite;
