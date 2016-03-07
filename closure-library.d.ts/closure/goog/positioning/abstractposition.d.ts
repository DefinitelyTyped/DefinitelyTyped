declare module goog {
    function require(name: 'goog.positioning.AbstractPosition'): typeof goog.positioning.AbstractPosition;
}

declare module goog.positioning {

    /**
     * Abstract position object. Encapsulates position and overflow handling.
     *
     * @constructor
     */
    class AbstractPosition {
        constructor();
        
        /**
         * Repositions the element. Abstract method, should be overloaded.
         *
         * @param {Element} movableElement Element to position.
         * @param {goog.positioning.Corner} corner Corner of the movable element that
         *     should be positioned adjacent to the anchored element.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize PreferredSize of the
         *     movableElement.
         */
        reposition(movableElement: Element, corner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }
}
