/**
 * Set an array of unique values as the property of an object.
 * Supports nested properties using dot notation.
 *
 * @param obj - The object to modify
 * @param prop - The property path
 * @param value - Value or array of values to union
 * @returns The modified object
 */
declare function unionValue<T extends object>(obj: T, prop: string, value?: any): T;

export = unionValue;
