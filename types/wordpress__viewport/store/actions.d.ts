/**
 * Used in signalling that viewport queries have been updated. Values are specified as an object of
 * breakpoint query keys where value represents whether query matches.
 *
 * @param values - Breakpoint query matches.
 */
export function setIsMatching(values: Record<string, boolean>): void;
