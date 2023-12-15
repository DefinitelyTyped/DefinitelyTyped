/// <reference types="jquery" />

declare namespace MCustomScrollbar {
    type Factory = (jQuery: JQueryStatic) => void;

    interface CustomScrollbarOptions {
        /**
         * Set the width of your content (overwrites CSS width), value in pixels (integer) or percentage (string)
         */
        setWidth?: boolean | number | string | undefined;
        /**
         * Set the height of your content (overwirtes CSS height), value in pixels (integer) or percentage (string)
         */
        setHeight?: boolean | number | string | undefined;
        /**
         * Set the initial css top property of content, accepts string values (css top position).
         * Example: setTop: "-100px".
         */
        setTop?: number | string | undefined;
        /**
         * Set the initial css top property of content, accepts string values (css top position).
         * Example: setTop: "-100px".
         */
        setLeft?: number | string | undefined;
        /**
         * Define content’s scrolling axis (the type of scrollbars added to the element: vertical and/of horizontal).
         * Available values: "y", "x", "yx". y -vertical, x - horizontal, yx - vertical and horizontal
         */
        axis?: "x" | "y" | "yx" | undefined;
        /**
         * Set the position of scrollbar in relation to content.
         * Available values: "inside", "outside".
         * Setting scrollbarPosition: "inside" (default) makes scrollbar appear inside the element.
         * Setting scrollbarPosition: "outside" makes scrollbar appear outside the element.
         * Note that setting the value to "outside" requires your element (or parent elements)
         * to have CSS position: relative (otherwise the scrollbar will be positioned in relation to document’s root element).
         */
        scrollbarPosition?: "inside" | "outside" | undefined;
        /**
         * Always keep scrollbar(s) visible, even when there’s nothing to scroll.
         * 0 – disable (default)
         * 1 – keep dragger rail visible
         * 2 – keep all scrollbar components (dragger, rail, buttons etc.) visible
         */
        alwaysShowScrollbar?: number | undefined;
        /**
         * Make scrolling snap to a multiple of a fixed number of pixels. Useful in cases like scrolling tabular data,
         * image thumbnails or slides and you need to prevent scrolling from stopping half-way your elements.
         * Note that your elements must be of equal width or height in order for this to work properly.
         * To set different values for vertical and horizontal scrolling, use an array: [y,x]
         */
        snapAmount?: number | [number, number] | undefined;
        /**
         * Set an offset (in pixels) for the snapAmount option. Useful when for example you need to offset the
         * snap amount of table rows by the table header.
         */
        snapOffset?: number | undefined;
        /**
         * Enable or disable auto-expanding the scrollbar when cursor is over or dragging the scrollbar.
         */
        autoExpandScrollbar?: boolean | undefined;
        /**
         * Scrolling inertia (easing), value in milliseconds (0 for no scrolling inertia)
         */
        scrollInertia?: number | undefined;
        /**
         * Mouse wheel support
         */
        mouseWheel?: {
            /**
             * Enable or disable content scrolling via mouse-wheel.
             */
            enable?: boolean | undefined;
            /**
             * Set the mouse-wheel scrolling amount (in pixels).
             * The default value "auto" adjusts scrolling amount according to scrollable content length.
             */
            scrollAmount?: "auto" | number | undefined;
            /**
             * Define the mouse-wheel scrolling axis when both vertical and horizontal scrollbars are present.
             * Set axis: "y" (default) for vertical or axis: "x" for horizontal scrolling.
             */
            axis?: "x" | "y" | undefined;
            /**
             * Prevent the default behaviour which automatically scrolls the parent element when end
             * or beginning of scrolling is reached (same bahavior with browser’s native scrollbar).
             */
            preventDefault?: boolean | undefined;
            /**
             * Set the number of pixels one wheel notch scrolls. The default value “auto” uses the OS/browser value.
             */
            deltaFactor?: number | undefined;
            /**
             * Enable or disable mouse-wheel (delta) acceleration.
             * Setting normalizeDelta: true translates mouse-wheel delta value to -1 or 1.
             */
            normalizeDelta?: boolean | undefined;
            /**
             * Invert mouse-wheel scrolling direction.
             * Set to true to scroll down or right when mouse-wheel is turned upwards.
             */
            invert?: boolean | undefined;
            /**
             * Set the tags that disable mouse-wheel when cursor is over them.
             * Default value: ["select","option","keygen","datalist","textarea"]
             */
            disableOver?: string[] | undefined;
        } | undefined;
        /**
         * Keyboard support
         */
        keyboard?: {
            /**
             * Enable or disable content scrolling via keyboard.
             */
            enable?: boolean | undefined;
            /**
             * Set the keyboard arrows scrolling amount (in pixels).
             * The default value "auto" adjusts scrolling amount according to scrollable content length.
             */
            scrollAmount?: "auto" | number | undefined;
            /**
             * Define the buttons scrolling type/behavior.
             * scrollType: "stepless" – continuously scroll content while pressing the button (default)
             * scrollType: "stepped" – each button click scrolls content by a certain amount (defined in scrollAmount option above)
             */
            scrollType?: "stepless" | "stepped" | undefined;
        } | undefined;
        /**
         * Mouse wheel scrolling pixels amount, value in pixels (integer) or "auto" (script calculates and sets pixels amount according to content length)
         */
        mouseWheelPixels?: any;
        /**
         * Auto-adjust scrollbar height/width according to content, values: true, false
         */
        autoDraggerLength?: boolean | undefined;
        /**
         * Automatically hide the scrollbar when idle or mouse is not over the content
         */
        autoHideScrollbar?: boolean | undefined;
        scrollButtons?: {
            /**
             * Enable or disable scroll buttons.
             */
            enable?: boolean | undefined;
            /**
             * Define the buttons scrolling type/behavior.
             * scrollType: "stepless" – continuously scroll content while pressing the button (default)
             * scrollType: "stepped" – each button click scrolls content by a certain amount (defined in scrollAmount option above)
             */
            scrollType?: "stepless" | "stepped" | undefined;
            /**
             * Set a tabindex value for the buttons.
             */
            tabindex?: number | undefined;
            /**
             * Scroll buttons pixels scrolling amount, value in pixels or "auto"
             */
            scrollAmount?: "auto" | number | undefined;
        } | undefined;
        advanced?: {
            /**
             * Update scrollbars on browser resize (for fluid content blocks and layouts based on percentages), values: true, false. Set to false only when you content has fixed dimensions
             */
            updateOnBrowserResize?: boolean | undefined;
            /**
             * Auto-update scrollbars on content resize (useful when adding/changing content progrmatically), value: true, false. Setting this to true makes the script check for content
             * length changes (every few milliseconds) and automatically call plugin's update method to adjust the scrollbar accordingly
             */
            updateOnContentResize?: boolean | undefined;
            /**
             * Update scrollbar(s) automatically each time an image inside the element is fully loaded.
             * Default value is auto which triggers the function only on "x" and "yx" axis (if needed).
             * The value should be true when your content contains images and you need the function to trigger on any axis.
             */
            updateOnImageLoad?: "auto" | boolean | undefined;
            /**
             * Add extra selector(s) that’ll release scrollbar dragging upon mouseup, pointerup, touchend etc.
             * Example: extraDraggableSelectors: ".myClass, #myID"
             */
            extraDraggableSelectors?: string | undefined;
            /**
             * Add extra selector(s) that’ll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc.
             * Example: releaseDraggableSelectors: ".myClass, #myID"
             */
            releaseDraggableSelectors?: string | undefined;
            /**
             * Set the auto-update timeout in milliseconds.
             * Default timeout: 60
             */
            autoUpdateTimeout?: number | undefined;
            /**
             * Update scrollbar(s) automatically when the amount and size of specific selectors changes.
             * Useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size.
             * For example, setting updateOnSelectorChange: "ul li" will update scrollbars each time list-items inside the element are changed.
             * Setting the value to true, will update scrollbars each time any element is changed.
             * To disable (default) set to false.
             */
            updateOnSelectorChange?: string | boolean | undefined;
            /**
             * Auto-expanding content's width on horizontal scrollbars, values: true, false. Set to true if you have horizontal scrollbr on content that change on-the-fly. Demo contains
             * blocks with images and horizontal scrollbars that use this option parameter
             */
            autoExpandHorizontalScroll?: boolean | undefined;
            /**
             * Set the list of elements/selectors that will auto-scroll content to their position when focused.
             * For example, when pressing TAB key to focus input fields, if the field is out of the viewable area the content
             * will scroll to its top/left position (same bahavior with browser’s native scrollbar).
             * To completely disable this functionality, set autoScrollOnFocus: false.
             * Default:
             *   "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']"
             */
            autoScrollOnFocus?: boolean | string | undefined;
            /**
             * Normalize mouse wheel delta (-1/1), values: true, false
             */
            normalizeMouseWheelDelta?: boolean | undefined;
        } | undefined;
        /**
         * Enable or disable content touch-swipe scrolling for touch-enabled devices.
         * To completely disable, set contentTouchScroll: false.
         * Integer values define the axis-specific minimum amount required for scrolling momentum (default: 25).
         */
        contentTouchScroll?: boolean | number | undefined;
        /**
         * Enable or disable document touch-swipe scrolling for touch-enabled devices.
         */
        documentTouchScroll?: boolean | undefined;
        /**
         * All of the following callbacks option have examples in the callback demo - http://manos.malihu.gr/tuts/custom-scrollbar-plugin/callbacks_example.html
         */
        callbacks?: {
            /**
             * A function to call when plugin markup is created.
             */
            onCreate?: (() => void) | undefined;
            /**
             * A function to call when scrollbars have initialized
             */
            onInit?: (() => void) | undefined;
            /**
             * User defined callback function, triggered on scroll start event. You can call your own function(s) each time a scroll event begins
             */
            onScrollStart?: (() => void) | undefined;
            /**
             * User defined callback function, triggered on scroll event. Call your own function(s) each time a scroll event completes
             */
            onScroll?: (() => void) | undefined;
            /**
             * A function to call when scrolling is completed and content is scrolled all the way to the end (bottom/right)
             */
            onTotalScroll?: (() => void) | undefined;
            /**
             * A function to call when scrolling is completed and content is scrolled back to the beginning (top/left)
             */
            onTotalScrollBack?: (() => void) | undefined;
            /**
             * Set an offset for which the onTotalScroll callback is triggered.
             * Its value is in pixels.
             */
            onTotalScrollOffset?: number | undefined;
            /**
             * Set an offset for which the onTotalScrollBack callback is triggered.
             * Its value is in pixels
             */
            onTotalScrollBackOffset?: number | undefined;
            /**
             * User defined callback function, triggered while scrolling
             */
            whileScrolling?: (() => void) | undefined;
            /**
             * Set the behavior of calling onTotalScroll and onTotalScrollBack offsets.
             * By default, callback offsets will trigger repeatedly while content is scrolling within the offsets.
             * Set alwaysTriggerOffsets: false when you need to trigger onTotalScroll and onTotalScrollBack callbacks once, each time scroll end or beginning is reached.
             */
            alwaysTriggerOffsets?: boolean | undefined;
            /**
             * A function to call when content becomes long enough and vertical scrollbar is added.
             */
            onOverflowY?: (() => void) | undefined;
            /**
             * A function to call when content becomes wide enough and horizontal scrollbar is added.
             */
            onOverflowX?: (() => void) | undefined;
            /**
             * A function to call when content becomes short enough and vertical scrollbar is removed.
             */
            onOverflowYNone?: (() => void) | undefined;
            /**
             * A function to call when content becomes narrow enough and horizontal scrollbar is removed.
             */
            onOverflowXNone?: (() => void) | undefined;
            /**
             * A function to call right before scrollbar(s) are updated.
             */
            onBeforeUpdate?: (() => void) | undefined;
            /**
             * A function to call when scrollbar(s) are updated.
             */
            onUpdate?: (() => void) | undefined;
            /**
             * A function to call each time an image inside the element is fully loaded and scrollbar(s) are updated.
             */
            onImageLoad?: (() => void) | undefined;
            /**
             * A function to call each time a type of element is added, removed or changes its size and scrollbar(s) are updated.
             */
            onSelectorChange?: (() => void) | undefined;
        } | undefined;
        /**
         * Set a scrollbar ready-to-use theme. See themes demo for all themes - http://manos.malihu.gr/tuts/custom-scrollbar-plugin/scrollbar_themes_demo.html
         */
        theme?: string | undefined;
        /**
         * Enable or disable applying scrollbar(s) on all elements matching the current selector, now and in the future.
         * Set live: true when you need to add scrollbar(s) on elements that do not yet exist in the page.
         * These could be elements added by other scripts or plugins after some action by the user takes place (e.g. lightbox markup may not exist untill the user clicks a link).
         * If you need at any time to disable or enable the live option, set live: "off" and "on" respectively.
         * You can also tell the script to disable live option after the first invocation by setting live: "once".
         */
        live?: string | boolean | undefined;
        /**
         * Set the matching set of elements (instead of the current selector) to add scrollbar(s), now and in the future.
         */
        liveSelector?: string | undefined;
    }

    interface ScrollToParameterOptions {
        /**
         * Scroll-to animation speed, value in milliseconds
         */
        scrollInertia?: number | undefined;
        /**
         * Scroll-to animation easing, values: "linear", "easeOut", "easeInOut".
         */
        scrollEasing?: string | undefined;
        /**
         * Scroll scrollbar dragger (instead of content) to a number of pixels, values: true, false
         */
        moveDragger?: boolean | undefined;
        /**
         * Set a timeout for the method (the default timeout is 60 ms in order to work with automatic scrollbar update), value in milliseconds.
         */
        timeout?: number | undefined;
        /**
         * Trigger user defined callback after scroll-to completes, value: true, false
         */
        callbacks?: boolean | undefined;
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

declare module "malihu-custom-scrollbar-plugin" {
    var factory: MCustomScrollbar.Factory;

    export = factory;
}
