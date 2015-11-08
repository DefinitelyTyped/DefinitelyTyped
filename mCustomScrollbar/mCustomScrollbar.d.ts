// Type definitions for mCustomScrollbar 2.8.2
// Project: https://github.com/malihu/malihu-custom-scrollbar-plugin
// Definitions by: Sarah Williams <https://github.com/flurg>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module MCustomScrollbar {
    interface CustomScrollbarOptions {
        /**
        * Set the width of your content (overwrites CSS width), value in pixels (integer) or percentage (string)
        */
        setWidth?: any;
        /**
        * Set the height of your content (overwirtes CSS height), value in pixels (integer) or percentage (string)
        */
        setHeight?: any;
        /**
         * Define content’s scrolling axis (the type of scrollbars added to the element: vertical and/of horizontal).
         * Available values: "y", "x", "yx". y -vertical, x - horizontal
         */
        axis?: string;
        /**
        * Always keep scrollbar(s) visible, even when there’s nothing to scroll.
        * 0 – disable (default)
        * 1 – keep dragger rail visible
        * 2 – keep all scrollbar components (dragger, rail, buttons etc.) visible
        */
        alwaysShowScrollbar?: number;
        /**
        * Enable or disable auto-expanding the scrollbar when cursor is over or dragging the scrollbar.
        */
        autoExpandScrollbar?: boolean;
        /**
        * Scrolling inertia (easing), value in milliseconds (0 for no scrolling inertia)
        */
        scrollInertia?: number;
        /**
        * Mouse wheel support, value: true, false
        */
        mouseWheel?: boolean;
        /**
        * Mouse wheel scrolling pixels amount, value in pixels (integer) or "auto" (script calculates and sets pixels amount according to content length)
        */
        mouseWheelPixels?: any;
        /**
        * Auto-adjust scrollbar height/width according to content, values: true, false
        */
        autoDraggerLength?: boolean;
        /**
        * Automatically hide the scrollbar when idle or mouse is not over the content
        */
        autoHideScrollbar?: boolean;
        scrollButtons?: {
            /**
             * Enable or disable scroll buttons.
             */
            enable?: boolean;
            /**
            * Scroll buttons scroll type, values: "continuous" (scroll continuously while pressing the button), "pixels" (scrolls by a fixed number of pixels on each click")
            */
            scrollType?: string;
            /**
            * Scroll buttons continuous scrolling speed, integer value or "auto" (script calculates and sets the speed according to content length)
            */
            scrollSpeed?: number | string;
            /**
            * Scroll buttons pixels scrolling amount, value in pixels or "auto"
            */
            scrollAmount?: number | string;
        }
    advanced?: {
            /**
            * Update scrollbars on browser resize (for fluid content blocks and layouts based on percentages), values: true, false. Set to false only when you content has fixed dimensions
            */
            updateOnBrowserResize?: boolean;
            /**
            * Auto-update scrollbars on content resize (useful when adding/changing content progrmatically), value: true, false. Setting this to true makes the script check for content 
            * length changes (every few milliseconds) and automatically call plugin's update method to adjust the scrollbar accordingly
            */
            updateOnContentResize?: boolean;
            /**
            * Auto-expanding content's width on horizontal scrollbars, values: true, false. Set to true if you have horizontal scrollbr on content that change on-the-fly. Demo contains
            * blocks with images and horizontal scrollbars that use this option parameter
            */
            autoExpandHorizontalScroll?: boolean;
            /**
            * Auto-scrolling on elements that have focus (e.g. scrollbar automatically scrolls to form text fields when the TAB key is pressed), values: true, false
            */
            autoScrollOnFocus?: boolean;
            /**
            * Normalize mouse wheel delta (-1/1), values: true, false
            */
            normalizeMouseWheelDelta?: boolean;
        }
    /**
    * Additional scrolling method by touch-swipe content (for touch enabled devices), value: true, false
    */
    contentTouchScroll?: boolean;
        /**
        * All of the following callbacks option have examples in the callback demo - http://manos.malihu.gr/tuts/custom-scrollbar-plugin/callbacks_example.html
        */
        callbacks?: {
            /**
            * User defined callback function, triggered on scroll start event. You can call your own function(s) each time a scroll event begins 
            */
            onScrollStart?: () => void;
            /**
            * User defined callback function, triggered on scroll event. Call your own function(s) each time a scroll event completes
            */
            onScroll?: () => void;
            /**
            * A function to call when scrolling is completed and content is scrolled all the way to the end (bottom/right)
            */
            onTotalScroll?: () => void;
            /**
            * A function to call when scrolling is completed and content is scrolled back to the beginning (top/left)
            */
            onTotalScrollBack?: () => void;
            /**
            * Set an offset for which the onTotalScroll callback is triggered.
            * Its value is in pixels.
            */
            onTotalScrollOffset?: number;
            /**
            * Set an offset for which the onTotalScrollBack callback is triggered.
            * Its value is in pixels
            */
            onTotalScrollBackOffset?: number;
            /**
            * User defined callback function, triggered while scrolling
            */
            whileScrolling?: () => void;
            /**
            * Set the behavior of calling onTotalScroll and onTotalScrollBack offsets.
            * By default, callback offsets will trigger repeatedly while content is scrolling within the offsets.
            * Set alwaysTriggerOffsets: false when you need to trigger onTotalScroll and onTotalScrollBack callbacks once, each time scroll end or beginning is reached.
            */
            alwaysTriggerOffsets?: boolean;
        }
    /**
    * Set a scrollbar ready-to-use theme. See themes demo for all themes - http://manos.malihu.gr/tuts/custom-scrollbar-plugin/scrollbar_themes_demo.html
    */
    theme?: string;
    }

    interface ScrollToParameterOptions {
        /**
        * Scroll-to animation speed, value in milliseconds
        */
        scrollInertia?: number;
        /**
        * Scroll-to animation easing, values: "linear", "easeOut", "easeInOut". 
        */
        scrollEasing?: string;
        /**
        * Scroll scrollbar dragger (instead of content) to a number of pixels, values: true, false
        */
        moveDragger?: boolean;
        /**
        * Set a timeout for the method (the default timeout is 60 ms in order to work with automatic scrollbar update), value in milliseconds.
        */
        timeout?: number;
        /**
        * Trigger user defined callback after scroll-to completes, value: true, false
        */
        callbacks?: boolean;
    }
}

interface JQuery {
    /**
    * Calls specified methods on the scrollbar "update", "stop", "disable", "destroy"
    *
    * @param method Method name to call on scrollbar e.g. "update", "stop"
    */
    mCustomScrollbar(method: string): JQuery;
    /**
    * Calls the scrollTo method on the scrollbar
    *
    * @param scrollTo Method name as a string "scrollTo"
    * @param parameter String or pixel integer value to specify where to scroll to e.g. "bottom", "top" or 20
    * @param options Override default options
    */
    mCustomScrollbar(scrollTo: string, parameter: any, options?: MCustomScrollbar.ScrollToParameterOptions): JQuery;
    /**
    * Creates a new mCustomScrollbar with the specified or default options
    *
    * @param options Override default options
    */
    mCustomScrollbar(options?: MCustomScrollbar.CustomScrollbarOptions): JQuery;
}
