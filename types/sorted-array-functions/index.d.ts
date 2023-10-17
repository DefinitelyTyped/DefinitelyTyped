export type CompareFn<T = any> = (a: T, b: T) => -1 | 0 | 1;

/**
 * Insert a new value into the list sorted.
 * Optionally you can use a custom compare function that returns, compare(a, b) that returns 1 if a > b, 0 if a === b and -1 if a < b.
 */
export function add<T>(list: T[], value: T, compareFn?: CompareFn<T>): void;

/**
 * Inserts a new value (same result as sorted.add()) optimized for prepend.
 */
export function addFromFront<T>(list: T[], value: T, compareFn?: CompareFn<T>): void;

/**
 * Remove a value.
 * Returns true if the value was in the list.
 */
export function remove<T>(list: T[], value: T, compareFn?: CompareFn<T>): boolean;

/**
 * Check if a value is in the list.
 */
export function has<T>(list: ReadonlyArray<T>, value: T, compareFn?: CompareFn<T>): boolean;

/**
 * Get the index of a value in the list (uses binary search).
 * If the value could not be found, -1 is returned.
 */
export function eq<T>(list: ReadonlyArray<T>, value: T, compareFn?: CompareFn<T>): number;

/**
 * Get the index of the first value that is >=.
 * If the value could not be found, -1 is returned.
 */
export function gte<T>(list: ReadonlyArray<T>, value: T, compareFn?: CompareFn<T>): number;

/**
 * Get the index of the first value that is >.
 * If the value could not be found, -1 is returned.
 */
export function gt<T>(list: ReadonlyArray<T>, value: T, compareFn?: CompareFn<T>): number;

/**
 * Get the index of the first value that is <=.
 * If the value could not be found, -1 is returned.
 */
export function lte<T>(list: ReadonlyArray<T>, value: T, compareFn?: CompareFn<T>): number;

/**
 * Get the index of the first value that is <.
 * If the value could not be found, -1 is returned.
 */
export function lt<T>(list: ReadonlyArray<T>, value: T, compareFn?: CompareFn<T>): number;

export function nearest<T>(list: ReadonlyArray<T>, value: T, compareFn?: CompareFn<T>): number;
