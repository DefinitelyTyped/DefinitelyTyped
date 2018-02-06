import _ = require("../index");

declare namespace Lodash {
    interface EscapeRegExp {
        (): EscapeRegExp;
        (string: string): string;
    }
}

declare const escapeRegExp: Lodash.EscapeRegExp;
export = escapeRegExp;
