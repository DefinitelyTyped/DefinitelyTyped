import _ = require("../index");

declare namespace Lodash {
    interface Unescape {
        (): Unescape;
        (string: string): string;
    }
}

declare const unescape: Lodash.Unescape;
export = unescape;
