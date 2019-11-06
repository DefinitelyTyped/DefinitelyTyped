/**
 * Provides the functionality to compare text.
 */
export interface TextSorter<TElement = HTMLElement> {
    /**
     * Compares two strings and returns a value indicating whether one is less than, equal to or greater than the other.
     *
     * @param x
     * The first string to compare.
     *
     * @param y
     * The second string to compare.
     *
     * @param ascending
     * A value indicating whether an ascending sort is being performed.
     *
     * @param index
     * The index of the column which is being sorted.
     *
     * @param table
     * The table which is being sorted.
     *
     * @return
     * An integer that indicated the relative values of `x` and `y`:
     *   - If less than 0, `x` is less than `y`.
     *   - If `0`, `x` equals `y`.
     *   - If greater than 0, `x` is greater than `y`.
     */
    (x: string, y: string, ascending: boolean, index: number, table: TElement): number;
}
