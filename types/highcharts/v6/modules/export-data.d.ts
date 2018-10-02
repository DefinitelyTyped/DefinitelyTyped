import * as Highcharts from "highcharts";

interface AjaxSettings {
    /**
     * The payload to send
     */
    data: any;

    /**
     * The data type expected
     */
    dataType: ('json'|'octet'|'text'|'xml');

    /**
     * Function to call on error
     */
    error: Function;

    /**
     * The headers; keyed on header name
     */
    headers: any;

    /**
     * Function to call on success
     */
    success: Function;

    /**
     * The verb to use
     */
    type: ('delete'|'get'|'post'|'update');

    /**
     * The URL to call
     */
    url: string;
}

/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
declare function factory(highcharts: typeof Highcharts): void;

/**
 * The Highcharts object is the placeholder for all other members, and various
 * utility functions. The most important member of the namespace would be the
 * chart constructor.
 */
declare module "../highcharts" {
    interface Chart {
        /**
         * Export-data module required. Returns the current chart data as a CSV
         * string.
         *
         * @param useLocalDecimalPoint
         *        Whether to use the local decimal point as detected from the
         *        browser. This makes it easier to export data to Excel in the
         *        same locale as the user is.
         *
         * @return CSV representation of the data
         */
        getCSV(useLocalDecimalPoint: boolean): string;

        /**
         * Export-data module required. Returns a two-dimensional array
         * containing the current chart data.
         *
         * @param multiLevelHeaders
         *        Use multilevel headers for the rows by default. Adds an extra
         *        row with top level headers. If a custom columnHeaderFormatter
         *        is defined, this can override the behavior.
         *
         * @return The current chart data
         */
        getDataRows(multiLevelHeaders: boolean): Array<Array<(number|string)>>;

        /**
         * Export-data module required. Build a HTML table with the chart's
         * current data.
         *
         * @param useLocalDecimalPoint
         *        Whether to use the local decimal point as detected from the
         *        browser. This makes it easier to export data to Excel in the
         *        same locale as the user is.
         *
         * @return HTML representation of the data.
         */
        getTable(useLocalDecimalPoint: boolean): string;

        /**
         * Experimental function to send a chart's config to the Cloud for
         * editing. Limitations - All functions (formatters and callbacks) are
         * removed since they're not JSON.
         */
        openInCloud(): void;

        /**
         * Export-data module required. View the data in a table below the
         * chart.
         */
        viewData(): void;
    }

    /**
     * HTML encode some characters vulnerable for XSS.
     *
     * @param html
     *        The input string
     *
     * @return The excaped string
     */
    function htmlencode(html: string): string;
}

export = factory;
export as namespace ExportDataFactory;
