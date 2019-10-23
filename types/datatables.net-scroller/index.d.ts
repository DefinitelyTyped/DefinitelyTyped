// Type definitions for datatables.net-scroller 1.4
// Project: https://datatables.net
// Definitions by: Konstantin Rohde <https://github.com/RohdeK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * Select extension options
         */
        scroller?: boolean | ScrollerSettings;
    }

    interface ScrollerSettings {
        /*
         * Indicate if Scroller show show trace information on the console or not.
         */
        trace?: boolean;

        /*
        * Scroller will attempt to automatically calculate the height of rows for it's internal
        * calculations. However the height that is used can be overridden using this parameter.
         */
        rowHeight?: number | string;

        /*
        * When using server-side processing, Scroller will wait a small amount of time to allow
        * the scrolling to finish before requesting more data from the server.
         */
        serverWait?: number;

        /*
        * The display buffer is what Scroller uses to calculate how many rows it should pre-fetch
        * for scrolling.
         */
        displayBuffer?: number;

        /*
        * Scroller uses the boundary scaling factor to decide when to redraw the table - which it
        * typically does before you reach the end of the currently loaded data set (in order to
        * allow the data to look continuous to a user scrolling through the data).
         */
        boundaryScale?: number;

        /*
        * Show (or not) the loading element in the background of the table. Note that you should
        * include the dataTables.scroller.css file for this to be displayed correctly.
         */
        loadingIndicator?: boolean;
    }

    interface Api {
        scroller: ScrollerMethodsModel;
    }

    interface ScrollerMethodsModel {
        /*
        * Calculate and store information about how many rows are to be displayed
        * in the scrolling viewport, based on current dimensions in the browser's
        * rendering.
        */
        measure(redraw?: boolean): Api;
        /*
        * Get information about current displayed record range.
        */
        page(): PageInfo;
        /*
        * Get Scroller Api
        */
        scroller(): ScrollerMethods;
    }

    interface ScrollerMethods extends Api {
        /*
        * Calculate the pixel position from the top of the scrolling container for
        * a given row
        */
        rowToPixels(rowIdx: number, intParse?: boolean, virtual?: boolean): number;
        /*
        * Calculate the row number that will be found at the given pixel position
        * (y-scroll).
        */
        pixelsToRow(pixels: number, intParse?: boolean, virtual?: boolean): number;
        scrollToRow(rowIdx: number, animate?: boolean): Api;
    }

    /*
    * start: {int}, // the 0-indexed record at the top of the viewport
    * end:   {int}, // the 0-indexed record at the bottom of the viewport
    */
    interface PageInfo {
        start: number;
        end: number;
    }

    interface RowMethods {
        /**
         * Scroll to a row
         */
        scrollTo(animate?: boolean): Api;
    }
}
