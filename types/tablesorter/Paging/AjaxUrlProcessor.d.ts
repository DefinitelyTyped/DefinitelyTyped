/**
 * Provides the functionality to customize the url for querying a page.
 */
export interface AjaxUrlProcessor<TElement = HTMLElement> {
    /**
     * Processes the url for `ajax` to query data.
     *
     * @param table
     * The table to process data for.
     *
     * @param url
     * The formatted url to query data from.
     *
     * @return
     * The manipulated url to query data from.
     */
    (table: TElement, url: string): string;
}
