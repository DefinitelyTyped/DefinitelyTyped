/**
 * Always returns false.
 */
export function FALSE(): boolean;
/**
 * Always returns true.
 */
export function TRUE(): boolean;
/**
 * A reusable function, used e.g. as a default for callbacks.
 */
export function VOID(): void;
/**
 * Wrap a function in another function that remembers the last return.  If the
 * returned function is called twice in a row with the same arguments and the same
 * this object, it will return the value from the first call in the second call.
 */
export function memoizeOne<ReturnType>(fn: (p0: any) => ReturnType): (p0: any) => ReturnType;
