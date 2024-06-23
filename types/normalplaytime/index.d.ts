/**
 * Takes a string in Normal Play Time (RFC 2326) format and convert it to milliseconds.
 * Will return null for wrong input format.
 */
export function parse(npt: string): number | null;

export as namespace normalplaytime;
