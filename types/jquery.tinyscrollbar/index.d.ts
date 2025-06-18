/// <reference types="jquery" />

declare namespace JQueryTinyScrollbar {
    export interface JQueryTinyScrollbarOptions {
        /**
         * Enable mobile invert style scrolling. (default: false)
         */
        invertscroll?: boolean | undefined;
        /**
         * Vertical or horizontal scroller? 'x' or 'y'. (default: 'x')
         */
        axis?: string | undefined;
        /**
         * How many pixels must the mouswheel scrolls at a time. (default: 40)
         */
        wheel?: number | undefined;
        /**
         * Enable or disable the mousewheel. (default: true)
         */
        scroll?: boolean | undefined;
        /**
         * Return scrollwheel event to browser if there is no more content. (default: true)
         */
        lockscroll?: boolean | undefined;
        /**
         * Set the size of the scrollbar to auto or a fixed number. (default: 'auto')
         */
        size?: any;
        /**
         * Set the size of the thumb to auto or a fixed number. (default: 'auto')
         */
        sizethumb?: any;
    }
}
interface JQuery {
    /**
     * Creates a new tinyscrollbar with the specified, or default, options.
     *
     * @param options The options
     */
    tinyscrollbar(options?: JQueryTinyScrollbar.JQueryTinyScrollbarOptions): JQuery;
    /**
     * Updates an existing tinyscrollbar with the specified, or default, options.
     *
     * @param options The options
     */
    tinyscrollbar_update(options?: any): JQuery;
}
