import _ = require("../index");

declare namespace Lodash {
    interface Escape {
        (): Escape;
        (string: string): string;
    }
}

declare const escape: Lodash.Escape;
export = escape;
