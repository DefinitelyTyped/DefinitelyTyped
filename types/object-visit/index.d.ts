/**
 * Call a specified method on each value in the given object.
 *
 * @param thisArg - The object containing the method to call
 * @param method - The name of the method to call
 * @param target - The object to iterate over
 * @param val - Additional arguments passed to the method
 * @returns The thisArg object
 */
declare function visit<T extends object>(thisArg: T, method: string, target: object, ...val: any[]): T;

export = visit;
