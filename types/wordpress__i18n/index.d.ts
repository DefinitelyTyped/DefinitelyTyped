// Type definitions for @wordpress/i18n 3.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/i18n/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Merges locale data into the Tannin instance by domain. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param data   Locale data configuration.
 * @param domain Domain for which configuration applies.
 */
export function setLocaleData(data: any, domain?: string): void;

/**
 * Retrieve the translation of text.
 *
 * @see https://developer.wordpress.org/reference/functions/__/
 *
 * @param  text   Text to translate.
 * @param  domain Domain to retrieve the translated text.
 */
export function __(text: string, domain?: string): string;

/**
 * Retrieve translated string with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_x/
 *
 * @param  text    Text to translate.
 * @param  context Context information for the translators.
 * @param  domain  Domain to retrieve the translated text.
 */
export function _x(text: string, context: string, domain?: string): string;

/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number.
 *
 * @see https://developer.wordpress.org/reference/functions/_n/
 *
 * @param  single The text to be used if the number is singular.
 * @param  plural The text to be used if the number is plural.
 * @param  number The number to compare against to use either the
 *                         singular or plural form.
 * @param  domain Domain to retrieve the translated text.
 */
export function _n(
    single: string,
    plural: string,
    n: number,
    domain?: string
): string;

/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number, with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_nx/
 *
 * @param  single  The text to be used if the number is singular.
 * @param  plural  The text to be used if the number is plural.
 * @param  number  The number to compare against to use either the
 *                          singular or plural form.
 * @param  context Context information for the translators.
 * @param  domain  Domain to retrieve the translated text.
 */
export function _nx(
    single: string,
    plural: string,
    n: number,
    context: string,
    domain?: string
): string;

/**
 * Returns a formatted string. If an error occurs in applying the format, the
 * original format string is returned.
 *
 * @param  format  The format of the string to generate.
 * @param  args Arguments to apply to the format.
 *
 * @see http://www.diveintojavascript.com/projects/javascript-sprintf
 */
export function sprintf(format: string, ...args: any[]): string;
