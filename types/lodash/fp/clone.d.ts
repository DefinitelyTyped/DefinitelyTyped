import _ = require("../index");

declare namespace Lodash {
    interface Clone {
        (): Clone;
        <T>(value: T): T;
    }
}

declare const clone: Lodash.Clone;
export = clone;
