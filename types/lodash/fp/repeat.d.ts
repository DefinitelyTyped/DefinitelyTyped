// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Repeat {
    /**
     * Repeats the given string n times.
     *
     * @param string The string to repeat.
     * @param n The number of times to repeat the string.
     * @return Returns the repeated string.
     */
    (): Repeat;
    /**
     * Repeats the given string n times.
     *
     * @param string The string to repeat.
     * @param n The number of times to repeat the string.
     * @return Returns the repeated string.
     */
    (n: number): Repeat1x1;
    /**
     * Repeats the given string n times.
     *
     * @param string The string to repeat.
     * @param n The number of times to repeat the string.
     * @return Returns the repeated string.
     */
    (n: number, string: string): string;
}
interface Repeat1x1 {
    /**
     * Repeats the given string n times.
     *
     * @param string The string to repeat.
     * @param n The number of times to repeat the string.
     * @return Returns the repeated string.
     */
    (): Repeat1x1;
    /**
     * Repeats the given string n times.
     *
     * @param string The string to repeat.
     * @param n The number of times to repeat the string.
     * @return Returns the repeated string.
     */
    (string: string): string;
}

declare const repeat: Repeat;
declare namespace repeat {}
export = repeat;
