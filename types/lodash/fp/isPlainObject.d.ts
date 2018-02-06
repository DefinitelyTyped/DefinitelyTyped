import _ = require("../index");

declare namespace Lodash {
    interface IsPlainObject {
        (): IsPlainObject;
        (value: any): boolean;
    }
}

declare const isPlainObject: Lodash.IsPlainObject;
export = isPlainObject;
