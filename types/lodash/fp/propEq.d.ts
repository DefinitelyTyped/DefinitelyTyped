// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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
    (path: _.PropertyPath): MatchesProperty1x1;
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
    <T>(path: _.PropertyPath, srcValue: T): (value: any) => boolean;
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
    <T, V>(path: _.PropertyPath, srcValue: T): (value: V) => boolean;
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
    <T>(srcValue: T): (value: any) => boolean;
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
    <T, V>(srcValue: T): (value: V) => boolean;
}

declare const propEq: MatchesProperty;
export = propEq;
