import _ = require("../index");

declare namespace Lodash {
    interface FlattenDepth {
        /**
           * Recursively flatten array up to depth times.
           *
           * @param array The array to recursively flatten.
           * @param number The maximum recursion depth.
           * @return Returns the new flattened array.
           */
        (): FlattenDepth;
        /**
           * Recursively flatten array up to depth times.
           *
           * @param array The array to recursively flatten.
           * @param number The maximum recursion depth.
           * @return Returns the new flattened array.
           */
        (depth: number): FlattenDepth1x1;
        /**
           * Recursively flatten array up to depth times.
           *
           * @param array The array to recursively flatten.
           * @param number The maximum recursion depth.
           * @return Returns the new flattened array.
           */
        <T>(depth: number, array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
    interface FlattenDepth1x1 {
        /**
           * Recursively flatten array up to depth times.
           *
           * @param array The array to recursively flatten.
           * @param number The maximum recursion depth.
           * @return Returns the new flattened array.
           */
        (): FlattenDepth1x1;
        /**
           * Recursively flatten array up to depth times.
           *
           * @param array The array to recursively flatten.
           * @param number The maximum recursion depth.
           * @return Returns the new flattened array.
           */
        <T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
}

declare const flattenDepth: Lodash.FlattenDepth;
export = flattenDepth;
