/**
 * Represent a structured clone value as string.
 * @param {any} any some clone-able value to stringify.
 * @returns {string} the value stringified.
 */
export function stringify(any: any): string;

/**
 * Revive a previously stringified structured clone.
 * @param {string} str previously stringified data as string.
 * @returns {any} whatever was previously stringified as clone.
 */
export function parse(str: string): any;
