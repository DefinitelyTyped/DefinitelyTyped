/**
 * Gets the inferred function name for the `{ [s]() {...} }` construct.
 *
 * **Note:** Intended to be used with strings or symbols.
 *
 * @param s The string or symbol to use as the object key.
 */
declare const getInferredName: ((s: unknown) => string) | null;
export = getInferredName;
