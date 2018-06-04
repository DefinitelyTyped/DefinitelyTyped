// Type definitions for jQuery.scrollTo.js 1.4.4
// Project: https://github.com/flesler/jquery.scrollTo
// Definitions by: Neil Stalker <https://github.com/nestalk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface ScrollToOptions {
    /**
    * Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
    */
    axis?: string;
    /**
    * The OVERALL length of the animation.
    */
    duration?: any;
    /**
    * The easing method for the animation.
    */
    easing?: string;
    /**
    * If true, the margin of the target element will be deducted from the final position.
    */
    margin?: boolean;
    /**
    * Add/deduct from the end position. 
    * One number for both axes or { top:x, left:y }.
    */
    offset?: any;
    /**
    * Add/deduct the height/width multiplied by 'over'.
    * Can be { top:x, left:y } when using both axes.
    */
    over? : any;
    /**
    * If true, and both axis are given.
    * The 2nd axis will only be animated after the first one ends.
    */
    queue?: boolean;
    /**
    * Function to be called after the scrolling ends. 
    */
    onAfter?: () => void;
    /**
    *  If queuing is activated, this function will be called after the first scrolling ends.
    */
    onAfterFirst?: () => void;
}

interface JQuery {
    /**
    * Scroll the matched elements
    */
    scrollTo: {
        /**
        * Scroll the matched elements
        *
        * @param target Where to scroll the matched elements.
        * @param duration The OVERALL length of the animation
        * @param settings Set of settings.
        */
        (target: any, duration?: number, settings?: ScrollToOptions): JQuery;
        /**
        * Scroll the matched elements
        *
        * @param target Where to scroll the matched elements.
        * @param duration The OVERALL length of the animation
        * @param onAfter The onAfter callback.
        */
        (target: any, duration: number, onAfter?: Function): JQuery;
        /**
        * Scroll the matched elements
        *
        * @param target Where to scroll the matched elements.
        * @param settings Set of settings.
        * @param onAfter The onAfter callback.
        */
        (target: any, settings: ScrollToOptions, onAfter?: Function): JQuery;

    };

}

interface JQueryStatic {
    /**
    * Scroll window
    */
    scrollTo: {
        /**
        * Scroll window
        *
        * @param target Where to scroll the matched elements.
        * @param duration The OVERALL length of the animation
        * @param settings Set of settings.
        */
        (target: any, duration?: number, settings?: ScrollToOptions): JQuery;
        /**
        * Scroll window
        *
        * @param target Where to scroll the matched elements.
        * @param duration The OVERALL length of the animation
        * @param onAfter The onAfter callback.
        */
        (target: any, duration: number, onAfter?: Function): JQuery;
        /**
        * Scroll window
        *
        * @param target Where to scroll the matched elements.
        * @param settings Set of settings.
        * @param onAfter The onAfter callback.
        */
        (target: any, settings: ScrollToOptions, onAfter?: Function): JQuery;

    };

}
