// Type definitions for ms.macro 2.0
// Project: https://github.com/knpwrs/ms.macro#readme
// Definitions by: Cameron Knight <https://github.com/ckknight>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Convert various time formats to milliseconds at build time in Babel.
 * @param value The value to convert
 * @example
 * const ONE_DAY = ms('1 day');
 * const TWO_DAYS = ms('2 days');
 * @example
 * const ONE_DAY = ms`1 day`;
 * const TWO_DAYS = ms`2 days`;
 */
export default function ms(value: string | TemplateStringsArray): number;
