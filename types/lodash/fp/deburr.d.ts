import _ = require("../index");

declare namespace Lodash {
    interface Deburr {
        /**
         * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
         * diacritical marks.
         *
         * @param string The string to deburr.
         * @return Returns the deburred string.
         */
        (): Deburr;
        /**
         * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
         * diacritical marks.
         *
         * @param string The string to deburr.
         * @return Returns the deburred string.
         */
        (string: string): string;
    }
}

declare const deburr: Lodash.Deburr;
export = deburr;
