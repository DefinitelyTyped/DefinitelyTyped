import _ = require("../index");

declare namespace Lodash {
    interface LowerFirst {
        (): LowerFirst;
        (string: string): string;
    }
}

declare const lowerFirst: Lodash.LowerFirst;
export = lowerFirst;
