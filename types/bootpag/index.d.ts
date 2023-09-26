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
        page?: number | undefined;

        /**
         * next/prev buttons move over one page or maximum visible pages (default true)
         */
        leaps?: boolean | undefined;

        /**
         * next button text (default ???)
         */
        next?: string | undefined;

        /**
         * prev button text (default ???)
         */
        prev?: string | undefined;

        /**
         * template for pagination links (default "javascript:void(0);")
         */
        href?: string | undefined;

        /**
         * variable name in href template for page number (default "{{number}}")
         */
        hrefVariable?: string | undefined;

        /**
         * do we ant first and last (default true)
         */
        firstLastUse?: boolean | undefined;

        /**
         * name of first (default 'FIRST')
         */
        first?: string | undefined;

        /**
         * name of last (default 'LAST')
         */
        last?: string | undefined;

        /**
         * css class for wrap (default 'pagination')
         */
        wrapClass?: string | undefined;

        /**
         * css class for active (default 'active')
         */
        activeClass?: string | undefined;

        /**
         * css class for disabled (default 'disabled')
         */
        disabledClass?: string | undefined;

        /**
         * css class for next (default 'next')
         */
        nextClass?: string | undefined;

        /**
         * css class for prev (default 'prev')
         */
        prevClass?: string | undefined;

        /**
         * css class for last (default 'last')
         */
        lastClass?: string | undefined;

        /**
         * css class for first (default 'first')
         */
        firstClass?: string | undefined;
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
