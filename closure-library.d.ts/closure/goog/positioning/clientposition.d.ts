declare module goog {
    function require(name: 'goog.positioning.ClientPosition'): typeof goog.positioning.ClientPosition;
}

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates. This calculates the correct position to
     * use even if the element is relatively positioned to some other element. This
     * is for trying to position an element at the spot of the mouse cursor in
     * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
     * parameters.
     *
     * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class ClientPosition extends goog.positioning.AbstractPosition {
        constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
        
        /**
         * Repositions the popup according to the current state
         *
         * @param {Element} movableElement The DOM element of the popup.
         * @param {goog.positioning.Corner} movableElementCorner The corner of
         *     the popup element that that should be positioned adjacent to
         *     the anchorElement.  One of the goog.positioning.Corner
         *     constants.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize Preferred size of the element.
         * @override
         */
        reposition(movableElement: Element, movableElementCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }
}
