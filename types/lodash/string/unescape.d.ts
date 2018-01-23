declare namespace _ {
    interface LoDashStatic {
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
        unescape(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unescape
         */
        unescape(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unescape
         */
        unescape(): LoDashExplicitWrapper<string>;
    }
}