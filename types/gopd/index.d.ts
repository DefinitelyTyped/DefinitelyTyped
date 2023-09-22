// Type definitions for gopd 1.0
// Project: https://github.com/ljharb/gopd#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Gets the own property descriptor of the specified object.
 * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
 *
 * @param target Object that contains the property.
 * @param propertyKey Name of the property.
 */
declare const getOwnPropertyDescriptor:
    | (
        <T, P extends PropertyKey>(target: T, propertyKey: P) =>
            | (P extends keyof T ? TypedPropertyDescriptor<T[P]> : PropertyDescriptor)
            | undefined
    )
    | undefined
    | null;
export = getOwnPropertyDescriptor;
