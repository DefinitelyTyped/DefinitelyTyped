// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface IsArrayLikeObject {
    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @category Lang
     * @param value The value to check.
     * @returns Returns `true` if `value` is an array-like object, else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    <T>(value: T & string & number): boolean;
    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @category Lang
     * @param value The value to check.
     * @returns Returns `true` if `value` is an array-like object, else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    // tslint:disable-next-line:ban-types (type guard doesn't seem to work correctly without the Function type)
    (value: ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is never;
    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @category Lang
     * @param value The value to check.
     * @returns Returns `true` if `value` is an array-like object, else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    // tslint:disable-next-line:ban-types (type guard doesn't seem to work correctly without the Function type)
    <T extends object>(value: T | ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is T & { length: number };
}

declare const isArrayLikeObject: IsArrayLikeObject;
export = isArrayLikeObject;
