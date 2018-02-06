import _ = require("../index");

declare namespace Lodash {
    interface IsBoolean {
        (): IsBoolean;
        (value: any): value is boolean;
    }
}

declare const isBoolean: Lodash.IsBoolean;
export = isBoolean;
