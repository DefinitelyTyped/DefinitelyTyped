import _ = require("../index");

declare namespace Lodash {
    interface Max {
        (): Max;
        <T>(collection: _.List<T> | null | undefined): T | undefined;
    }
}

declare const max: Lodash.Max;
export = max;
