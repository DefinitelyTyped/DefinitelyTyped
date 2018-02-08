// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface StartsWith {
    /**
     * Checks if string starts with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string starts with target, else false.
     */
    (): StartsWith;
    /**
     * Checks if string starts with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string starts with target, else false.
     */
    (target: string): StartsWith1x1;
    /**
     * Checks if string starts with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string starts with target, else false.
     */
    (target: string, string: string): boolean;
}
interface StartsWith1x1 {
    /**
     * Checks if string starts with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string starts with target, else false.
     */
    (): StartsWith1x1;
    /**
     * Checks if string starts with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string starts with target, else false.
     */
    (string: string): boolean;
}

declare const startsWith: StartsWith;
declare namespace startsWith {}
export = startsWith;
