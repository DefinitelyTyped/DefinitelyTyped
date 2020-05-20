/**
 * Provides the functionality to generate output for the `pager`-plugin.
 */
export interface PagerOutputProcessor<TElement = HTMLElement> {
    /**
     * Generates an output for the `pager`-plugin.
     *
     * @param table
     * The table which is being processed.
     *
     * @param pager
     * The representation of the pager.
     *
     * @return
     * The output for the `pager`-plugin.
     */
    (table: TElement, pager: any): string;
}
