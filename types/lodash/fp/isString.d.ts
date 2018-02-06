import _ = require("../index");

declare namespace Lodash {
    interface IsString {
        (): IsString;
        (value: any): value is string;
    }
}

declare const isString: Lodash.IsString;
export = isString;
