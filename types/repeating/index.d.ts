// Type definitions for repeating 3.0
// Project: https://github.com/sindresorhus/repeating#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export = repeating;

/**
 * Repeat a string - fast
 *
 * @param count Times the 'string' should be repeated.
 * @param str String to repeat. Default: ' '
 */
declare function repeating(count: number, str?: string): string;
