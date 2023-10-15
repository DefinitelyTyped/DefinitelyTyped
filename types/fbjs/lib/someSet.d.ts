/**
 * The someSet() method tests whether some elements in the given Set pass the
 * test implemented by the provided function.
 */
declare function someSet<T>(set: Set<T>, callback: (value: T, key: T, set: Set<T>) => boolean, context?: any): boolean;
declare namespace someSet {}
export = someSet;
