// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface HasIn {
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @category Object
     * @param object The object to query.
     * @param path The path to check.
     * @returns Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b.c');
     * // => true
     *
     * _.hasIn(object, ['a', 'b', 'c']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    (): HasIn;
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @category Object
     * @param object The object to query.
     * @param path The path to check.
     * @returns Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b.c');
     * // => true
     *
     * _.hasIn(object, ['a', 'b', 'c']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    (path: _.PropertyPath): HasIn1x1;
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @category Object
     * @param object The object to query.
     * @param path The path to check.
     * @returns Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b.c');
     * // => true
     *
     * _.hasIn(object, ['a', 'b', 'c']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    <T>(path: _.PropertyPath, object: T): boolean;
}
interface HasIn1x1 {
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @category Object
     * @param object The object to query.
     * @param path The path to check.
     * @returns Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b.c');
     * // => true
     *
     * _.hasIn(object, ['a', 'b', 'c']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    (): HasIn1x1;
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @category Object
     * @param object The object to query.
     * @param path The path to check.
     * @returns Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b.c');
     * // => true
     *
     * _.hasIn(object, ['a', 'b', 'c']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    <T>(object: T): boolean;
}

declare const hasIn: HasIn;
export = hasIn;
