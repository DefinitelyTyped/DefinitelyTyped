/**
 * Deeply mix the properties of objects into the first object.
 * Like merge-deep, but doesn't clone.
 *
 * @param target - The target object to mix properties into
 * @param objects - One or more source objects
 * @returns The modified target object
 */
declare function mixinDeep<T extends object>(target: T, ...objects: object[]): T & { [key: string]: any };

export = mixinDeep;
