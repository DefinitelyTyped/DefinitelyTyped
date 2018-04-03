// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Range {
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (): Range;
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (start: number): Range1x1;
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (start: number, end: number): Range1x2;
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (start: number, end: number, step: number): number[];
}
interface Range1x1 {
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (): Range1x1;
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (end: number): Range1x2;
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (end: number, step: number): number[];
}
interface Range1x2 {
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (): Range1x2;
    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
     * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
     * range is created unless a negative step is specified.
     *
     * @param start The start of the range.
     * @param end The end of the range.
     * @param step The value to increment or decrement by.
     * @return Returns a new range array.
     */
    (step: number): number[];
}

declare const rangeStep: Range;
export = rangeStep;
