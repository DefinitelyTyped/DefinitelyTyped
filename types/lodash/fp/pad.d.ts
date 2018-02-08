// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
    (length: number): Pad1x1;
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
    (string: string): string;
}

declare const pad: Pad;
declare namespace pad {}
export = pad;
