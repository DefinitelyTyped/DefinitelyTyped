/**
 * Provides the functionality to sort numbers.
 */
export interface NumberSorter {
    /**
     * Compares the `x` and `y` number.
     *
     * @param x
     * The first number to compare.
     *
     * @param y
     * The second number to compare.
     *
     * @param ascending
     * A value indicating whether an ascending sort is performed.
     *
     * @param maxValue
     * The maximum value in the column.
     *
     * @return
     * An integer that indicated the relative values of `x` and `y`:
     *   - If less than 0, `x` is less than `y`.
     *   - If `0`, `x` equals `y`.
     *   - If greater than 0, `x` is greater than `y`.
     */
    (x: number, y: number, ascending: boolean, maxValue: number): number;
}
