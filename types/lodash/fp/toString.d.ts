import _ = require("../index");

declare namespace Lodash {
    interface ToString {
        (): ToString;
        (value: any): string;
    }
}

declare const toString: Lodash.ToString;
export = toString;
