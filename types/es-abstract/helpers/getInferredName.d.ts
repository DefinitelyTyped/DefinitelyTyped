/**
 * Gets the inferred function name for the `{ [s]() {...} }` construct.
 *
 * **Note:** Intended to be used with symbols.
 *
 * @param s The symbol to use as the object key.
 */
declare function getInferredName(s: unknown): string;
export = getInferredName;
