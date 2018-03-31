// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface UpdateWith {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>): UpdateWith1x1<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, path: _.PropertyPath): UpdateWith1x2;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): UpdateWith1x3<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, p2: _.__, updater: (oldValue: any) => any): UpdateWith1x4;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, updater: (oldValue: any) => any): UpdateWith1x5<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, path: _.PropertyPath, updater: (oldValue: any) => any): UpdateWith1x6;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, updater: (oldValue: any) => any): UpdateWith1x7<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, p2: _.__, p3: _.__, object: T): UpdateWith1x8<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, p3: _.__, object: T): UpdateWith1x9<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, path: _.PropertyPath, p3: _.__, object: T): UpdateWith1x10<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, p3: _.__, object: T): UpdateWith1x11<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, p2: _.__, updater: (oldValue: any) => any, object: T): UpdateWith1x12<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, updater: (oldValue: any) => any, object: T): UpdateWith1x13<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, path: _.PropertyPath, updater: (oldValue: any) => any, object: T): UpdateWith1x14<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, updater: (oldValue: any) => any, object: T): T;
}
interface UpdateWith1x1<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x1<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath): UpdateWith1x3<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, updater: (oldValue: any) => any): UpdateWith1x5<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath, updater: (oldValue: any) => any): UpdateWith1x7<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, p2: _.__, object: T): UpdateWith1x9<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath, p2: _.__, object: T): UpdateWith1x11<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, updater: (oldValue: any) => any, object: T): UpdateWith1x13<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath, updater: (oldValue: any) => any, object: T): T;
}
interface UpdateWith1x2 {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x2;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>): UpdateWith1x3<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, updater: (oldValue: any) => any): UpdateWith1x6;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, updater: (oldValue: any) => any): UpdateWith1x7<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, p2: _.__, object: T): UpdateWith1x10<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, object: T): UpdateWith1x11<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, updater: (oldValue: any) => any, object: T): UpdateWith1x14<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, updater: (oldValue: any) => any, object: T): T;
}
interface UpdateWith1x3<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x3<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (updater: (oldValue: any) => any): UpdateWith1x7<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, object: T): UpdateWith1x11<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (updater: (oldValue: any) => any, object: T): T;
}
interface UpdateWith1x4 {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x4;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>): UpdateWith1x5<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, path: _.PropertyPath): UpdateWith1x6;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): UpdateWith1x7<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, p2: _.__, object: T): UpdateWith1x12<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, object: T): UpdateWith1x13<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, path: _.PropertyPath, object: T): UpdateWith1x14<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, object: T): T;
}
interface UpdateWith1x5<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x5<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath): UpdateWith1x7<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, object: T): UpdateWith1x13<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath, object: T): T;
}
interface UpdateWith1x6 {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x6;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>): UpdateWith1x7<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(p1: _.__, object: T): UpdateWith1x14<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, object: T): T;
}
interface UpdateWith1x7<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x7<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (object: T): T;
}
interface UpdateWith1x8<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x8<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>): UpdateWith1x9<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, path: _.PropertyPath): UpdateWith1x10<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): UpdateWith1x11<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, p2: _.__, updater: (oldValue: any) => any): UpdateWith1x12<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>, p2: _.__, updater: (oldValue: any) => any): UpdateWith1x13<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, path: _.PropertyPath, updater: (oldValue: any) => any): UpdateWith1x14<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, updater: (oldValue: any) => any): T;
}
interface UpdateWith1x9<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x9<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath): UpdateWith1x11<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, updater: (oldValue: any) => any): UpdateWith1x13<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath, updater: (oldValue: any) => any): T;
}
interface UpdateWith1x10<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x10<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>): UpdateWith1x11<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, updater: (oldValue: any) => any): UpdateWith1x14<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>, updater: (oldValue: any) => any): T;
}
interface UpdateWith1x11<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x11<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (updater: (oldValue: any) => any): T;
}
interface UpdateWith1x12<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x12<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>): UpdateWith1x13<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (p1: _.__, path: _.PropertyPath): UpdateWith1x14<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): T;
}
interface UpdateWith1x13<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x13<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (path: _.PropertyPath): T;
}
interface UpdateWith1x14<T> {
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (): UpdateWith1x14<T>;
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @since 4.6.0
     * @category Object
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @param [customizer] The function to customize assigned values.
     * @returns Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    (customizer: _.SetWithCustomizer<T>): T;
}

declare const updateWith: UpdateWith;
export = updateWith;
