/// <reference types="jquery" />

declare namespace JQueryTinyCarousel {
    export interface JQueryTinyCarouselOptions {
        /**
         * Start block of the carousel. (default: 1)
         */
        start?: number | undefined;
        /**
         * Vertical or horizontal scroller? 'x' or 'y'. (default: 'x')
         */
        axis?: string | undefined;
        /**
         * How many blocks do you want to move at a time? (default: 1)
         */
        display?: number | undefined;
        /**
         * If interval is true and rewind is true it will play in reverse if the last slide is reached. (default: false)
         */
        rewind?: boolean | undefined;
        /**
         * Show left and right navigation buttons? (default: true)
         */
        controls?: boolean | undefined;
        /**
         * Show page number navigation buttons? (default: false)
         */
        pager?: boolean | undefined;
        /**
         * Move to the next block on an interval. (default: false)
         */
        interval?: boolean | undefined;
        /**
         * Interval time in milliseconds. (default: 3000)
         */
        intervaltime?: number | undefined;
        /**
         * Show animation when changing block? (default: true)
         */
        animation?: boolean | undefined;
        /**
         * Time of the animation in miliseconds (default: 1000)
         */
        duration?: number | undefined;
        /**
         * Function that executes after every move (default: null)
         */
        callback?: ((element: HTMLElement, index: number) => void) | undefined;
    }
}
interface JQuery {
    /**
     * Creates a new tinycarousel with the specified, or default, options.
     *
     * @param options The options
     */
    tinycarousel(options?: JQueryTinyCarousel.JQueryTinyCarouselOptions): JQuery;
    /**
     * Moves the tinycarousel to the specified block.
     *
     * @param index The index of the block to move to
     */
    tinycarousel_move(index: number): void;

    /**
     * Starts the interval.
     */
    tinycarousel_start(): void;

    /**
     * Stops the interval.
     */
    tinycarousel_stop(): void;
}
