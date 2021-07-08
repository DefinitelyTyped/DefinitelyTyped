/**
 * Provides an intitial amount of rows and filtered rows to display.
 */
export interface PagerInitialRows {
    /**
     * The total number of rows.
     */
    total?: number | undefined;

    /**
     * The filtered number of rows.
     */
    filtered?: number | undefined;
}
