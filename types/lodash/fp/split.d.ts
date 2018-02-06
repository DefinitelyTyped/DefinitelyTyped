// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Split {
        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to trim.
         * @param separator The separator pattern to split by.
         * @param limit The length to truncate results to.
         * @return Returns the new array of string segments.
         */
        (): Split;
        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to trim.
         * @param separator The separator pattern to split by.
         * @param limit The length to truncate results to.
         * @return Returns the new array of string segments.
         */
        (separator: RegExp|string): Split1x1;
        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to trim.
         * @param separator The separator pattern to split by.
         * @param limit The length to truncate results to.
         * @return Returns the new array of string segments.
         */
        (separator: RegExp|string, string: string): string[];
    }
    interface Split1x1 {
        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to trim.
         * @param separator The separator pattern to split by.
         * @param limit The length to truncate results to.
         * @return Returns the new array of string segments.
         */
        (): Split1x1;
        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to trim.
         * @param separator The separator pattern to split by.
         * @param limit The length to truncate results to.
         * @return Returns the new array of string segments.
         */
        (string: string): string[];
    }
}

declare const split: Lodash.Split;
export = split;
