/**
 * Assign the enumerable Symbol properties from source objects to a target object.
 *
 * @param target - Target object to assign symbol properties to
 * @param args - Source objects to copy enumerable symbol properties from
 * @returns The target object with symbol properties assigned
 */
declare function assignSymbols<T extends object>(target: T, ...args: object[]): T;

export = assignSymbols;
