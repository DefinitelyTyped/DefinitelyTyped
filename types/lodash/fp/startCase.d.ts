import _ = require("../index");

declare namespace Lodash {
    interface StartCase {
        (): StartCase;
        (string: string): string;
    }
}

declare const startCase: Lodash.StartCase;
export = startCase;
