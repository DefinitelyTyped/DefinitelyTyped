/**
 * Returns a new Array containing all the element of the source array except
 * `null` and `undefined` ones. This brings the benefit of strong typing over
 * `Array.prototype.filter`.
 */
declare function compactArray<T>(array: Array<T | null | undefined>): T[];

declare namespace compactArray {}

export = compactArray;
