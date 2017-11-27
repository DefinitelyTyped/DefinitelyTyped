// Type definitions for jest-docblock 21.0
// Project: https://github.com/facebook/jest/tree/master/packages/jest-docblock
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * extract the "first" docblock from code, return empty string if not found.
 */
export function extract(code: string): string;

/**
 * parse @pragma from docblock.
 */
export function parse(docblock: string): { [pragma: string]: string };
