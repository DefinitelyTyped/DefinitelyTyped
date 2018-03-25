// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface InRange {
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (): InRange;
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (start: number): InRange1x1;
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (start: number, end: number): InRange1x2;
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (start: number, end: number, n: number): boolean;
}
interface InRange1x1 {
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (): InRange1x1;
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (end: number): InRange1x2;
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (end: number, n: number): boolean;
}
interface InRange1x2 {
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (): InRange1x2;
    /**
     * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
     * with start then set to 0.
     *
     * @param n The number to check.
     * @param start The start of the range.
     * @param end The end of the range.
     * @return Returns true if n is in the range, else false.
     */
    (n: number): boolean;
}

declare const inRange: InRange;
export = inRange;
