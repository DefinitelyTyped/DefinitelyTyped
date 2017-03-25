// Type definitions for mockdate 2.0
// Project: https://github.com/boblauer/MockDate
// Definitions by: Bruno Leonardo Michels <https://github.com/brunolm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace MockDate;

/**
 * Change the Date implementation to mock a specific date.
 * @param Date to be set as current
 * @param timezoneOffset? The value that should be returned by new Date().getTimezoneOffset()
 */
export function set(date: { valueOf(): number; } | number | string, timezoneOffset?: number): void;

/**
 * Restore the original Date object back to the native implementation.
 */
export function reset(): void;
