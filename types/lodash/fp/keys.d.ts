import _ = require("../index");

declare namespace Lodash {
    interface Keys {
        (): Keys;
        (object: any): string[];
    }
}

declare const keys: Lodash.Keys;
export = keys;
