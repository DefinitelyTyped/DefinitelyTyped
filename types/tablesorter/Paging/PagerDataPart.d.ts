import { PagerOutputProcessor } from "./PagerOutputProcessor";

/**
 * Represents a part of table-data for the `pager`-widget.
 */
export interface PagerDataPart<TElement = HTMLElement> {
    /**
     * The output to display in the output-area.
     *
     * Following portions of text are substituted:
     *
     * | Tag                | Replacement                                  |
     * |--------------------|----------------------------------------------|
     * | `{size}`           | The current page size.                       |
     * | `{page}`           | The current page.                            |
     * | `{page:input}`     | The page inputted by the user.               |
     * | `{totalPages}`     | The total amount of pages.                   |
     * | `{filteredPages}`  | The filtered number of pages.                |
     * | `{startRow}`       | The number of the first row being displayed. |
     * | `{startRow:input}` | The start-row inputted by the user.          |
     * | `{endRow}`         | The number of the last row being displayed.  |
     * | `{filteredRows}`   | The amount of filtered rows.                 |
     * | `{totalRows}`      | The total amount of rows.                    |
     */
    output?: string | PagerOutputProcessor<TElement>;

    /**
     * The number of total rows.
     */
    total: number;

    /**
     * The number of filtered rows.
     */
    filteredRows?: number;

    /**
     * The column-names of the table.
     */
    headers?: string[];

    /**
     * The data to show.
     */
    rows?: any[][] | JQuery;
}
