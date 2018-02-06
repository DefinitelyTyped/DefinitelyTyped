import _ = require("../index");

declare namespace Lodash {
    interface IsMatch {
        (): IsMatch;
        (source: object): IsMatch1x1;
        (source: object, object: object): boolean;
    }
    interface IsMatch1x1 {
        (): IsMatch1x1;
        (object: object): boolean;
    }
}

declare const isMatch: Lodash.IsMatch;
export = isMatch;
