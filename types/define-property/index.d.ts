/**
 * Define a non-enumerable property on an object.
 *
 * If `val` is a property descriptor, it is used directly. Otherwise, a
 * non-enumerable, configurable, writable property is created with the given value.
 *
 * @param obj - Target object, function, or array
 * @param key - Property name
 * @param val - Value or property descriptor
 * @returns The target object
 */
declare function defineProperty<T extends object>(obj: T, key: string, val: any): T;

export = defineProperty;
