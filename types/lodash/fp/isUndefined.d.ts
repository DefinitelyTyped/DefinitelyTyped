import _ = require("../index");

declare namespace Lodash {
    interface IsUndefined {
        (): IsUndefined;
        (value: any): value is undefined;
    }
}

declare const isUndefined: Lodash.IsUndefined;
export = isUndefined;
