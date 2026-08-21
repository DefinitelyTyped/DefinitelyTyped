/**
 * Determines whether an object has an own property with the specified name.
 *
 * @param target The object that contains the property.
 * @param property A property name.
 *
 * @throws {TypeError} If `target` is nullish.
 */
declare function hasOwnProperty<P extends PropertyKey>(target: {}, property: P): target is { [K in P]: unknown };
export = hasOwnProperty;
