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
declare function ms(value: string | TemplateStringsArray): number;

export = ms;
