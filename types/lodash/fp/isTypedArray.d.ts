import _ = require("../index");

declare namespace Lodash {
    interface IsTypedArray {
        (): IsTypedArray;
        (value: any): boolean;
    }
}

declare const isTypedArray: Lodash.IsTypedArray;
export = isTypedArray;
