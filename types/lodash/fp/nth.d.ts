import _ = require("../index");

declare namespace Lodash {
    interface Nth {
        (): Nth;
        (n: number): Nth1x1<T>;
        <T>(n: number, array: _.List<T> | null | undefined): T | undefined;
    }
    interface Nth1x1<T> {
        (): Nth1x1<T>;
        (array: _.List<T> | null | undefined): T | undefined;
    }
}

declare const nth: Lodash.Nth;
export = nth;
