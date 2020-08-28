// Type definitions for @wordpress/shortcode 2.3
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/shortcode/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export interface ShortcodeAttrs {
    named: Record<string, string | undefined>;
    numeric: string[];
}

export interface ShortcodeMatch {
    index: number;
    content: string;
    shortcode: Shortcode;
}

export type Shortcode = {
    attrs: ShortcodeAttrs;
    tag: string;
} & ({ type: 'closed'; content: string } | { type: 'self-closing' | 'single' });

export interface ShortcodeOptions {
    tag: string;
    type?: 'closed' | 'self-closing' | 'single';
    attrs?: Partial<ShortcodeAttrs> | string;
    content?: string;
}

export const attrs: {
    /**
     * Parse shortcode attributes.
     *
     * @remarks
     * Shortcodes accept many types of attributes. These can chiefly be divided into
     * named and numeric attributes:
     *
     * Named attributes are assigned on a key/value basis, while numeric attributes
     * are treated as an array.
     *
     * Named attributes can be formatted as either `name="value"`, `name='value'`,
     * or `name=value`. Numeric attributes can be formatted as `"value"` or just
     * `value`.
     *
     * @param text - Serialised shortcode attributes.
     *
     * @returns Parsed shortcode attributes.
     */
    (text: string): ShortcodeAttrs;

    /**
     * Used to clear the memoized cache of this function.
     */
    clear(): void;
};

/**
 * Generate a Shortcode Object from a RegExp match.
 *
 * @remarks
 * Accepts a `match` object from calling `regexp.exec()` on a `RegExp` generated
 * by `regexp()`. `match` can also be set to the `arguments` from a callback
 * passed to `regexp.replace()`.
 */
export function fromMatch(match: RegExpMatchArray): Shortcode;

/**
 * Find the next matching shortcode.
 *
 * @param tag - Shortcode tag.
 * @param text - Text to search.
 * @param [index=0] - Index to start search from.
 */
export function next(tag: string, text: string, index?: number): ShortcodeMatch | undefined;

/**
 * Generate a RegExp to identify a shortcode.
 *
 * @remarks
 * The base regex is functionally equivalent to the one found in
 * `get_shortcode_regex()` in `wp-includes/shortcodes.php`.
 *
 * Capture groups:
 *
 * 1. An extra `[` to allow for escaping shortcodes with double `[[]]`
 * 2. The shortcode name
 * 3. The shortcode argument list
 * 4. The self closing `/`
 * 5. The content of a shortcode when it wraps some content.
 * 6. The closing tag.
 * 7. An extra `]` to allow for escaping shortcodes with double `[[]]`
 *
 * @param tag - Shortcode tag.
 *
 * @returns Shortcode RegExp.
 */
export function regexp(tag: string): RegExp;

/**
 * Replace matching shortcodes in a block of text.
 *
 * @param tag - Shortcode tag.
 * @param text - Text to search.
 * @param callback - Function to process the match and return replacement string.
 *
 * @returns Text with shortcodes replaced.
 */
export function replace(tag: string, text: string, callback: (shortcode: Shortcode) => string): string;

/**
 * Generate a string from shortcode parameters.
 *
 * Creates a shortcode instance and returns a string.
 *
 * @remarks
 * Accepts the same `options` as the `shortcode()` constructor, containing a
 * `tag` string, a string or object of `attrs`, a boolean indicating whether to
 * format the shortcode using a `single` tag, and a `content` string.
 */
export function string(options: ShortcodeOptions): string;

export default class shortcode {
    static attrs: typeof attrs;
    static fromMatch: typeof fromMatch;
    static next: typeof next;
    static regexp: typeof regexp;
    static replace: typeof replace;
    // NOTE: this refers to the function, not `string` type. Bad naming choice.
    static string: typeof string;

    attrs: ShortcodeAttrs;
    content?: string;
    tag?: string;
    type?: 'closed' | 'self-closing' | 'single';

    constructor(options?: Partial<ShortcodeOptions>);

    /**
     * Transform the shortcode into a string.
     *
     * @returns String representation of the shortcode.
     */
    string(): string;

    /**
     * Get a shortcode attribute.
     *
     * Automatically detects whether `attr` is named or numeric and routes it accordingly.
     *
     * @param attr - Attribute key.
     *
     * @returns Attribute value.
     */
    get(attr: string | number): string | undefined;

    /**
     * Set a shortcode attribute.
     *
     * Automatically detects whether `attr` is named or numeric and routes it
     * accordingly.
     *
     * @param attr - Attribute key.
     * @param value - Attribute value.
     *
     * @returns Shortcode instance.
     */
    set(attr: string | number, value: string): this;
}
