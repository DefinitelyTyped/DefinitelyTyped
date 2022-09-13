import "jquery";
import { PagerDataPart } from "./PagerDataPart";

/**
 * Provides the functionality to process data for the `pager`-widget.
 */
export interface AjaxDataProcessor<TElement = HTMLElement> {
    /**
     * Processes the ajax-result for the `pager`-widget.
     *
     * @param data
     * The result of ajax.
     *
     * @param table
     * The table which is being processed.
     *
     * @param request
     * The ajax-request which processed the `data`.
     *
     * @return
     * The data for the pager to show.
     */
    (data: any, table: TElement, request: JQuery.jqXHR): PagerDataPart<TElement> | [number] | [number, JQuery | any[][], string[]?];
}
