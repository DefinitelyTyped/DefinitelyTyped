// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface TrimStart {
    /**
     * Removes leading whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (): TrimStart;
    /**
     * Removes leading whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (chars: string): TrimStart1x1;
    /**
     * Removes leading whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (chars: string, string: string): string;
}
interface TrimStart1x1 {
    /**
     * Removes leading whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (): TrimStart1x1;
    /**
     * Removes leading whitespace or specified characters from string.
     *
     * @param string The string to trim.
     * @param chars The characters to trim.
     * @return Returns the trimmed string.
     */
    (string: string): string;
}

declare const trimCharsStart: TrimStart;
export = trimCharsStart;
