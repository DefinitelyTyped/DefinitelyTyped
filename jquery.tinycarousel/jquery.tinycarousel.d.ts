// Type definitions for jQuery tinycarousel 1.9
// Project: http://baijs.nl/tinycarousel/
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module JQueryTinyCarousel {
    export interface JQueryTinyCarouselOptions {
        /**
        * Start block of the carousel. (default: 1)
        */
        start?: number;
        /**
        * Vertical or horizontal scroller? 'x' or 'y'. (default: 'x')
        */
        axis?: string;
        /**
        * How many blocks do you want to move at a time? (default: 1)
        */
        display?: number;
        /**
        * If interval is true and rewind is true it will play in reverse if the last slide is reached. (default: false)
        */
        rewind?: boolean;
        /**
        * Show left and right navigation buttons? (default: true)
        */
        controls?: boolean;
        /**
        * Show page number navigation buttons? (default: false)
        */
        pager?: boolean;
        /**
        * Move to the next block on an interval. (default: false)
        */
        interval?: boolean;
        /**
        * Interval time in milliseconds. (default: 3000)
        */
        intervaltime?: number; 
        /**
        * Show animation when changing block? (default: true)
        */
        animation?: boolean;
        /**
        * Time of the animation in miliseconds (default: 1000)
        */
        duration?: number;
        /**
        * Function that executes after every move (default: null)
        */
        callback? : (element: HTMLElement, index: number) => void;
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