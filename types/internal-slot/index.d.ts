/**
 * Asserts that `O` is an `object`, `slot` is a `string`
 * and `O` has the internal slot `slot`.
 */
export function assert(O: object, slot: string): void;

/**
 * Gets the value of `O`'s internal slot `slot`.
 */
export function get(O: object, slot: string): any;

/**
 * Checks that `O` has the internal slot `slot`.
 */
export function has(O: object, slot: string): boolean;

/**
 * Sets the object `O`'s internal slot `slot`'s value to `V`.
 */
export function set(O: object, slot: string, V: any): void;
