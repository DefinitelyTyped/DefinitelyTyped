declare module goog {
    function require(name: 'goog.ui.PopupColorPicker'): typeof goog.ui.PopupColorPicker;
}

declare module goog.ui {

    /**
     * Popup color picker widget.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.ColorPicker=} opt_colorPicker Optional color picker to use
     *     for this popup.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class PopupColorPicker extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_colorPicker?: goog.ui.ColorPicker);
        
        /**
         * ColorPickers cannot be used to decorate pre-existing html, since the
         * structure they build is fairly complicated.
         * @param {Element} element Element to decorate.
         * @return {boolean} Returns always false.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * @return {goog.ui.ColorPicker} The color picker instance.
         */
        getColorPicker(): goog.ui.ColorPicker;
        
        /**
         * Returns whether the Popup dismisses itself when the user clicks outside of
         * it.
         * @return {boolean} Whether the Popup autohides on an external click.
         */
        getAutoHide(): boolean;
        
        /**
         * Sets whether the Popup dismisses itself when the user clicks outside of it -
         * must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
        
        /**
         * Returns the region inside which the Popup dismisses itself when the user
         * clicks, or null if it was not set. Null indicates the entire document is
         * the autohide region.
         * @return {Element} The DOM element for autohide, or null if it hasn't been
         *     set.
         */
        getAutoHideRegion(): Element;
        
        /**
         * Sets the region inside which the Popup dismisses itself when the user
         * clicks - must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {Element} element The DOM element for autohide.
         */
        setAutoHideRegion(element: Element): void;
        
        /**
         * Returns the {@link goog.ui.PopupBase} from this picker. Returns null if the
         * popup has not yet been created.
         *
         * NOTE: This should *ONLY* be called from tests. If called before createDom(),
         * this should return null.
         *
         * @return {goog.ui.PopupBase?} The popup or null if it hasn't been created.
         */
        getPopup(): goog.ui.PopupBase;
        
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
        
        /**
         * Attaches the popup color picker to an element.
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
        
        /**
         * Detatches the popup color picker from an element.
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
        
        /**
         * Gets the color that is currently selected in this color picker.
         * @return {?string} The hex string of the color selected, or null if no
         *     color is selected.
         */
        getSelectedColor(): string;
        
        /**
         * Sets whether the color picker can accept focus.
         * @param {boolean} focusable True iff the color picker can accept focus.
         */
        setFocusable(focusable: boolean): void;
        
        /**
         * Sets whether the color picker can automatically move focus to its key event
         * target when it is set to visible.
         * @param {boolean} allow Whether to allow auto focus.
         */
        setAllowAutoFocus(allow: boolean): void;
        
        /**
         * @return {boolean} Whether the color picker can automatically move focus to
         *     its key event target when it is set to visible.
         */
        getAllowAutoFocus(): boolean;
        
        /**
         * Sets whether the color picker should toggle off if it is already open.
         * @param {boolean} toggle The new toggle mode.
         */
        setToggleMode(toggle: boolean): void;
        
        /**
         * Gets whether the colorpicker is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
        
        /**
         * Sets whether the picker remembers the last selected color between popups.
         *
         * @param {boolean} remember Whether to remember the selection.
         */
        setRememberSelection(remember: boolean): void;
        
        /**
         * @return {boolean} Whether the picker remembers the last selected color
         *     between popups.
         */
        getRememberSelection(): boolean;
        
        /**
         * Add an array of colors to the colors displayed by the color picker.
         * Does not add duplicated colors.
         * @param {Array<string>} colors The array of colors to be added.
         */
        addColors(colors: Array<string>): void;
        
        /**
         * Clear the colors displayed by the color picker.
         */
        clearColors(): void;
        
        /**
         * Set the pinned corner of the popup.
         * @param {goog.positioning.Corner} corner The corner of the popup which is
         *     pinned to the attaching element.
         */
        setPinnedCorner(corner: goog.positioning.Corner): void;
        
        /**
         * Sets which corner of the attaching element this popup shows up.
         * @param {goog.positioning.Corner} corner The corner of the attaching element
         *     where to show the popup.
         */
        setPopupCorner(corner: goog.positioning.Corner): void;
        
        /**
         * Sets whether the popup shows up on hover. By default, appears on click.
         * @param {boolean} showOnHover True if popup should appear on hover.
         */
        setShowOnHover(showOnHover: boolean): void;
    }
}
