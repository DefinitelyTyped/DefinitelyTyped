/**
 * Transforms any value to an array. If the provided value is already an array, it is returned unchanged.
 */
declare function toArray<T extends readonly any[]>(data: T): T;
declare function toArray<T extends any[]>(data: T): T;
declare function toArray<T extends any>(data: T): T[];
export default toArray;
