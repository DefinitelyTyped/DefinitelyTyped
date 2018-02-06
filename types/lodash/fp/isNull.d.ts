import _ = require("../index");

declare namespace Lodash {
    interface IsNull {
        (): IsNull;
        (value: any): value is null;
    }
}

declare const isNull: Lodash.IsNull;
export = isNull;
