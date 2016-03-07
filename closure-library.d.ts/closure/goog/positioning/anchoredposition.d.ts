declare module goog {
    function require(name: 'goog.positioning.AnchoredPosition'): typeof goog.positioning.AnchoredPosition;
}

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.
     *
     * When using AnchoredPosition, it is recommended that the popup element
     * specified in the Popup constructor or Popup.setElement be absolutely
     * positioned.
     *
     * @param {Element} anchorElement Element the movable element should be
     *     anchored against.
     * @param {goog.positioning.Corner} corner Corner of anchored element the
     *     movable element should be positioned at.
     * @param {number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified. Bitmap, {@see goog.positioning.Overflow}.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class AnchoredPosition extends goog.positioning.AbstractPosition {
        constructor(anchorElement: Element, corner: goog.positioning.Corner, opt_overflow?: number);
        
        /**
         * Repositions the movable element.
         *
         * @param {Element} movableElement Element to position.
         * @param {goog.positioning.Corner} movableCorner Corner of the movable element
         *     that should be positioned adjacent to the anchored element.
         * @param {goog.math.Box=} opt_margin A margin specifin pixels.
         * @param {goog.math.Size=} opt_preferredSize PreferredSize of the
         *     movableElement (unused in this class).
         * @override
         */
        reposition(movableElement: Element, movableCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }
}
