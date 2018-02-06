import _ = require("../index");

declare namespace Lodash {
    interface Xor {
        (): Xor;
        <T>(...arrays: Array<_.List<T> | null | undefined>): T[];
    }
}

declare const xor: Lodash.Xor;
export = xor;
