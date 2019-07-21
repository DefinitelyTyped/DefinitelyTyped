/*
 * Encoding utilities.
 * https://docs.k6.io/docs/k6encoding
 */

export function b64decode(input: string, encoding?: Base64Variant): string;
export function b64encode(input: string, encoding?: Base64Variant): string;

export type Base64Variant = 'std' | 'rawstd' | 'url' | 'rawurl';
