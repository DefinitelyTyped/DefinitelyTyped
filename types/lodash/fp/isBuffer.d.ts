import _ = require("../index");

declare namespace Lodash {
    interface IsBuffer {
        (): IsBuffer;
        (value: any): boolean;
    }
}

declare const isBuffer: Lodash.IsBuffer;
export = isBuffer;
