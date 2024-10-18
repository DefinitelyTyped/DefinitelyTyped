/**
 * Flattens an object to one level deep.
 * Optionally takes a custom delimiter, otherwise uses `.` by default.
 * Circular references within the object will be replaced with `[Circular]`.
 *
 * @param object Object to flatten
 * @param delimiter (Optional) Delimiter.
 */
export function flatten(a: Record<string | number, unknown>, delimiter?: string): Record<string, unknown>;

/**
 * Unflattens an object back to its original nested form.
 * Optionally takes a custom delimiter, otherwise uses `.` by default.
 * Circular references denoted by `[Circular]` are treated as strings.
 *
 * @param object Object to flatten
 * @param delimiter (Optional) Delimiter.
 */
export function unflatten(object: Record<string, unknown>, delimiter?: string): Record<string | number, unknown>;
