// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type Unescape =
    /**
     * The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96;
     * in string to their corresponding characters.
     *
     * Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library
     * like he.
     *
     * @param string The string to unescape.
     * @return Returns the unescaped string.
     */
    (string: string) => string;

declare const unescape: Unescape;
export = unescape;
