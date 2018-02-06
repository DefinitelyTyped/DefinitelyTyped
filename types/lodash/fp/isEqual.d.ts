import _ = require("../index");

declare namespace Lodash {
    interface IsEqual {
        (): IsEqual;
        (other: any): IsEqual1x1;
        (other: any, value: any): boolean;
    }
    interface IsEqual1x1 {
        (): IsEqual1x1;
        (value: any): boolean;
    }
}

declare const isEqual: Lodash.IsEqual;
export = isEqual;
