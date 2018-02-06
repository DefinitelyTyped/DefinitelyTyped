// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface PickBy {
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        (): PickBy;
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        <T>(predicate: _.ValueKeyIteratee<T>): PickBy1x1<T>;
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        <T extends object>(predicate: _.ValueKeyIteratee<T[keyof T]>, object: T | null | undefined): _.PartialObject<T>;
    }
    interface PickBy1x1<T> {
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        (): PickBy1x1<T>;
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        (object: object | null | undefined): _.PartialObject<T>;
    }
}

declare const pickBy: Lodash.PickBy;
export = pickBy;
