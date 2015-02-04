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
        set_width?: any;
        /**
        * Set the height of your content (overwirtes CSS height), value in pixels (integer) or percentage (string)
        */
        set_height?: any;
        /**
        * Add horizontal scrollbar (default is vertical), value: true, false
        */
        horizontalScroll?: boolean;
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
            * Scroll buttons scroll type, values: "continuous" (scroll continuously while pressing the button), "pixels" (scrolls by a fixed number of pixels on each click")
            */
            scrollType?: string;
            /**
            * Scroll buttons continuous scrolling speed, integer value or "auto" (script calculates and sets the speed according to content length)
            */
            scrollSpeed?: any;
            /**
            * Scroll buttons pixels scrolling amount, value in pixels
            */
            scrollAmount?: number;
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
            * User defined callback function, triggered when scroll end-limit is reached
            */
            onTotalScrollBack?: () => void;
            /**
            * Scroll end-limit offset, value in pixels
            */
            onTotalScrollOffset?: number;
            /**
            * User defined callback function, triggered while scrolling
            */
            whileScrolling?: () => void;
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
        * Scroll scrollbar dragger (instead of content) to a number of pixels, values: true, false
        */
        moveDragger?: boolean;
        /**
        * Trigger user defined callback after scroll-to completes, value: true, false
        */
        callbacks?: boolean;
    }
}

interface JQuery {
    /**
    * Creates a new mCustomScrollbar with the specified or default options
    *
    * @param options Override default options
    */
    mCustomScrollbar(options?: MCustomScrollbar.CustomScrollbarOptions): JQuery;
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
}