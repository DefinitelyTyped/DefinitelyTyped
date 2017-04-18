declare module goog {
    function require(name: 'goog.ui.AdvancedTooltip'): typeof goog.ui.AdvancedTooltip;
}

declare module goog.ui {

    /**
     * Advanced tooltip widget with cursor tracking abilities. Works like a regular
     * tooltip but can track the cursor position and direction to determine if the
     * tooltip should be dismissed or remain open.
     *
     * @param {Element|string=} opt_el Element to display tooltip for, either
     *     element reference or string id.
     * @param {?string=} opt_str Text message to display in tooltip.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Tooltip}
     */
    class AdvancedTooltip extends goog.ui.Tooltip {
        constructor(opt_el?: Element|string, opt_str?: string, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Sets margin around the tooltip where the cursor is allowed without dismissing
         * the tooltip.
         *
         * @param {goog.math.Box=} opt_box The margin around the tooltip.
         */
        setHotSpotPadding(opt_box?: goog.math.Box): void;
        
        /**
         * @return {goog.math.Box} box The margin around the tooltip where the cursor is
         *     allowed without dismissing the tooltip.
         */
        getHotSpotPadding(): goog.math.Box;
        
        /**
         * Sets whether to track the cursor and thereby close the tooltip if it moves
         * away from the tooltip and keep it open if it moves towards it.
         *
         * @param {boolean} b Whether to track the cursor.
         */
        setCursorTracking(b: boolean): void;
        
        /**
         * @return {boolean} Whether to track the cursor and thereby close the tooltip
         *     if it moves away from the tooltip and keep it open if it moves towards
         *     it.
         */
        getCursorTracking(): boolean;
        
        /**
         * Sets delay in milliseconds before tooltips are hidden if cursor tracking is
         * enabled and the cursor is moving away from the tooltip.
         *
         * @param {number} delay The delay in milliseconds.
         */
        setCursorTrackingHideDelayMs(delay: number): void;
        
        /**
         * @return {number} The delay in milliseconds before tooltips are hidden if
         *     cursor tracking is enabled and the cursor is moving away from the
         *     tooltip.
         */
        getCursorTrackingHideDelayMs(): number;
        
        /**
         * Returns true if the mouse is in the tooltip.
         * @return {boolean} True if the mouse is in the tooltip.
         */
        isMouseInTooltip(): boolean;
        
        /**
         * Checks whether the supplied coordinate is inside the tooltip, including
         * padding if any.
         * @param {goog.math.Coordinate} coord Coordinate being tested.
         * @return {boolean} Whether the coord is in the tooltip.
         * @override
         */
        isCoordinateInTooltip(coord: goog.math.Coordinate): boolean;
        
        /**
         * Called by timer from mouse out handler. Hides tooltip if cursor is still
         * outside element and tooltip.
         * @param {Element} el Anchor when hide timer was started.
         * @override
         */
        maybeHide(el: Element): void;
        
        /**
         * Handler for mouse move events.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         * @override
         */
        handleMouseMove(event: goog.events.BrowserEvent): void;
        
        /**
         * Handler for mouse over events for the tooltip element.
         *
         * @param {goog.events.BrowserEvent} event Event object.
         * @protected
         * @override
         */
        handleTooltipMouseOver(event: goog.events.BrowserEvent): void;
        
        /**
         * Override hide delay with cursor tracking hide delay while tracking.
         * @return {number} Hide delay to use.
         * @override
         */
        getHideDelayMs(): number;
        
        /**
         * Forces the recalculation of the hotspot on the next mouse over event.
         * @deprecated Not ever necessary to call this function. Hot spot is calculated
         *     as neccessary.
         */
        resetHotSpot(): void;
    }
}
