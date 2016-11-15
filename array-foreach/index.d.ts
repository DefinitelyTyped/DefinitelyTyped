// Type definitions for array-foreach
// Project: https://www.npmjs.com/package/array-foreach
// Definitions by: Steve Jenkins <https://github.com/skysteve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
* Performs the specified action for each element in an array.
* @param arr Array of items to iterate over
* @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
* @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
declare function forEach<T>(arr: Array<T>, callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => void, thisArg?: any): void;

/**
* Performs the specified action for each element in an array.
* @param arr Nodelist of items to iterate over
* @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
* @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
declare function forEach<T extends Node>(arr: NodeListOf<T>, callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => void, thisArg?: any): void;
export = forEach;
