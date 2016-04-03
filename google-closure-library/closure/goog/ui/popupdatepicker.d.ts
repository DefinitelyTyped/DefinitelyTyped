declare module goog {
    function require(name: 'goog.ui.PopupDatePicker'): typeof goog.ui.PopupDatePicker;
}

declare module goog.ui {

    /**
     * Popup date picker widget. Fires goog.ui.PopupBase.EventType.SHOW or HIDE
     * events when its visibility changes.
     *
     * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
     *     enables the use of a custom date-picker instance.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class PopupDatePicker extends goog.ui.Component {
        constructor(opt_datePicker?: goog.ui.DatePicker, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * @return {boolean} Whether the date picker is visible.
         */
        isVisible(): boolean;
        
        /**
         * DatePicker cannot be used to decorate pre-existing html, since they're
         * not based on Components.
         * @param {Element} element Element to decorate.
         * @return {boolean} Returns always false.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * @return {goog.ui.DatePicker} The date picker instance.
         */
        getDatePicker(): goog.ui.DatePicker;
        
        /**
         * @return {goog.date.Date?} The selected date, if any.  See
         *     goog.ui.DatePicker.getDate().
         */
        getDate(): goog.date.Date;
        
        /**
         * Sets the selected date.  See goog.ui.DatePicker.setDate().
         * @param {goog.date.Date?} date The date to select.
         */
        setDate(date: goog.date.Date): void;
        
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
        
        /**
         * Attaches the popup date picker to an element.
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
        
        /**
         * Detatches the popup date picker from an element.
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
        
        /**
         * Sets whether the date picker can automatically move focus to its key event
         * target when it is set to visible.
         * @param {boolean} allow Whether to allow auto focus.
         */
        setAllowAutoFocus(allow: boolean): void;
        
        /**
         * @return {boolean} Whether the date picker can automatically move focus to
         * its key event target when it is set to visible.
         */
        getAllowAutoFocus(): boolean;
        
        /**
         * Show the popup at the bottom-left corner of the specified element.
         * @param {Element} element Reference element for displaying the popup -- popup
         *     will appear at the bottom-left corner of this element.
         */
        showPopup(element: Element): void;
        
        /**
         * Hides this popup.
         */
        hidePopup(): void;
    }
}
