// Type definitions for @wordpress/escape-html 1.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/escape-html/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/**
 * Returns a string with ampersands escaped.
 *
 * @remarks
 * Note that this is an imperfect implementation, where only ampersands which do not appear as a
 * pattern of named, decimal, or hexadecimal character references are escaped. Invalid named
 * references (i.e. ambiguous ampersand) are are still permitted.
 *
 * See: {@link https://w3c.github.io/html/syntax.html#character-references }
 * See: {@link https://w3c.github.io/html/syntax.html#ambiguous-ampersand }
 * See: {@link https://w3c.github.io/html/syntax.html#named-character-references }
 *
 * @param value - Original string.
 */
export function escapeAmpersand(value: string): string;

/**
 * Returns an escaped attribute value.
 *
 * @remarks
 * See: {@link https://w3c.github.io/html/syntax.html#elements-attributes }
 *
 * "[...] the text cannot contain an ambiguous ampersand [...] must not contain
 * any literal U+0022 QUOTATION MARK characters (")"
 *
 * Note we also escape the greater than symbol, as this is used by wptexturize to
 * split HTML strings. This is a WordPress specific fix
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to be used.
 *
 * See: {@link https://core.trac.wordpress.org/ticket/45387 }
 *
 * @param value - Attribute value.
 */
export function escapeAttribute(value: string): string;

/**
 * Returns an escaped HTML element value.
 *
 * @remarks
 * See: {@link https://w3c.github.io/html/syntax.html#writing-html-documents-elements }
 *
 * "the text must not contain the character U+003C LESS-THAN SIGN (<) or an
 * ambiguous ampersand."
 *
 * @param value - Element value.
 */
export function escapeHTML(value: string): string;

/**
 * Returns a string with less-than sign replaced.
 *
 * @param value - Original string.
 */
export function escapeLessThan(value: string): string;

/**
 * Returns a string with quotation marks replaced.
 *
 * @param value - Original string.
 */
export function escapeQuotationMark(value: string): string;

/**
 * Returns `true` if the given attribute name is valid, or `false` otherwise.
 *
 * @param name - Attribute name to test.
 */
export function isValidAttributeName(name: string): boolean;
