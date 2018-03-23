// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface TrimEnd {
    /**
     * Removes trailing whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (): TrimEnd;
    /**
     * Removes trailing whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (chars: string): TrimEnd1x1;
    /**
     * Removes trailing whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (chars: string, string: string): string;
}
interface TrimEnd1x1 {
    /**
     * Removes trailing whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (): TrimEnd1x1;
    /**
     * Removes trailing whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (string: string): string;
}

declare const trimCharsEnd: TrimEnd;
export = trimCharsEnd;
