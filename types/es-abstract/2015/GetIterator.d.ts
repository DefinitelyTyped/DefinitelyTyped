/**
 * @param obj The iterable
 * @param method The method to use to get the `Iterator`
 */
declare function GetIterator<I extends Iterator<unknown, unknown, unknown>>(obj: { [Symbol.iterator](): I }): I;
declare function GetIterator<O, I extends Iterator<unknown, unknown, unknown>>(obj: O, method: (this: O) => I): I;
export = GetIterator;
