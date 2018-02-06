// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Has {
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        (): Has;
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        (path: _.PropertyPath): Has1x1;
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        <T>(path: _.PropertyPath, object: T): boolean;
    }
    interface Has1x1 {
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        (): Has1x1;
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        <T>(object: T): boolean;
    }
}

declare const has: Lodash.Has;
export = has;
