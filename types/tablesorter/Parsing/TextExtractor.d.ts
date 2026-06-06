/**
 * Provides the functionality to extract the text from a cell.
 */
export interface TextExtractor<TElement> {
    /**
     * Extracts the text from a cell.
     *
     * @param cell
     * The cell whose text is being extracted.
     *
     * @param table
     * The table of the cell.
     *
     * @param index
     * The index of the cell.
     */
    (cell: Element, table: TElement, index: number): string;
}
