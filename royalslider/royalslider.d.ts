// Type definitions for jQuery royal-slider
// Project: http://dimsemenov.com/plugins/royal-slider/documentation/
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module RoyalSlider {
    export interface RoyalSliderOptions {
        /**
        * Enable mobile invert style scrolling. (default: false)
        */
        invertscroll?: boolean;
        /**
        * Vertical or horizontal scroller? 'x' or 'y'. (default: 'x')
        */
        axis?: string;
        /**
        * How many pixels must the mouswheel scrolls at a time. (default: 40)
        */
        wheel?: number;
        /**
        * Enable or disable the mousewheel. (default: true)
        */
        scroll?: boolean;
        /**
        * Return scrollwheel event to browser if there is no more content. (default: true)
        */
        lockscroll?: boolean;
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
    * Creates a new royal-slider with the specified, or default, options.
    *
    * @param options The options
    */
    royalSlider(options?: RoyalSlider.RoyalSliderOptions): JQuery;
}