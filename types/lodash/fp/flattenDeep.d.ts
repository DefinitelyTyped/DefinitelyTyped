import _ = require("../index");

declare namespace Lodash {
    interface FlattenDeep {
        (): FlattenDeep;
        <T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
}

declare const flattenDeep: Lodash.FlattenDeep;
export = flattenDeep;
