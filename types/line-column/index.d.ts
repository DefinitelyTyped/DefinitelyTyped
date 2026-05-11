/**
 * Interface definining the return type of calls to the `fromIndex` function.
 */
interface LineColumnInfo {
    line: number;
    col: number;
}

/**
 * Utility type for object structures that can be used as inputs to the `toIndex`
 * function.
 */
type LineColumnObject = LineColumnInfo | { line: number; column: number };

/**
 * Utility type for using an array as an input to the `toIndex` function.
 */
type LineColumnArray = [number, number];

/**
 * Interface defining the return type from the main `lineColumn` function.
 */
interface LineColumnFinder {
    /**
     * Find line and column from index in the string.
     * @param index Index in the string. (0-origin)
     * @returns Found line number and column number or `null` if the given index is out of range.
     */
    fromIndex(index: number): LineColumnInfo | null;

    /**
     * Find index from line and column in the string.
     * @param line Line number in the string, an object containing line and column numbers or
     *              an array containing line and column numbers.
     * @param col Column number in the string.
     * @returns Found index in the string or `-1` if the given line or column is out of range.
     */
    toIndex(line: number | LineColumnObject | LineColumnArray, col?: number): number;
}

/**
 * Options for the main `lineColumn` function.
 */
interface LineColumnOptions {
    origin: number;
}

/**
 * Returns a `LineColumnFinder` instance for given `string` str.
 * @param str the string to find the line-column info for.
 * @param options options for the finder or a number representing the 'from' index.
 * @returns a `LineColumnFinder` instance.
 */
declare function lineColumn(str: string, options?: LineColumnOptions | number): LineColumnFinder;

export = lineColumn;
