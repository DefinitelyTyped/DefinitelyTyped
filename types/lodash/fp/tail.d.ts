import _ = require("../index");

declare namespace Lodash {
    interface Tail {
        (): Tail;
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const tail: Lodash.Tail;
export = tail;
