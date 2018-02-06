import _ = require("../index");

declare namespace Lodash {
    interface MatchesProperty {
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        (): MatchesProperty;
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        <T>(srcValue: T): MatchesProperty1x1;
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        <T>(srcValue: T, path: _.PropertyPath): (value: any) => boolean;
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        <T, V>(srcValue: T, path: _.PropertyPath): (value: V) => boolean;
    }
    interface MatchesProperty1x1 {
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        (): MatchesProperty1x1;
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        <T>(path: _.PropertyPath): (value: any) => boolean;
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        <T, V>(path: _.PropertyPath): (value: V) => boolean;
    }
}

declare const propEq: Lodash.MatchesProperty;
export = propEq;
