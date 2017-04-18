declare module goog {
    function require(name: 'goog.fx.DragScrollSupport'): typeof goog.fx.DragScrollSupport;
}

declare module goog.fx {

    /**
     * A scroll support class. Currently this class will automatically scroll
     * a scrollable container node and scroll it by a fixed amount at a timed
     * interval when the mouse is moved above or below the container or in vertical
     * margin areas. Intended for use in drag and drop. This could potentially be
     * made more general and could support horizontal scrolling.
     *
     * @param {Element} containerNode A container that can be scrolled.
     * @param {number=} opt_margin Optional margin to use while scrolling.
     * @param {boolean=} opt_externalMouseMoveTracking Whether mouse move events
     *     are tracked externally by the client object which calls the mouse move
     *     event handler, useful when events are generated for more than one source
     *     element and/or are not real mousemove events.
     * @constructor
     * @extends {goog.Disposable}
     * @see ../demos/dragscrollsupport.html
     */
    class DragScrollSupport extends goog.Disposable {
        constructor(containerNode: Element, opt_margin?: number, opt_externalMouseMoveTracking?: boolean);
        
        /**
         * The suggested scrolling margin.
         * @type {number}
         */
        static MARGIN: number;
        
        /**
         * Sets whether scrolling should be constrained to happen only when the cursor
         * is inside the container node.
         * NOTE: If a margin is not set, then it does not make sense to
         * contain the scroll, because in that case scroll will never be triggered.
         * @param {boolean} constrain Whether scrolling should be constrained to happen
         *     only when the cursor is inside the container node.
         */
        setConstrainScroll(constrain: boolean): void;
        
        /**
         * Sets whether horizontal scrolling is allowed.
         * @param {boolean} scrolling Whether horizontal scrolling is allowed.
         */
        setHorizontalScrolling(scrolling: boolean): void;
        
        /**
         * Handler for mouse moves events.
         * @param {goog.events.Event} event Mouse move event.
         */
        onMouseMove(event: goog.events.Event): void;
        
        /**
         * Calculates scroll delta.
         *
         * @param {number} coordinate Current mouse pointer coordinate.
         * @param {number} min The coordinate value below which scrolling up should be
         *     started.
         * @param {number} rangeLength The length of the range in which scrolling should
         *     be disabled and above which scrolling down should be started.
         * @return {number} The calculated scroll delta.
         * @protected
         */
        calculateScrollDelta(coordinate: number, min: number, rangeLength: number): number;
    }
}
