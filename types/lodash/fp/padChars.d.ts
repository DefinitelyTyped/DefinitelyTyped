import _ = require("../index");

declare namespace Lodash {
    interface Pad {
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (): Pad;
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (chars: string): Pad1x1;
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (chars: string, length: number): Pad1x2;
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (chars: string, length: number, string: string): string;
    }
    interface Pad1x1 {
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (): Pad1x1;
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (length: number): Pad1x2;
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (length: number, string: string): string;
    }
    interface Pad1x2 {
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (): Pad1x2;
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (string: string): string;
    }
}

declare const padChars: Lodash.Pad;
export = padChars;
