import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
         * diacritical marks.
         *
         * @param string The string to deburr.
         * @return Returns the deburred string.
         */
        deburr(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.deburr
         */
        deburr(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.deburr
         */
        deburr(): LoDashExplicitWrapper<string>;
    }
}