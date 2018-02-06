import _ = require("../index");

declare namespace Lodash {
    interface IsInteger {
        (): IsInteger;
        (value: any): boolean;
    }
}

declare const isInteger: Lodash.IsInteger;
export = isInteger;
