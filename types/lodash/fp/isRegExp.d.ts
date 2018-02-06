import _ = require("../index");

declare namespace Lodash {
    interface IsRegExp {
        (): IsRegExp;
        (value: any): value is RegExp;
    }
}

declare const isRegExp: Lodash.IsRegExp;
export = isRegExp;
