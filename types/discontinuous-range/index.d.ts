// Type definitions for discontinuous-range 1.0
// Project: https://github.com/dtudury/discontinuous-range
// Definitions by: Victor Zhou <https://github.com/OiCMudkips>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Represents a discontinuous range of numbers.
 */
declare class DiscontinuousRange {
    /**
     * Creates a discontinuous range at rangeStart, and ending at
     * rangeEnd. If rangeEnd is not specified, a range containing
     * only rangeStart is created.
     * @param rangeStart The start of the range to create.
     * @param rangeEnd   The end of the range to create. Defaults to rangeStart.
     */
    constructor(rangeStart: number, rangeEnd?: number);

    /**
     * Adds the numbers from rangeStart to rangeEnd to the current range.
     * If rangeEnd is not defined, only rangeStart is added to the current range.
     * @param rangeStart The first number to add to the range.
     * @param rangeEnd   The last number to add to the range. Defaults to rangeStart.
     * @returns The range on which add was called. It contains the numbers from rangeStart to rangeEnd.
     */
    add(rangeStart: number, rangeEnd?: number): DiscontinuousRange;

    /**
     * Adds a range to the current range.
     * @param rangeToAdd The range to union with the current range.
     * @returns The range on which add was called. It contains the numbers in rangeToAdd.
     */
    add(rangeToAdd: DiscontinuousRange): DiscontinuousRange;

    /**
     * Removes the numbers from rangeStart to rangeEnd to the current range.
     * If rangeEnd is not defined, only rangeStart is removed from the current range.
     * @param rangeStart The first number to remove from the range.
     * @param rangeEnd   The last number to remove from the range. Defaults to rangeStart.
     * @returns The range on which subtract was called. It does not contain the numbers from rangeStart to rangeEnd.
     */
    subtract(rangeStart: number, rangeEnd?: number): DiscontinuousRange;

    /**
     * Removes rangeToRemove from the current range.
     * @param rangeToRemove The range to exclude from the current range.
     * @returns The range on which subtract was called. It contains the numbers in rangeToRemove.
     */
    subtract(rangeToRemove: DiscontinuousRange): DiscontinuousRange;

    /**
     * Returns the number in the discontinuous range at the specified index.
     * @param index The index to lookup a number.
     * @returns A number in the range. null if index is greater than the number of elements in the range.
     */
    index(index: number): number | null;

    /**
     * Returns a string representation of this discontinuous range in the format
     * "[ rangeOneLow-rangeOneHigh, ... , rangeNLow-rangeNHigh ]"
     * @returns A string representation of this discontinuous range.
     */
    toString(): string;

    /**
     * Returns a copy of this discontinuous range.
     * @returns A deep clone of the current discontinuous range.
     */
    clone(): DiscontinuousRange;
}

export = DiscontinuousRange;
