import _ = require("../index");

declare namespace Lodash {
    interface Compact {
        (): Compact;
        <T>(array: _.List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }
}

declare const compact: Lodash.Compact;
export = compact;
