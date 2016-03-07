declare module goog {
    function require(name: 'goog.positioning.ViewportClientPosition'): typeof goog.positioning.ViewportClientPosition;
}

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates, and made to stay within the viewport.
     *
     * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position if arg1 is a number representing the
     *     left position, ignored otherwise.
     * @constructor
     * @extends {goog.positioning.ClientPosition}
     */
    class ViewportClientPosition extends goog.positioning.ClientPosition {
        constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
        
        /**
         * Set the last-resort overflow strategy, if the popup fails to fit.
         * @param {number} overflow A bitmask of goog.positioning.Overflow strategies.
         */
        setLastResortOverflow(overflow: number): void;
        
        /**
         * Repositions the popup according to the current state.
         *
         * @param {Element} element The DOM element of the popup.
         * @param {goog.positioning.Corner} popupCorner The corner of the popup
         *     element that that should be positioned adjacent to the anchorElement.
         *     One of the goog.positioning.Corner constants.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize Preferred size fo the element.
         * @override
         */
        reposition(element: Element, popupCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }
}
