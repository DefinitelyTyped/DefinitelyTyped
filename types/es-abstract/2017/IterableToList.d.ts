/**
 * @param items The items
 * @param method The method to use to get the `Iterator`
 */
declare function IterableToList<T>(items: Iterable<T>): T[];
declare function IterableToList<O, T>(items: O, method: (this: O) => Iterator<T>): T[];
export = IterableToList;
