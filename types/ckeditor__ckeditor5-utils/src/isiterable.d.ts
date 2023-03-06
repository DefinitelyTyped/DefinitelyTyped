/*
 * Checks if value implements iterator interface.
 */
export default function isIterable<T>(value: Iterable<T>): value is Iterable<T>;
export default function isIterable(value: any): value is Iterable<any>;
