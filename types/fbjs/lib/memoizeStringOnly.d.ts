/**
 * Memoizes the return value of a function that accepts one string argument.
 */
declare function memoizeStringOnly<T>(callback: (s: string) => T): (s: string) => T;

declare namespace memoizeStringOnly {}

export = memoizeStringOnly;
