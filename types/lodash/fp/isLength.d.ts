import _ = require("../index");

declare namespace Lodash {
    interface IsLength {
        (): IsLength;
        (value: any): boolean;
    }
}

declare const isLength: Lodash.IsLength;
export = isLength;
