import _ = require("../index");

declare namespace Lodash {
    interface Initial {
        (): Initial;
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const initial: Lodash.Initial;
export = initial;
