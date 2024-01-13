export = isArguments;

/**
 * This function determines whether `value` is an `arguments` object.
 *
 * **Caveats:** If you have modified an actual `arguments` object by giving
 * it a `Symbol.toStringTag` property, then this function will return `false`.
 */
declare function isArguments(value: unknown): value is IArguments;
