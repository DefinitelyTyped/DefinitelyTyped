// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface PadEnd {
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (): PadEnd;
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (chars: string): PadEnd1x1;
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (chars: string, length: number): PadEnd1x2;
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (chars: string, length: number, string: string): string;
}
interface PadEnd1x1 {
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (): PadEnd1x1;
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (length: number): PadEnd1x2;
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (length: number, string: string): string;
}
interface PadEnd1x2 {
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (): PadEnd1x2;
    /**
     * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
     * length.
     *
     * @param string The string to pad.
     * @param length The padding length.
     * @param chars The string used as padding.
     * @return Returns the padded string.
     */
    (string: string): string;
}

declare const padCharsEnd: PadEnd;
declare namespace padCharsEnd {}
export = padCharsEnd;
