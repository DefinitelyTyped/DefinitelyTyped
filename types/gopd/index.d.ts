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
