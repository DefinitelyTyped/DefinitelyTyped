import _ = require("../index");

declare namespace Lodash {
    interface IsNaN {
        (): IsNaN;
        (value: any): boolean;
    }
}

declare const isNaN: Lodash.IsNaN;
export = isNaN;
