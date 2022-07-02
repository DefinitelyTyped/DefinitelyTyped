// Type definitions for html-escape 2.0
// Project: https://github.com/parshap/html-escape
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Escape a string to be safe for use in html. `&`, `<`, `'`, and `"`
 * characters are replaced with with their [named character references][]:
 * `&amp;`, `&lt;`, `&apos;`, and `&quot;`. Escaped strings will be safe
 * for use in the following contexts:
 *
 *  * [RCDATA][] and [DATA][html-data] (content of all elements except for
 *    `<script>` and `<style>`)
 *  * [Single-quoted attribute values][html-single-attribute] `'`
 *  * [Double-quoted attribute values][html-double-attribute] `"`
 *
 * [named character references]: https://html.spec.whatwg.org/multipage/syntax.html#named-character-references
 * [html-data]: https://html.spec.whatwg.org/multipage/syntax.html#data-state
 * [rcdata]: https://html.spec.whatwg.org/multipage/syntax.html#rcdata-state
 * [html-single-attribute]: https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(single-quoted)-state
 * [html-double-attribute]: https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(double-quoted)-state
 *
 * @param str The plain text to escape HTML markup in.
 * @return The text with HTML markup safely escaped.
 *
 * @example
 * ```js
 * var escape = require("html-escape");
 * var xssAttempt = "Hello <script>while(1);</script> world!";
 * // Output safe html
 * console.log("<p>" + escape(xssAttempt) + "</p>");
 * // "<p>Hello &lt;script>while(1);&lt;/script> world!</p>"
 * ```
 */
declare function htmlEscape(str: string): string;
export = htmlEscape;
