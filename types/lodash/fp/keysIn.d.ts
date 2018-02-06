import _ = require("../index");

declare namespace Lodash {
    interface KeysIn {
        (): KeysIn;
        (object: any): string[];
    }
}

declare const keysIn: Lodash.KeysIn;
export = keysIn;
