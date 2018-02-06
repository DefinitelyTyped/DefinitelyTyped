import _ = require("../index");

declare namespace Lodash {
    interface IsDate {
        (): IsDate;
        (value: any): value is Date;
    }
}

declare const isDate: Lodash.IsDate;
export = isDate;
