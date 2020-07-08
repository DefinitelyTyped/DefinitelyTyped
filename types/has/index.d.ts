// Type definitions for has 1.0
// Project: https://github.com/tarruda/has
// Definitions by: Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
