import _ = require("../index");

declare namespace Lodash {
    interface Unescape {
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
        (): Unescape;
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
        (string: string): string;
    }
}

declare const unescape: Lodash.Unescape;
export = unescape;
