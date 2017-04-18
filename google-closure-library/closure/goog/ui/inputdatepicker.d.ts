declare module goog {
    function require(name: 'goog.ui.InputDatePicker'): typeof goog.ui.InputDatePicker;
}

declare module goog.ui {

    /**
     * Input date picker widget.
     *
     * @param {goog.i18n.DateTimeFormat} dateTimeFormatter A formatter instance
     *     used to format the date picker's date for display in the input element.
     * @param {goog.i18n.DateTimeParse} dateTimeParser A parser instance used to
     *     parse the input element's string as a date to set the picker.
     * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
     *     enables the use of a custom date-picker instance.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class InputDatePicker extends goog.ui.Component {
        constructor(dateTimeFormatter: goog.i18n.DateTimeFormat, dateTimeParser: goog.i18n.DateTimeParse, opt_datePicker?: goog.ui.DatePicker, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Returns the PopupDatePicker's internal DatePicker instance.  This can be
         * used to customize the date picker's styling.
         *
         * @return {goog.ui.DatePicker} The internal DatePicker instance.
         */
        getDatePicker(): goog.ui.DatePicker;
        
        /**
         * Returns the PopupDatePicker instance.
         *
         * @return {goog.ui.PopupDatePicker} Popup instance.
         */
        getPopupDatePicker(): goog.ui.PopupDatePicker;
        
        /**
         * Returns the selected date, if any.  Compares the dates from the date picker
         * and the input field, causing them to be synced if different.
         * @return {goog.date.Date?} The selected date, if any.
         */
        getDate(): goog.date.Date;
        
        /**
         * Sets the selected date.  See goog.ui.PopupDatePicker.setDate().
         * @param {goog.date.Date?} date The date to set.
         */
        setDate(date: goog.date.Date): void;
        
        /**
         * Sets the value of the input element.  This can be overridden to support
         * alternative types of input setting.
         *
         * @param {string} value The value to set.
         */
        setInputValue(value: string): void;
        
        /**
         * Returns the value of the input element.  This can be overridden to support
         * alternative types of input getting.
         *
         * @return {string} The input value.
         */
        getInputValue(): string;
        
        /**
         * Sets the element that the PopupDatePicker should be parented to. If not set,
         * defaults to the body element of the page.
         * @param {Element} el The element that the PopupDatePicker should be parented
         *     to.
         */
        setPopupParentElement(el: Element): void;
        
        /**
         * See goog.ui.PopupDatePicker.showPopup().
         * @param {Element} element Reference element for displaying the popup -- popup
         *     will appear at the bottom-left corner of this element.
         */
        showForElement(element: Element): void;
        
        /**
         * See goog.ui.PopupDatePicker.hidePopup().
         */
        hidePopup(): void;
    }
}
