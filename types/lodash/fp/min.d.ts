import _ = require("../index");

declare namespace Lodash {
    interface Min {
        (): Min;
        <T>(collection: _.List<T> | null | undefined): T | undefined;
    }
}

declare const min: Lodash.Min;
export = min;
