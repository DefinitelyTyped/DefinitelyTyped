// Type definitions for ellipsize 0.1
// Project: https://github.com/mvhenten/ellipsize
// Definitions by: Stefan Natter <https://github.com/natterstefan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Ellipsizes a string near a word boundary.
 *
 * An ellipsized text looks much better if the ellipsize was added at the end of
 * the last full word instead of somewhere in the middle - especially if there
 * are very few characters remaining.
 *
 * @example
 * ellipsize('one two three four', 8);
 * // 'one two…'
 *
 * ellipsize('one two three four', 100);
 * // 'one two three four'
 *
 * ellipsize('12345678910')
 * // '1234567…'
 *
 * ellipsize( 'one two&three four', 8, { chars: [' ', '&'], ellipse: '→' });
 * // 'one two→'
 *
 * // its default settings
 * ellipsize( '123456789ABCDEF', 8, { truncate: true });
 * // '1234567…'
 */
declare function ellipsize(
    /**
     * text to ellipsize.
     */
    text?: string,
    /**
     * maxLength of the text before it is ellipsized (default: 140)
     */
    maxLength?: number,
    /**
     * additional options to customize the result and rules
     */
    options?: {
        /**
         * after this char(s) the text can be ellipsized and the ellipse
         * rendered. (default: [' ', '-'])
         */
        chars?: string[];
        /**
         * ellipse element (default: '...')
         */
        ellipse?: string;
        /**
         * truncate the text or not (default: true)
         */
        truncate?: boolean;
    },
): string;

export = ellipsize;
