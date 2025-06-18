import "jquery";

/**
 * Provides the functionality to create filter-controls.
 */
export interface FilterControlFactory {
    /**
     * Creates a filter-control.
     *
     * @param cell
     * The cell to add the filter to.
     *
     * @param index
     * The index of the cell.
     *
     * @return
     * The jQuery-object of the control.
     */
    (cell: JQuery, index: number): JQuery;
}
