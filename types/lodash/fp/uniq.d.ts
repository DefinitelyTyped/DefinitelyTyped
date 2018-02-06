import _ = require("../index");

declare namespace Lodash {
    interface Uniq {
        (): Uniq;
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const uniq: Lodash.Uniq;
export = uniq;
