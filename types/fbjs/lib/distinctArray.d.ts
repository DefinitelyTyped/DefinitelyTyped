/**
 * Returns the distinct elements of an iterable. The result is an array whose
 * elements are ordered by first occurrence.
 */
declare function distinctArray<T>(xs: Iterable<T>): T[];

declare namespace distinctArray {}

export = distinctArray;
