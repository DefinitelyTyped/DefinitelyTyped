import _ = require("../index");

declare namespace Lodash {
    interface IsMatch {
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         */
        (): IsMatch;
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         */
        (source: object): IsMatch1x1;
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         */
        (source: object, object: object): boolean;
    }
    interface IsMatch1x1 {
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         */
        (): IsMatch1x1;
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         */
        (object: object): boolean;
    }
}

declare const matches: Lodash.IsMatch;
export = matches;
