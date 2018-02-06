// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface OmitBy {
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        (): OmitBy;
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        <T>(predicate: _.ValueKeyIteratee<T>): OmitBy1x1<T>;
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        <T extends object>(predicate: _.ValueKeyIteratee<T[keyof T]>, object: T | null | undefined): _.PartialObject<T>;
    }
    interface OmitBy1x1<T> {
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        (): OmitBy1x1<T>;
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        (object: object | null | undefined): _.PartialObject<T>;
    }
}

declare const omitBy: Lodash.OmitBy;
export = omitBy;
