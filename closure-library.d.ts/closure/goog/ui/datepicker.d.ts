declare module goog {
    function require(name: 'goog.ui.DatePicker'): typeof goog.ui.DatePicker;
    function require(name: 'goog.ui.DatePickerEvent'): typeof goog.ui.DatePickerEvent;
}

declare module goog.ui {

    /**
     * DatePicker widget. Allows a single date to be selected from a calendar like
     * view.
     *
     * @param {goog.date.Date|Date=} opt_date Date to initialize the date picker
     *     with, defaults to the current date.
     * @param {Object=} opt_dateTimeSymbols Date and time symbols to use.
     *     Defaults to goog.i18n.DateTimeSymbols if not set.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.DatePickerRenderer=} opt_renderer Optional Date picker
     *     renderer.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class DatePicker extends goog.ui.Component {
        constructor(opt_date?: goog.date.Date|Date, opt_dateTimeSymbols?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.DatePickerRenderer);
        
        /**
         * Constants for event names
         *
         * @const
         */
        static Events: any;
        
        /**
         * @deprecated Use isInDocument.
         */
        isCreated: any;
        
        /**
         * @deprecated Use decorate instead.
         */
        create: any;
        
        /**
         * @return {number} The first day of week, 0 = Monday, 6 = Sunday.
         */
        getFirstWeekday(): number;
        
        /**
         * Returns the class name associated with specified weekday.
         * @param {number} wday The week day number to get the class name for.
         * @return {string} The class name associated with specified weekday.
         */
        getWeekdayClass(wday: number): string;
        
        /**
         * @return {boolean} Whether a fixed number of weeks should be showed. If not
         *     only weeks for the current month will be shown.
         */
        getShowFixedNumWeeks(): boolean;
        
        /**
         * @return {boolean} Whether a days from the previous and/or next month should
         *     be shown.
         */
        getShowOtherMonths(): boolean;
        
        /**
         * @return {boolean} Whether a the extra week(s) added always should be at the
         *     end. Only applicable if a fixed number of weeks are shown.
         */
        getExtraWeekAtEnd(): boolean;
        
        /**
         * @return {boolean} Whether week numbers should be shown.
         */
        getShowWeekNum(): boolean;
        
        /**
         * @return {boolean} Whether weekday names should be shown.
         */
        getShowWeekdayNames(): boolean;
        
        /**
         * @return {boolean} Whether none is a valid selection.
         */
        getAllowNone(): boolean;
        
        /**
         * @return {boolean} Whether the today button should be shown.
         */
        getShowToday(): boolean;
        
        /**
         * Returns base CSS class. This getter is used to get base CSS class part.
         * All CSS class names in component are created as:
         *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
         * @return {string} Base CSS class.
         */
        getBaseCssClass(): string;
        
        /**
         * Sets the first day of week
         *
         * @param {number} wday Week day, 0 = Monday, 6 = Sunday.
         */
        setFirstWeekday(wday: number): void;
        
        /**
         * Sets class name associated with specified weekday.
         *
         * @param {number} wday Week day, 0 = Monday, 6 = Sunday.
         * @param {string} className Class name.
         */
        setWeekdayClass(wday: number, className: string): void;
        
        /**
         * Sets whether a fixed number of weeks should be showed. If not only weeks
         * for the current month will be showed.
         *
         * @param {boolean} b Whether a fixed number of weeks should be showed.
         */
        setShowFixedNumWeeks(b: boolean): void;
        
        /**
         * Sets whether a days from the previous and/or next month should be shown.
         *
         * @param {boolean} b Whether a days from the previous and/or next month should
         *     be shown.
         */
        setShowOtherMonths(b: boolean): void;
        
        /**
         * Sets the range of dates which may be selected by the user.
         *
         * @param {goog.date.DateRange} dateRange The range of selectable dates.
         */
        setUserSelectableDateRange(dateRange: goog.date.DateRange): void;
        
        /**
         * Sets whether the picker should use a simple navigation menu that only
         * contains controls for navigating to the next and previous month. The default
         * navigation menu contains controls for navigating to the next/previous month,
         * next/previous year, and menus for jumping to specific months and years.
         *
         * @param {boolean} b Whether to use a simple navigation menu.
         */
        setUseSimpleNavigationMenu(b: boolean): void;
        
        /**
         * Sets whether a the extra week(s) added always should be at the end. Only
         * applicable if a fixed number of weeks are shown.
         *
         * @param {boolean} b Whether a the extra week(s) added always should be at the
         *     end.
         */
        setExtraWeekAtEnd(b: boolean): void;
        
        /**
         * Sets whether week numbers should be shown.
         *
         * @param {boolean} b Whether week numbers should be shown.
         */
        setShowWeekNum(b: boolean): void;
        
        /**
         * Sets whether weekday names should be shown.
         *
         * @param {boolean} b Whether weekday names should be shown.
         */
        setShowWeekdayNames(b: boolean): void;
        
        /**
         * Sets whether the picker uses narrow weekday names ('M', 'T', 'W', ...).
         *
         * The default behavior is to use short names ('Mon', 'Tue', 'Wed', ...).
         *
         * @param {boolean} b Whether to use narrow weekday names.
         */
        setUseNarrowWeekdayNames(b: boolean): void;
        
        /**
         * Sets whether none is a valid selection.
         *
         * @param {boolean} b Whether none is a valid selection.
         */
        setAllowNone(b: boolean): void;
        
        /**
         * Sets whether the today button should be shown.
         *
         * @param {boolean} b Whether the today button should be shown.
         */
        setShowToday(b: boolean): void;
        
        /**
         * Sets the decorator function. The function should have the interface of
         *   {string} f({goog.date.Date});
         * and return a String representing a CSS class to decorate the cell
         * corresponding to the date specified.
         *
         * @param {Function} f The decorator function.
         */
        setDecorator(f: Function): void;
        
        /**
         * Sets whether the date will be printed in long format. In long format, dates
         * such as '1' will be printed as '01'.
         *
         * @param {boolean} b Whethere dates should be printed in long format.
         */
        setLongDateFormat(b: boolean): void;
        
        /**
         * Changes the active month to the previous one.
         */
        previousMonth(): void;
        
        /**
         * Changes the active month to the next one.
         */
        nextMonth(): void;
        
        /**
         * Changes the active year to the previous one.
         */
        previousYear(): void;
        
        /**
         * Changes the active year to the next one.
         */
        nextYear(): void;
        
        /**
         * Selects the current date.
         */
        selectToday(): void;
        
        /**
         * Clears the selection.
         */
        selectNone(): void;
        
        /**
         * @return {!goog.date.Date} The active month displayed.
         */
        getActiveMonth(): goog.date.Date;
        
        /**
         * @return {goog.date.Date} The selected date or null if nothing is selected.
         */
        getDate(): goog.date.Date;
        
        /**
         * @param {number} row The row in the grid.
         * @param {number} col The column in the grid.
         * @return {goog.date.Date} The date in the grid or null if there is none.
         */
        getDateAt(row: number, col: number): goog.date.Date;
        
        /**
         * Returns a date element given a row and column. In elTable_, the elements that
         * represent dates are 1 indexed because of other elements such as headers.
         * This corrects for the offset and makes the API 0 indexed.
         *
         * @param {number} row The row in the element table.
         * @param {number} col The column in the element table.
         * @return {Element} The element in the grid or null if there is none.
         * @protected
         */
        getDateElementAt(row: number, col: number): Element;
        
        /**
         * Sets the selected date.
         *
         * @param {goog.date.Date|Date} date Date to select or null to select nothing.
         */
        setDate(date: goog.date.Date|Date): void;
    }

    /**
     * Object representing a date picker event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.DatePicker} target Date picker initiating event.
     * @param {goog.date.Date} date Selected date.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class DatePickerEvent extends goog.events.Event {
        constructor(type: string, target: goog.ui.DatePicker, date: goog.date.Date);
    }
}
