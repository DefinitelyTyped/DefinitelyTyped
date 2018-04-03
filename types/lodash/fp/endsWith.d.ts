// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface EndsWith {
    /**
     * Checks if string ends with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string ends with target, else false.
     */
    (): EndsWith;
    /**
     * Checks if string ends with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string ends with target, else false.
     */
    (target: string): EndsWith1x1;
    /**
     * Checks if string ends with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string ends with target, else false.
     */
    (target: string, string: string): boolean;
}
interface EndsWith1x1 {
    /**
     * Checks if string ends with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string ends with target, else false.
     */
    (): EndsWith1x1;
    /**
     * Checks if string ends with the given target string.
     *
     * @param string The string to search.
     * @param target The string to search for.
     * @param position The position to search from.
     * @return Returns true if string ends with target, else false.
     */
    (string: string): boolean;
}

declare const endsWith: EndsWith;
export = endsWith;
