import _ = require("../index");

declare namespace Lodash {
    interface Slice {
        (): Slice;
        (end: number): Slice1x1<T>;
        <T>(end: number, array: _.List<T> | null | undefined): Slice1x2<T>;
        <T>(end: number, array: _.List<T> | null | undefined, start: number): T[];
    }
    interface Slice1x1<T> {
        (): Slice1x1<T>;
        (array: _.List<T> | null | undefined): Slice1x2<T>;
        (array: _.List<T> | null | undefined, start: number): T[];
    }
    interface Slice1x2<T> {
        (): Slice1x2<T>;
        (start: number): T[];
    }
}

declare const slice: Lodash.Slice;
export = slice;
