declare module goog {
    function require(name: 'goog.positioning.ViewportPosition'): typeof goog.positioning.ViewportPosition;
}

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup is positioned according to
     * coordinates relative to the  element's viewport (page). This calculates the
     * correct position to use even if the element is relatively positioned to some
     * other element.
     *
     * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class ViewportPosition extends goog.positioning.AbstractPosition {
        constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
        
        /**
         * Repositions the popup according to the current state
         *
         * @param {Element} element The DOM element of the popup.
         * @param {goog.positioning.Corner} popupCorner The corner of the popup
         *     element that that should be positioned adjacent to the anchorElement.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize Preferred size of the element.
         * @override
         */
        reposition(element: Element, popupCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }
}
