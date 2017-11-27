// Type definitions for jQuery-Bootpag 1.0.7
// Project: http://botmonster.com/jquery-bootpag/
// Definitions by: MAF.DAP / Romain Deneau <https://github.com/rdeneau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace JqueryBootpag {
    /**
     * Bootpag plugin interface options
     */
    export interface Options {
        /**
         * number of pages
         */
        total: number;

        /**
         * maximum number of visible pages
         */
        maxVisible: number;

        /**
         * page to show on start
         */
        page?: number;

        /**
         * next/prev buttons move over one page or maximum visible pages (default true)
         */
        leaps?: boolean;

        /**
         * next button text (default "�")
         */
        next?: string;

        /**
         * prev button text (default "�")
         */
        prev?: string;

        /**
         * template for pagination links (default "javascript:void(0);")
         */
        href?: string;

        /**
         * variable name in href template for page number (default "{{number}}")
         */
        hrefVariable?: string;

        /**
         * do we ant first and last (default true)
         */
        firstLastUse?: boolean;

        /**
         * name of first (default 'FIRST')
         */
        first?: string;

        /**
         * name of last (default 'LAST')
         */
        last?: string;

        /**
         * css class for wrap (default 'pagination')
         */
        wrapClass?: string;

        /**
         * css class for active (default 'active')
         */
        activeClass?: string;

        /**
         * css class for disabled (default 'disabled')
         */
        disabledClass?: string;

        /**
         * css class for next (default 'next')
         */
        nextClass?: string;

        /**
         * css class for prev (default 'prev')
         */
        prevClass?: string;

        /**
         * css class for last (default 'last')
         */
        lastClass?: string;

        /**
         * css class for first (default 'first')
         */
        firstClass?: string;
    }

    /**
     * Event handler on page click.
     * @param event : JQueryEventObject
     * @param pageNumber : number of the clicked page
     */
    interface PageEventHandler {
        (event: JQueryEventObject, pageNumber: number): any;
    }
}

interface JQuery {
    /**
     * jQuery Bootpag plugin main method
     */
    bootpag(options: JqueryBootpag.Options): JQuery;

    /**
     * jQuery Bootpag "page" event occurring on page click.
     * @param eventName : always "page"
     * @param handler : A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(eventName: "page", handler: JqueryBootpag.PageEventHandler): JQuery;
}
