// Type definitions for normalplaytime 1.0
// Project: https://github.com/eteubert/normalplaytime
// Definitions by: Mimiste <https://github.com/Mimiste>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Takes a string in Normal Play Time (RFC 2326) format and convert it to milliseconds.
 * Will return null for wrong input format.
 */
export function parse(npt: string): number | null;

export as namespace normalplaytime;
