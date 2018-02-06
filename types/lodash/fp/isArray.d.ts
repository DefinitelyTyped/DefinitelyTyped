import _ = require("../index");

declare namespace Lodash {
    interface IsArray {
        (): IsArray;
        (value: any): value is any[];
        <T>(value: any): value is any[];
    }
}

declare const isArray: Lodash.IsArray;
export = isArray;
