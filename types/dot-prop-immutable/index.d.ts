export type ArrayOrObject = any[] | object;

export type Path = number | string | Array<number | string>;

/**
 * Access a nested property by a dot path
 *
 * @param object - Object to get the `path` value.
 * @param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.
 * @param defaultValue - Default value.
 * @example
 * ```
 * // Getter
 * dotProp.get({foo: {bar: 'unicorn'}}, 'foo.bar')
 * //=> 'unicorn'
 *
 * dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep')
 * //=> undefined
 *
 * dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep', 'default value')
 * //=> default value
 *
 * dotProp.get({foo: {'dot.dot': 'unicorn'}}, 'foo.dot\\.dot')
 * //=> 'unicorn'
 * ```
 * or use a property array as a path.
 * ```
 * // Use an array as get path
 * dotProp.get({foo: {'dot.dot': 'unicorn'}}, ['foo', 'dot.dot'])
 * //=> 'unicorn'
 * ```
 * It is also possible to index into an array where the special index $end refers to the last element of the array.
 * ```
 * var obj = {foo: [{ bar: 'gold-unicorn'}, 'white-unicorn', 'silver-unicorn']};
 *
 * // Index into array
 * dotProp.get(obj, 'foo.1')
 * //=> 'white-unicorn'
 *
 * dotProp.get(obj, 'foo.0.bar')
 * //=> 'gold-unicorn'
 *
 * // Index into array with $end
 * dotProp.get(obj, 'foo.$end')
 * //=> 'silver-unicorn'
 *
 * // If obj is an array
 * dotProp.get([{ bar: 'gold-unicorn'}, 'white-unicorn', 'silver-unicorn'], '0.bar')
 * //=> 'gold-unicorn'
 * ```
 */
export function get(
    object: ArrayOrObject | undefined,
    path: Path,
): any;

export function get<V>(
    object: ArrayOrObject | undefined,
    path: Path,
    defaultValue: V,
): V;

/**
 * Modify a nested property by a dot path
 *
 * @param object - Object to set the `path` value.
 * @param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.
 * @param value - Value to set at `path`.
 * @example
 * ```
 * // Setter
 * var obj = {foo: {bar: 'a'}};
 *
 * var obj1 = dotProp.set(obj, 'foo.bar', 'b');
 * //obj1 => {foo: {bar: 'b'}}
 *
 * var obj2 = dotProp.set(obj1 , 'foo.baz', 'x');
 * //obj2 => {foo: {bar: 'b', baz: 'x'}}
 * ```
 * where obj, obj1, obj2, obj3 all are different objects.
 *
 * Use a function to modify the selected property, where first argument is the old value.
 * ```
 * // Setter where value is a function (get and set current value)
 * dotProp.set({foo: {bar: 'a'}}, 'foo.bar', v => v + 'bc')
 * //=> {foo: {bar: 'abc'}}
 * ```
 * Modify a nested array
 * ```
 * var obj = {foo: [{ bar: 'gold-unicorn'}, 'white-unicorn', 'silver-unicorn']};
 *
 * // Index into array
 * dotProp.set(obj, 'foo.1', 'platin-unicorn')
 * //=> {foo: [{bar: 'gold-unicorn'}, 'platin-unicorn', 'silver-unicorn']}
 *
 * dotProp.set(obj, 'foo.0.bar', 'platin-unicorn')
 * //=> {foo: [{bar: 'platin-unicorn'}, 'white-unicorn', 'silver-unicorn']}
 *
 * // Index into array with $end
 * dotProp.set(obj, 'foo.$end', 'platin-unicorn')
 * //=> {foo: [{ bar: 'gold-unicorn'}, 'white-unicorn', 'platin-unicorn']}
 * ```
 */
export function set<T extends ArrayOrObject>(
    object: T,
    path: Path,
    value: any,
): T;

/**
 * Delete a nested property/array by a dot path
 *
 * @param object - Object to delete the `path` value.
 * @param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.
 * @example
 * ```
 * var obj = {foo: [{ bar: 'gold-unicorn'}, 'white-unicorn', 'silver-unicorn']};
 *
 * // delete
 * dotProp.delete(obj, 'foo.$end');
 * //=> {foo: [{ bar: 'gold-unicorn'}, 'white-unicorn']}
 *
 * dotProp.delete(obj, 'foo.0.bar');
 * //=> {foo: [{}, 'white-unicorn', 'silver-unicorn']}
 * ```
 */
declare function _delete<T extends ArrayOrObject>(
    object: T,
    path: Path,
): T;
export { _delete as delete };

/**
 * Toggle a boolean a value by a dot path.
 *
 * @param object - Object to toggle the `path` value.
 * @param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.
 * @example
 * ```
 * var obj = {foo: { bar: true } };
 *
 * // toggle
 * dotProp.toggle(obj, 'foo.bar');
 * //=> {foo: { bar: false } }
 * ```
 */
export function toggle<T extends ArrayOrObject>(
    object: T,
    path: Path,
): T;

/**
 * Merge a value by a dot path.
 *
 * @param object - Object to toggle the `path` value.
 * @param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.
 * @param value - Value to set at `path`.
 * @example
 * The target value must be an object, array, null, or undefined.
 * - If target is an object, Object.assign({}, target, param) is used.
 * - If target an array, target.concat(param) is used.
 * - If target is null or undefined, the value is simply set.
 * ```
 * var obj = {foo: { bar: {a:1, b:2 } };
 *
 * // merge object
 * dotProp.merge(obj, 'foo.bar', {c:3} );
 * //=> {foo: { bar:{ a:1, b:2, c:3} } }
 *
 * var arr = {foo: { bar: [1, 2] } };
 *
 * // merge array
 * dotProp.merge(arr, 'foo.bar', [3, 4] );
 * //=> {foo: { bar:[1, 2, 3, 4 ] }
 * };
 * ```
 */
export function merge<T extends ArrayOrObject>(
    object: T,
    path: Path,
    value: ArrayOrObject,
): T;
