import _ = require("../index");

declare namespace Lodash {
    interface Capitalize {
        (): Capitalize;
        (string: string): string;
    }
}

declare const capitalize: Lodash.Capitalize;
export = capitalize;
