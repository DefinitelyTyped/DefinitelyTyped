import _ = require("../index");

declare namespace Lodash {
    interface Invert {
        (): Invert;
        (object: object): _.Dictionary<string>;
    }
}

declare const invert: Lodash.Invert;
export = invert;
