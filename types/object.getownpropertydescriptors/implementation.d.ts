/**
 * Returns an object containing all own property descriptors of an object
 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
declare function polyfill<T>(
    o: T,
): {
    -readonly [P in keyof T]: TypedPropertyDescriptor<T[P]>;
} & {
    [property: string]: PropertyDescriptor;
};

export = polyfill;
