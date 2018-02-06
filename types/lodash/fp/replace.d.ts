// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Replace {
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (): Replace;
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (pattern: RegExp | string): Replace1x1;
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (pattern: RegExp | string, replacement: _.ReplaceFunction | string): Replace1x2;
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (pattern: RegExp | string, replacement: _.ReplaceFunction | string, string: string): string;
    }
    interface Replace1x1 {
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (): Replace1x1;
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (replacement: _.ReplaceFunction | string): Replace1x2;
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (replacement: _.ReplaceFunction | string, string: string): string;
    }
    interface Replace1x2 {
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (): Replace1x2;
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        (string: string): string;
    }
}

declare const replace: Lodash.Replace;
export = replace;
