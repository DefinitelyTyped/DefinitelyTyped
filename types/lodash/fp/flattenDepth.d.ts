import _ = require("../index");

declare namespace Lodash {
    interface FlattenDepth {
        (): FlattenDepth;
        (depth: number): FlattenDepth1x1<T>;
        <T>(depth: number, array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
    interface FlattenDepth1x1<T> {
        (): FlattenDepth1x1<T>;
        (array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
}

declare const flattenDepth: Lodash.FlattenDepth;
export = flattenDepth;
