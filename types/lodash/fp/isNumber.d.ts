import _ = require("../index");

declare namespace Lodash {
    interface IsNumber {
        (): IsNumber;
        (value: any): value is number;
    }
}

declare const isNumber: Lodash.IsNumber;
export = isNumber;
