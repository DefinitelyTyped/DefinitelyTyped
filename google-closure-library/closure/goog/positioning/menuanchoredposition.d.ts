declare module goog {
    function require(name: 'goog.positioning.MenuAnchoredPosition'): typeof goog.positioning.MenuAnchoredPosition;
}

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.  The positioning behavior changes based on the values of
     * opt_adjust and opt_resize.
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
     * @param {boolean=} opt_resize Whether the positioning should be adjusted until
     *     the element fits inside the viewport on the X axis and its height is
     *     resized so if fits in the viewport. This take precedence over opt_adjust.
     * @constructor
     * @extends {goog.positioning.AnchoredViewportPosition}
     */
    class MenuAnchoredPosition extends goog.positioning.AnchoredViewportPosition {
        constructor(anchorElement: Element, corner: goog.positioning.Corner, opt_adjust?: boolean, opt_resize?: boolean);
    }
}
