declare module goog {
    function require(name: 'goog.positioning.AnchoredViewportPosition'): typeof goog.positioning.AnchoredViewportPosition;
}

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element. The corners are swapped if dictated by the viewport. For instance
     * if a popup is anchored with its top left corner to the bottom left corner of
     * the anchor the popup is either displayed below the anchor (as specified) or
     * above it if there's not enough room to display it below.
     *
     * When using this positioning object it's recommended that the movable element
     * be absolutely positioned.
     *
     * @param {Element} anchorElement Element the movable element should be
     *     anchored against.
     * @param {goog.positioning.Corner} corner Corner of anchored element the
     *     movable element should be positioned at.
     * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
     *     the element fits inside the viewport even if that means that the anchored
     *     corners are ignored.
     * @param {goog.math.Box=} opt_overflowConstraint Box object describing the
     *     dimensions in which the movable element could be shown.
     * @constructor
     * @extends {goog.positioning.AnchoredPosition}
     */
    class AnchoredViewportPosition extends goog.positioning.AnchoredPosition {
        constructor(anchorElement: Element, corner: goog.positioning.Corner, opt_adjust?: boolean, opt_overflowConstraint?: goog.math.Box);
        
        /**
         * @return {goog.math.Box|undefined} The box object describing the
         *     dimensions in which the movable element will be shown.
         */
        getOverflowConstraint(): goog.math.Box|void;
        
        /**
         * @param {goog.math.Box|undefined} overflowConstraint Box object describing the
         *     dimensions in which the movable element could be shown.
         */
        setOverflowConstraint(overflowConstraint: goog.math.Box|void): void;
        
        /**
         * @return {number} A bitmask for the "last resort" overflow.
         */
        getLastResortOverflow(): number;
        
        /**
         * @param {number} lastResortOverflow A bitmask for the "last resort" overflow,
         *     if we fail to fit the element on-screen.
         */
        setLastResortOverflow(lastResortOverflow: number): void;
        
        /**
         * Repositions the movable element.
         *
         * @param {Element} movableElement Element to position.
         * @param {goog.positioning.Corner} movableCorner Corner of the movable element
         *     that should be positioned adjacent to the anchored element.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize The preferred size of the
         *     movableElement.
         * @override
         */
        reposition(movableElement: Element, movableCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
        
        /**
         * Adjusts the corner if X or Y positioning failed.
         * @param {number} status The status of the last positionAtAnchor call.
         * @param {goog.positioning.Corner} corner The corner to adjust.
         * @return {goog.positioning.Corner} The adjusted corner.
         * @protected
         */
        adjustCorner(status: number, corner: goog.positioning.Corner): goog.positioning.Corner;
    }
}
