import _ = require("../index");

declare namespace Lodash {
    interface IsNil {
        (): IsNil;
        (value: any): value is null | undefined;
    }
}

declare const isNil: Lodash.IsNil;
export = isNil;
