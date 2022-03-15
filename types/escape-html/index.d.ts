// Type definitions for escape-html 1.0
// Project: https://github.com/component/escape-html
// Definitions by: Elisée MAURER <https://github.com/elisee>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Escape string for use in HTML
 */

/**
 * Escape special characters in the given string of text, such that it can be interpolated in HTML content.
 * This function will escape the following characters: `"`, `'`, `&`, `<`, and `>`.
 *
 * *Note* that the escaped value is only suitable for being interpolated into HTML as the text content of
 * elements in which the tag does not have different escaping mechanisms (it cannot be placed inside
 * `<style>` or `<script>`, for example, as those content bodies are not HTML, but CSS and JavaScript,
 * respectively; these are known as "raw text elements" in the HTML standard).
 *
 * *Note* when using the escaped value within a tag, it is only suitable as the value of an attribute,
 * where the value is quoted with either a double quote character (`"`) or a single quote character (`'`).
 */
declare function escapeHTML(text?: string | null): string;

export = escapeHTML;
