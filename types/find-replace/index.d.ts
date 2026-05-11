/**
 * Replace or remove multiple items in an array
 *
 * `array` - The input array
 *
 * `findFn` - A predicate which, if returns true causes the current item to be operated on
 *
 * `...replaceWiths`:
 *
 * * If not specified, each found value will be removed.
 * * If specified, each found value will be replaced with this value.
 * * If the replaceWith value is a function, it will be invoked with the found value and its result used as the replace value.
 * * If the replaceWith function returns an array, the found value will be replaced with each item in the array (not replaced with the array itself).
 */
declare function findReplace<T>(array: T[], findFn: (x: T) => boolean, ...replaceWiths: Array<T | ((x: T) => T)>): T[];
declare function findReplace(array: any[], findFn: (x: any) => boolean, ...replaceWiths: any[]): any[];

export as namespace findReplace;
export = findReplace;
