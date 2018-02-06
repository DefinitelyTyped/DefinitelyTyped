import _ = require("../index");

declare namespace Lodash {
    interface IsArrayBuffer {
        (): IsArrayBuffer;
        (value: any): value is ArrayBuffer;
    }
}

declare const isArrayBuffer: Lodash.IsArrayBuffer;
export = isArrayBuffer;
