// Type definitions for has 1.0
// Project: https://github.com/tarruda/has
// Definitions by: ExE Boss <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Determines whether an object has a property with the specified name.
 * @param object The object to check. Must not be `null` or `undefined`.
 * @param property A property name.
 */
declare function hasOwnProperty(object: any, property: PropertyKey): boolean;
export = hasOwnProperty;
