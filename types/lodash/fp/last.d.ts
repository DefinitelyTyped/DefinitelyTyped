import _ = require("../index");

declare namespace Lodash {
    interface Last {
        (): Last;
        <T>(array: _.List<T> | null | undefined): T | undefined;
    }
}

declare const last: Lodash.Last;
export = last;
