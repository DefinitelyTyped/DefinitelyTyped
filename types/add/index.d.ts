declare function accSum(numbers: readonly number[]): number;

export = accSum;

declare namespace accSum {
    function dumbSum(numbers: readonly number[]): number;
    function fastTwoSum(a: number, b: number): [number, number, null];

    /**
     * Finds the immediate power of 2 that is larger than p
     * in a fast way
     */
    function nextPowerTwo(p: number): number;
}
