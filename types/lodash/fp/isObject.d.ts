import _ = require("../index");

declare namespace Lodash {
    interface IsObject {
        (): IsObject;
        (value: any): boolean;
    }
}

declare const isObject: Lodash.IsObject;
export = isObject;
