/**
 * Returns the count of distinct elements selected from an array.
 */
declare function countDistinct<T1>(iter: Iterable<T1>, selector: (item: T1) => any): number;

declare namespace countDistinct {}

export = countDistinct;
