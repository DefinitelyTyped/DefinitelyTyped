interface DatePickerContext {
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
}

interface DatePicker {
    init(root?: HTMLElement | Document): void;
    on(el?: HTMLElement): void;
    off(el?: HTMLElement): void;
    /**
     * Get an object of the properties and elements belonging directly to the given
     * date picker component.
     */
    getDatePickerContext(el: HTMLElement): DatePickerContext;
    /**
     * Disable the date picker component
     */
    disable(el: HTMLElement): void;
    /**
     * Enable the date picker component
     */
    enable(el: HTMLElement): void;
    /**
     * Validate the value in the input as a valid date of format M/D/YYYY
     */
    isDateInputInvalid(el: HTMLElement): boolean;
    /**
     * Select the value of the date picker inputs.
     */
    setCalendarValue(el: HTMLElement, dateString: string): void;
    /**
     * Validate the value in the input as a valid date of format M/D/YYYY
     */
    validateDateInput(el: HTMLElement): void;
    /**
     * Render the calendar.
     */
    renderCalendar(el: HTMLElement, _dateToDisplay: Date): HTMLElement;
    /**
     * Update the calendar when visible.
     */
    updateCalendarIfVisible(el: HTMLElement): void;
}

declare const datePicker: DatePicker;

export default datePicker;
