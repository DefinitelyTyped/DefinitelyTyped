/**
 * Extend an object with the properties of additional objects.
 * Similar to Object.assign but also copies symbol properties.
 *
 * @param obj - Target object to extend
 * @param objects - Source objects to copy properties from
 * @returns The extended target object
 */
declare function extend<T extends object>(obj: T, ...objects: object[]): T & { [key: string]: any };

export = extend;
