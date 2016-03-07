declare module goog {
    function require(name: 'goog.ui.Popup'): typeof goog.ui.Popup;
    function require(name: 'goog.ui.Popup.Overflow'): typeof goog.ui.Popup.Overflow;
    function require(name: 'goog.ui.Popup.AnchoredPosition'): typeof goog.ui.Popup.AnchoredPosition;
    function require(name: 'goog.ui.Popup.AnchoredViewPortPosition'): typeof goog.ui.Popup.AnchoredViewPortPosition;
    function require(name: 'goog.ui.Popup.AbsolutePosition'): typeof goog.ui.Popup.AbsolutePosition;
    function require(name: 'goog.ui.Popup.ViewPortPosition'): typeof goog.ui.Popup.ViewPortPosition;
    function require(name: 'goog.ui.Popup.ClientPosition'): typeof goog.ui.Popup.ClientPosition;
    function require(name: 'goog.ui.Popup.ViewPortClientPosition'): typeof goog.ui.Popup.ViewPortClientPosition;
}

declare module goog.ui {

    /**
     * The Popup class provides functionality for displaying an absolutely
     * positioned element at a particular location in the window. It's designed to
     * be used as the foundation for building controls like a menu or tooltip. The
     * Popup class includes functionality for displaying a Popup near adjacent to
     * an anchor element.
     *
     * This works cross browser and thus does not use IE's createPopup feature
     * which supports extending outside the edge of the brower window.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @param {goog.positioning.AbstractPosition=} opt_position A positioning helper
     *     object.
     * @constructor
     * @extends {goog.ui.PopupBase}
     */
    class Popup extends goog.ui.PopupBase {
        constructor(opt_element?: Element, opt_position?: goog.positioning.AbstractPosition);
        
        /**
         * Returns the corner of the popup to used in the positioning algorithm.
         *
         * @return {goog.positioning.Corner} The popup corner used for positioning.
         */
        getPinnedCorner(): goog.positioning.Corner;
        
        /**
         * Sets the corner of the popup to used in the positioning algorithm.
         *
         * @param {goog.positioning.Corner} corner The popup corner used for
         *     positioning.
         */
        setPinnedCorner(corner: goog.positioning.Corner): void;
        
        /**
         * @return {goog.positioning.AbstractPosition} The position helper object
         *     associated with the popup.
         */
        getPosition(): goog.positioning.AbstractPosition;
        
        /**
         * Sets the position helper object associated with the popup.
         *
         * @param {goog.positioning.AbstractPosition} position A position helper object.
         */
        setPosition(position: goog.positioning.AbstractPosition): void;
        
        /**
         * Returns the margin to place around the popup.
         *
         * @return {goog.math.Box?} The margin.
         */
        getMargin(): goog.math.Box;
        
        /**
         * Sets the margin to place around the popup.
         *
         * @param {goog.math.Box|number|null} arg1 Top value or Box.
         * @param {number=} opt_arg2 Right value.
         * @param {number=} opt_arg3 Bottom value.
         * @param {number=} opt_arg4 Left value.
         */
        setMargin(arg1: goog.math.Box|number|void, opt_arg2?: number, opt_arg3?: number, opt_arg4?: number): void;
    }
}

declare module goog.ui.Popup {

    /**
     * Enum for representing position handling in cases where the element would be
     * positioned outside the viewport.
     *
     * @enum {number}
     *
     * @deprecated Use {@link goog.positioning.Overflow} instead, this alias will be
     *     removed at the end of Q1 2009.
     */
    export import Overflow = goog.positioning.Overflow;

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.
     *
     * When using AnchoredPosition, it is recommended that the popup element
     * specified in the Popup constructor or Popup.setElement be absolutely
     * positioned.
     *
     * @param {Element} element The element to anchor the popup at.
     * @param {goog.positioning.Corner} corner The corner of the element to anchor
     *     the popup at.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     *
     * @deprecated Use {@link goog.positioning.AnchoredPosition} instead, this
     *     alias will be removed at the end of Q1 2009.
     * @final
     */
    class AnchoredPosition extends goog.positioning.AbstractPosition {
        constructor(element: Element, corner: goog.positioning.Corner);
    }

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element. The corners are swapped if dictated by the viewport. For instance
     * if a popup is anchored with its top left corner to the bottom left corner of
     * the anchor the popup is either displayed below the anchor (as specified) or
     * above it if there's not enough room to display it below.
     *
     * When using AnchoredPosition, it is recommended that the popup element
     * specified in the Popup constructor or Popup.setElement be absolutely
     * positioned.
     *
     * @param {Element} element The element to anchor the popup at.
     * @param {goog.positioning.Corner} corner The corner of the element to anchor
     *    the popup at.
     * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
     *    the element fits inside the viewport even if that means that the anchored
     *    corners are ignored.
     * @constructor
     * @extends {goog.ui.Popup.AnchoredPosition}
     *
     * @deprecated Use {@link goog.positioning.AnchoredViewportPosition} instead,
     *     this alias will be removed at the end of Q1 2009.
     */
    class AnchoredViewPortPosition extends goog.ui.Popup.AnchoredPosition {
        constructor(element: Element, corner: goog.positioning.Corner, opt_adjust?: boolean);
    }

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
     *
     * @deprecated Use {@link goog.positioning.AbsolutePosition} instead, this alias
     *     will be removed at the end of Q1 2009.
     * @final
     */
    class AbsolutePosition extends goog.positioning.AbstractPosition {
        constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
    }

    /**
     * Encapsulates a popup position where the popup is positioned according to
     * coordinates relative to the  element's view port (page). This calculates the
     * correct position to use even if the element is relatively positioned to some
     * other element.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.ui.Popup.AbsolutePosition}
     *
     * @deprecated Use {@link goog.positioning.ViewPortPosition} instead, this alias
     *     will be removed at the end of Q1 2009.
     */
    class ViewPortPosition extends goog.ui.Popup.AbsolutePosition {
        constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
    }

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates. This calculates the correct position to
     * use even if the element is relatively positioned to some other element. This
     * is for trying to position an element at the spot of the mouse cursor in
     * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
     * parameters.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.ui.Popup.AbsolutePosition}
     *
     * @deprecated Use {@link goog.positioning.ClientPosition} instead, this alias
     *     will be removed at the end of Q1 2009.
     * @final
     */
    class ClientPosition extends goog.ui.Popup.AbsolutePosition {
        constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
    }

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates, and made to stay within the viewport.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position if arg1 is a number representing the
     *     left position, ignored otherwise.
     * @constructor
     * @extends {goog.ui.Popup.ClientPosition}
     *
     * @deprecated Use {@link goog.positioning.ViewPortClientPosition} instead, this
     *     alias will be removed at the end of Q1 2009.
     */
    class ViewPortClientPosition extends goog.ui.Popup.ClientPosition {
        constructor(arg1: number|goog.math.Coordinate, opt_arg2?: number);
    }
}
