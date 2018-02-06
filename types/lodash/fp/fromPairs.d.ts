import _ = require("../index");

declare namespace Lodash {
    interface FromPairs {
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @category Array
         * @param pairs The key-value pairs.
         * @returns Returns the new object.
         * @example
         *
         * _.fromPairs([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        (): FromPairs;
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @category Array
         * @param pairs The key-value pairs.
         * @returns Returns the new object.
         * @example
         *
         * _.fromPairs([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        <T>(pairs: _.List<[_.PropertyName, T]> | null | undefined): _.Dictionary<T>;
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @category Array
         * @param pairs The key-value pairs.
         * @returns Returns the new object.
         * @example
         *
         * _.fromPairs([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        (pairs: _.List<any[]> | null | undefined): _.Dictionary<any>;
    }
}

declare const fromPairs: Lodash.FromPairs;
export = fromPairs;
