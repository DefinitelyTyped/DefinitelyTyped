// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface PadStart {
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (): PadStart;
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (chars: string): PadStart1x1;
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (chars: string, length: number): PadStart1x2;
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (chars: string, length: number, string: string): string;
    }
    interface PadStart1x1 {
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (): PadStart1x1;
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (length: number): PadStart1x2;
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (length: number, string: string): string;
    }
    interface PadStart1x2 {
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (): PadStart1x2;
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        (string: string): string;
    }
}

declare const padCharsStart: Lodash.PadStart;
export = padCharsStart;
