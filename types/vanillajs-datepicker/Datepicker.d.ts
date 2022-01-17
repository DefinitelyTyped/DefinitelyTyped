import DateRangePicker from "./DateRangePicker";

export default class Datepicker {
    static formatDate(date: Date | number, format: string, lang?: string): string;

    static parseDate(dateStr: string | Date | number, format: string, lang?: string): number;

    static get locales(): any;

    constructor(element: any, options?: any, rangepicker?: DateRangePicker);
    config: any;
    dates: any;
    editMode: boolean;
    element: Element;
    inline: boolean;
    inputField: any;
    picker: any;
    
    _options: object;
    _showing: boolean;

    get active(): boolean;

    get pickerElement(): any;

    setOptions(options: object): void;
    /**
     * Show the picker element
     */
    show(): void;
    _showing: boolean;
    /**
     * Hide the picker element
     * Not available on inline picker
     */
    hide(): void;
    /**
     * Destroy the Datepicker instance
     */
    destroy(): Datepicker;
    /**
     * Get the selected date(s)
     *
     * The method returns a Date object of selected date by default, and returns
     * an array of selected dates in multidate mode. If format string is passed,
     * it returns date string(s) formatted in given format.
     */
    getDate(format?: string): Date | string | Date[] | string[];
    /**
     * Set selected date(s)
     *
     * In multidate mode, you can pass multiple dates as a series of arguments
     * or an array. (Since each date is parsed individually, the type of the
     * dates doesn't have to be the same.)
     * The given dates are used to toggle the select status of each date. The
     * number of selected dates is kept from exceeding the length set to
     * maxNumberOfDates.
     *
     * With clear: true option, the method can be used to clear the selection
     * and to replace the selection instead of toggling in multidate mode.
     * If the option is passed with no date arguments or an empty dates array,
     * it works as "clear" (clear the selection then set nothing), and if the
     * option is passed with new dates to select, it works as "replace" (clear
     * the selection then set the given dates)
     *
     * When render: false option is used, the method omits re-rendering the
     * picker element. In this case, you need to call refresh() method later in
     * order for the picker element to reflect the changes. The input field is
     * refreshed always regardless of this option.
     *
     * When invalid (unparsable, repeated, disabled or out-of-range) dates are
     * passed, the method ignores them and applies only valid ones. In the case
     * that all the given dates are invalid, which is distinguished from passing
     * no dates, the method considers it as an error and leaves the selection
     * untouched.
     *
     */
    setDate(...args: any[]): void;
    /**
     * Update the selected date(s) with input field's value
     * Not available on inline picker
     *
     * The input field will be refreshed with properly formatted date string.
     *
     */
    update(options?: any): void;
    /**
     * Refresh the picker element and the associated input field
     */
    refresh(target?: string, forceRender?: boolean): void;
    /**
     * Enter edit mode
     * Not available on inline picker or when the picker element is hidden
     */
    enterEditMode(): void;
    /**
     * Exit from edit mode
     * Not available on inline picker
     */
    exitEditMode(options?: any): void;
}
