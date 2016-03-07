declare module goog {
    function require(name: 'goog.positioning.AbsolutePosition'): typeof goog.positioning.AbsolutePosition;
}

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup absolutely positioned by
     * setting the left/top style elements directly to the specified values.
     * The position is generally relative to the element's offsetParent. Normally,
     * this is the document body, but can be another element if the popup element
     * is scoped by an element with relative position.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class AbsolutePosition extends goog.positioning.AbstractPosition {
        constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
        
        /**
         * Repositions the popup according to the current state.
         *
         * @param {Element} movableElement The DOM element to position.
         * @param {goog.positioning.Corner} movableCorner The corner of the movable
         *     element that should be positioned at the specified position.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize Prefered size of the
         *     movableElement.
         * @override
         */
        reposition(movableElement: Element, movableCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }
}
