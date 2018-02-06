import _ = require("../index");

declare namespace Lodash {
    interface IsSafeInteger {
        (): IsSafeInteger;
        (value: any): boolean;
    }
}

declare const isSafeInteger: Lodash.IsSafeInteger;
export = isSafeInteger;
