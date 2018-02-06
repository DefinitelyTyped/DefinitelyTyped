import _ = require("../index");

declare namespace Lodash {
    interface IsSet {
        (): IsSet;
        (value: any): value is Set<any>;
    }
}

declare const isSet: Lodash.IsSet;
export = isSet;
