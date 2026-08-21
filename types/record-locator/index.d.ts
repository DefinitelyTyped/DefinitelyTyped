/**
 * Encodes an integer into a record locator string
 *
 * @param recordLocator must be a positive integer
 * @throws Error when called with a `recordLocator` parameter that is undefined/not a number or a negative number
 */
export function encode(recordLocator: number): string;

/**
 * Decodes a record locator string back into an integer
 *
 * @param recordLocator
 * @throws Error when called with a `recordLocator` parameter that is undefined
 */
export function decode(recordLocator: string): number;
