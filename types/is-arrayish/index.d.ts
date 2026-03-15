/**
 * Check if a value is array-like.
 *
 * Returns `true` for arrays, arguments objects, and array-like objects
 * (objects with a numeric `length` property and indexed elements).
 * Returns `false` for `null`, `undefined`, and strings.
 *
 * @param obj - Value to check
 * @returns Whether the value is array-like
 */
declare function isArrayish(obj: any): boolean;

export = isArrayish;
