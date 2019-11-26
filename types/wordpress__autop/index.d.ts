// Type definitions for @wordpress/autop 2.3
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/autop/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/**
 * Replaces double line-breaks with paragraph elements.
 *
 * @remarks
 * A group of regex replaces used to identify text formatted with newlines and
 * replace double line-breaks with HTML paragraph tags. The remaining line-
 * breaks after conversion become `<br />` tags, unless br is set to 'false'.
 *
 * @example
 * ```js
 * import { autop } from '@wordpress/autop';
 * autop( 'my text' ); // "<p>my text</p>"
 * ```
 *
 * @param  text - The text which has to be formatted.
 * @param  br   - Optional. If set, will convert all remaining line- breaks
 *                after paragraphing. Default `true`.
 *
 * @returns Text which has been converted into paragraph tags.
 */
export function autop(text: string, br?: boolean): string;

/**
 * Replaces `<p>` tags with two line breaks. "Opposite" of autop().
 *
 * @remarks
 * Replaces `<p>` tags with two line breaks except where the `<p>` has attributes.
 * Unifies whitespace. Indents `<li>`, `<dt>` and `<dd>` for better readability.
 *
 * @example
 * ```js
 * import { removep } from '@wordpress/autop';
 * removep( '<p>my text</p>' ); // "my text"
 * ```
 * @param html - The content from the editor.
 *
 * @returns The content with stripped paragraph tags.
 */
export function removep(html: string): string;
