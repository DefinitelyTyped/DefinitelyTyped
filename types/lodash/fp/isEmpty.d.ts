import _ = require("../index");

declare namespace Lodash {
    interface IsEmpty {
        (): IsEmpty;
        (value: any): boolean;
    }
}

declare const isEmpty: Lodash.IsEmpty;
export = isEmpty;
