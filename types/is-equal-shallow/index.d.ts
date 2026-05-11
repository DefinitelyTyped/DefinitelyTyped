/**
 * Performs a shallow comparison between two objects.
 *
 * @param a - The first object to compare
 * @param b - The second object to compare
 * @returns `true` if the objects have identical top-level property values, otherwise `false`
 */
declare function isEqual(a: object, b: object): boolean;

export = isEqual;
