declare module goog {
    function require(name: 'goog.positioning'): typeof goog.positioning;
    function require(name: 'goog.positioning.Corner'): typeof goog.positioning.Corner;
    function require(name: 'goog.positioning.CornerBit'): typeof goog.positioning.CornerBit;
    function require(name: 'goog.positioning.Overflow'): typeof goog.positioning.Overflow;
    function require(name: 'goog.positioning.OverflowStatus'): typeof goog.positioning.OverflowStatus;
}

declare module goog.positioning {

    /**
     * Enum for representing an element corner for positioning the popup.
     *
     * The START constants map to LEFT if element directionality is left
     * to right and RIGHT if the directionality is right to left.
     * Likewise END maps to RIGHT or LEFT depending on the directionality.
     *
     * @enum {number}
     */
    type Corner = number;
    var Corner: {
        TOP_LEFT: Corner;
        TOP_RIGHT: Corner;
        BOTTOM_LEFT: Corner;
        BOTTOM_RIGHT: Corner;
        TOP_START: Corner;
        TOP_END: Corner;
        BOTTOM_START: Corner;
        BOTTOM_END: Corner;
    };

    /**
     * Enum for bits in the {@see goog.positioning.Corner) bitmap.
     *
     * @enum {number}
     */
    type CornerBit = number;
    var CornerBit: {
        BOTTOM: CornerBit;
        RIGHT: CornerBit;
        FLIP_RTL: CornerBit;
    };

    /**
     * Enum for representing position handling in cases where the element would be
     * positioned outside the viewport.
     *
     * @enum {number}
     */
    type Overflow = number;
    var Overflow: {
        IGNORE: Overflow;
        ADJUST_X: Overflow;
        FAIL_X: Overflow;
        ADJUST_Y: Overflow;
        FAIL_Y: Overflow;
        RESIZE_WIDTH: Overflow;
        RESIZE_HEIGHT: Overflow;
        ADJUST_X_EXCEPT_OFFSCREEN: Overflow;
        ADJUST_Y_EXCEPT_OFFSCREEN: Overflow;
    };

    /**
     * Enum for representing the outcome of a positioning call.
     *
     * @enum {number}
     */
    type OverflowStatus = number;
    var OverflowStatus: {
        NONE: OverflowStatus;
        ADJUSTED_X: OverflowStatus;
        ADJUSTED_Y: OverflowStatus;
        WIDTH_ADJUSTED: OverflowStatus;
        HEIGHT_ADJUSTED: OverflowStatus;
        FAILED_LEFT: OverflowStatus;
        FAILED_RIGHT: OverflowStatus;
        FAILED_TOP: OverflowStatus;
        FAILED_BOTTOM: OverflowStatus;
        FAILED_OUTSIDE_VIEWPORT: OverflowStatus;
        /**
         * Shorthand to check if a status code contains any fail code.
         * @type {number}
         */
        FAILED: number;

        /**
         * Shorthand to check if horizontal positioning failed.
         * @type {number}
         */
        FAILED_HORIZONTAL: number;

        /**
         * Shorthand to check if vertical positioning failed.
         * @type {number}
         */
        FAILED_VERTICAL: number;
    };

    /**
     * Positions a movable element relative to an anchor element. The caller
     * specifies the corners that should touch. This functions then moves the
     * movable element accordingly.
     *
     * @param {Element} anchorElement The element that is the anchor for where
     *    the movable element should position itself.
     * @param {goog.positioning.Corner} anchorElementCorner The corner of the
     *     anchorElement for positioning the movable element.
     * @param {Element} movableElement The element to move.
     * @param {goog.positioning.Corner} movableElementCorner The corner of the
     *     movableElement that that should be positioned adjacent to the anchor
     *     element.
     * @param {goog.math.Coordinate=} opt_offset An offset specified in pixels.
     *    After the normal positioning algorithm is applied, the offset is then
     *    applied. Positive coordinates move the popup closer to the center of the
     *    anchor element. Negative coordinates move the popup away from the center
     *    of the anchor element.
     * @param {goog.math.Box=} opt_margin A margin specified in pixels.
     *    After the normal positioning algorithm is applied and any offset, the
     *    margin is then applied. Positive coordinates move the popup away from the
     *    spot it was positioned towards its center. Negative coordinates move it
     *    towards the spot it was positioned away from its center.
     * @param {?number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified. Bitmap, {@see goog.positioning.Overflow}.
     * @param {goog.math.Size=} opt_preferredSize The preferred size of the
     *     movableElement.
     * @param {goog.math.Box=} opt_viewport Box object describing the dimensions of
     *     the viewport. The viewport is specified relative to offsetParent of
     *     {@code movableElement}. In other words, the viewport can be thought of as
     *     describing a "position: absolute" element contained in the offsetParent.
     *     It defaults to visible area of nearest scrollable ancestor of
     *     {@code movableElement} (see {@code goog.style.getVisibleRectForElement}).
     * @return {goog.positioning.OverflowStatus} Status bitmap,
     *     {@see goog.positioning.OverflowStatus}.
     */
    function positionAtAnchor(anchorElement: Element, anchorElementCorner: goog.positioning.Corner, movableElement: Element, movableElementCorner: goog.positioning.Corner, opt_offset?: goog.math.Coordinate, opt_margin?: goog.math.Box, opt_overflow?: number, opt_preferredSize?: goog.math.Size, opt_viewport?: goog.math.Box): goog.positioning.OverflowStatus;

    /**
     * Calculates the page offset of the given element's
     * offsetParent. This value can be used to translate any x- and
     * y-offset relative to the page to an offset relative to the
     * offsetParent, which can then be used directly with as position
     * coordinate for {@code positionWithCoordinate}.
     * @param {!Element} movableElement The element to calculate.
     * @return {!goog.math.Coordinate} The page offset, may be (0, 0).
     */
    function getOffsetParentPageOffset(movableElement: Element): goog.math.Coordinate;

    /**
     * Positions the specified corner of the movable element at the
     * specified coordinate.
     *
     * @param {goog.math.Coordinate} absolutePos The coordinate to position the
     *     element at.
     * @param {Element} movableElement The element to be positioned.
     * @param {goog.positioning.Corner} movableElementCorner The corner of the
     *     movableElement that that should be positioned.
     * @param {goog.math.Box=} opt_margin A margin specified in pixels.
     *    After the normal positioning algorithm is applied and any offset, the
     *    margin is then applied. Positive coordinates move the popup away from the
     *    spot it was positioned towards its center. Negative coordinates move it
     *    towards the spot it was positioned away from its center.
     * @param {goog.math.Box=} opt_viewport Box object describing the dimensions of
     *     the viewport. Required if opt_overflow is specified.
     * @param {?number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified, {@see goog.positioning.Overflow}.
     * @param {goog.math.Size=} opt_preferredSize The preferred size of the
     *     movableElement. Defaults to the current size.
     * @return {goog.positioning.OverflowStatus} Status bitmap.
     */
    function positionAtCoordinate(absolutePos: goog.math.Coordinate, movableElement: Element, movableElementCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_viewport?: goog.math.Box, opt_overflow?: number, opt_preferredSize?: goog.math.Size): goog.positioning.OverflowStatus;

    /**
     * Computes the position for an element to be placed on-screen at the
     * specified coordinates. Returns an object containing both the resulting
     * rectangle, and the overflow status bitmap.
     *
     * @param {!goog.math.Coordinate} absolutePos The coordinate to position the
     *     element at.
     * @param {!goog.math.Size} elementSize The size of the element to be
     *     positioned.
     * @param {goog.positioning.Corner} elementCorner The corner of the
     *     movableElement that that should be positioned.
     * @param {goog.math.Box=} opt_margin A margin specified in pixels.
     *    After the normal positioning algorithm is applied and any offset, the
     *    margin is then applied. Positive coordinates move the popup away from the
     *    spot it was positioned towards its center. Negative coordinates move it
     *    towards the spot it was positioned away from its center.
     * @param {goog.math.Box=} opt_viewport Box object describing the dimensions of
     *     the viewport. Required if opt_overflow is specified.
     * @param {?number=} opt_overflow Overflow handling mode. Defaults to IGNORE
     *     if not specified, {@see goog.positioning.Overflow}.
     * @return {{rect:!goog.math.Rect, status:goog.positioning.OverflowStatus}}
     *     Object containing the computed position and status bitmap.
     */
    function getPositionAtCoordinate(absolutePos: goog.math.Coordinate, elementSize: goog.math.Size, elementCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_viewport?: goog.math.Box, opt_overflow?: number): {rect: goog.math.Rect; status: goog.positioning.OverflowStatus};

    /**
     * Returns an absolute corner (top/bottom left/right) given an absolute
     * or relative (top/bottom start/end) corner and the direction of an element.
     * Absolute corners remain unchanged.
     * @param {Element} element DOM element to test for RTL direction.
     * @param {goog.positioning.Corner} corner The popup corner used for
     *     positioning.
     * @return {goog.positioning.Corner} Effective corner.
     */
    function getEffectiveCorner(element: Element, corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one horizontally.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner horizontally.
     */
    function flipCornerHorizontal(corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one vertically.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner vertically.
     */
    function flipCornerVertical(corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one horizontally and vertically.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner horizontally and
     *     vertically.
     */
    function flipCorner(corner: goog.positioning.Corner): goog.positioning.Corner;
}
