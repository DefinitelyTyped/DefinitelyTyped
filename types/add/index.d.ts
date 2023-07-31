// Type definitions for add 2.0
// Project: https://github.com/ben-ng/add
// Definitions by: Tristan F. <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function accSum(numbers: ReadonlyArray<number>): number;

export = accSum;

declare namespace accSum {
    function dumbSum(numbers: ReadonlyArray<number>): number;
    function fastTwoSum(a: number, b: number): [number, number, null];

    /**
     * Finds the immediate power of 2 that is larger than p
     * in a fast way
     */
    function nextPowerTwo(p: number): number;
}
