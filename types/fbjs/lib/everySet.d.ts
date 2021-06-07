/**
 * The everySet() method tests whether all elements in the given Set pass the
 * test implemented by the provided function.
 */
declare function everySet<T>(set: Set<T>, callback: (value: T, key: T, set: Set<T>) => boolean, context?: any): boolean;

declare namespace everySet {}

export = everySet;
