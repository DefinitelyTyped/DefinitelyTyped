// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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

declare const fromPairs: FromPairs;
export = fromPairs;
