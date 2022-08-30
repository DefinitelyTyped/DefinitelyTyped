interface DatePicker {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Get an object of the properties and elements belonging directly to the given
     * date picker component.
     *
     * @param el the element within the date picker
     * @returns elements
     */
    getDatePickerContext(el: HTMLElement): {
        calendarEl: HTMLDivElement;
        datePickerEl: HTMLElement;
        internalInputEl: HTMLInputElement;
        externalInputEl: HTMLInputElement;
        statusEl: HTMLDivElement;
        firstYearChunkEl: HTMLDivElement;
        calendarDate: Date;
        minDate: Date;
        maxDate: Date;
        selectedDate: Date;
        rangeDate: Date;
        defaultDate: Date;
    };
    /**
     * Disable the date picker component
     *
     * @param el An element within the date picker component
     */
    disable(el: HTMLInputElement): void;
    /**
     * Enable the date picker component
     *
     * @param el An element within the date picker component
     */
    enable(el: HTMLInputElement): void;
    /**
     * Validate the value in the input as a valid date of format M/D/YYYY
     *
     * @param el An element within the date picker component
     */
    isDateInputInvalid(el: HTMLInputElement): boolean;
    /**
     * Select the value of the date picker inputs.
     *
     * @param el An element within the date picker component
     * @param dateString The date string to update in YYYY-MM-DD format
     */
    setCalendarValue(el: HTMLButtonElement, dateString: string): void;
    /**
     * Validate the value in the input as a valid date of format M/D/YYYY
     *
     * @param el An element within the date picker component
     */
    validateDateInput(el: HTMLElement): void;
    /**
     * render the calendar.
     *
     * @param el An element within the date picker component
     * @param _dateToDisplay a date to render on the calendar
     * @returns a reference to the new calendar element
     */
    renderCalendar(el: HTMLElement, _dateToDisplay: Date): HTMLElement;
    /**
     * Update the calendar when visible.
     *
     * @param el an element within the date picker
     */
    updateCalendarIfVisible(el: HTMLElement): void;
}

declare const datePicker: DatePicker;

export default datePicker;
