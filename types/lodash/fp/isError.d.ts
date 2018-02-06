import _ = require("../index");

declare namespace Lodash {
    interface IsError {
        (): IsError;
        (value: any): value is Error;
    }
}

declare const isError: Lodash.IsError;
export = isError;
