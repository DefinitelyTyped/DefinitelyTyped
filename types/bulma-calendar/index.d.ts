// Type definitions for bulma-calendar 6.0
// Project: https://creativebulma.net/product/calendar/demo
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

export interface BulmaCalendarOptions {
    /**
     * Component type
     *
     * @default 'datetime'
     */
    type?: 'date' | 'time' | 'datetime';

    /**
     * Picker dominant color
     *
     * @default 'primary'
     */
    color?: string;

    /**
     * Range capability (start and end date/time selection
     *
     * @default false
     */
    isRange?: boolean;

    /**
     * Possibility to select same date as start and end date in range mode
     *
     * @default true
     */
    allowSameDayRange?: boolean;

    /**
     * Display lang (from language supported by date-fns)
     *
     * @default navigator.language.substring(0, 2) || "en"
     */
    lang?: string;

    /**
     * Date format pattern
     *
     * @default 'MM/DD/YYYY'
     */
    dateFormat?: string;

    /**
     * Time format pattern
     *
     * @default 'HH:mm'
     */
    timeFormat?: string;

    /**
     * Display mode
     *
     * @default 'default'
     */
    displayMode?: 'default' | 'dialog' | 'inline';

    /**
     * @default 'auto'
     */
    position?: string;

    /**
     * Show/Hide header block (with current selection)
     *
     * @default true
     */
    showHeader?: boolean;

    /**
     * Header block position
     *
     * @default 'top'
     */
    headerPosition?: 'top' | 'bottom';

    /**
     * Show/Hide footer block
     *
     * @default true
     */
    showFooter?: boolean;

    /**
     * Show/Hide buttons
     *
     * @default true
     */
    showButtons?: boolean;

    /**
     * Show/Hide Today Button
     *
     * @default true
     */
    showTodayButton?: boolean;

    /**
     * Show/Hide Clear Button
     *
     * @default true
     */
    showClearButton?: boolean;

    /**
     * Cancel button label
     *
     * @default 'Cancel'
     */
    cancelLabel?: string;

    /**
     * Clear button label
     *
     * @default 'Clear'
     */
    clearLabel?: string;

    /**
     * Today button label
     *
     * @default 'Today'
     */
    todayLabel?: string;

    /**
     * Now button label
     *
     * @default 'Now'
     */
    nowLabel?: string;

    /**
     * Validate button label
     *
     * @default 'Validate'
     */
    validateLabel?: string;

    /**
     * Enable/disable month switch
     *
     * @default true
     */
    enableMonthSwitch?: boolean;

    /**
     * Enable/disable year switch
     *
     * @default true
     */
    enableYearSwitch?: boolean;

    /**
     * Pre-selected start date
     */
    startDate?: Date;

    /**
     * Pre-selected end date
     */
    endDate?: Date;

    /**
     * Minimum date allowed
     */
    minDate?: Date;

    /**
     * Maximum date allowed
     */
    maxDate?: Date;

    /**
     * List of disabled dates
     */
    disabledDates?: any[];

    /**
     * List of disabled week days
     */
    disabledWeekDays?: string | any[];

    /**
     * Default weekstart day number
     *
     * @default 0 // sunday
     */
    weekStart?: number;

    /**
     * Pre-selected start time
     */
    startTime?: Date;

    /**
     * Pre-selected end time
     */
    endTime?: Date;

    /**
     * Steps for minutes selector
     *
     * @default 5
     */
    minuteSteps?: number;

    /**
     * From label
     */
    labelFrom?: string;

    /**
     * To label
     */
    labelTo?: string;

    /**
     * Close picker on overlay click (only for dialog display style)
     *
     * @default true
     */
    closeOnOverlayClick?: boolean;

    /**
     * Automatically close the datePicker when date selected (or range date selected) - not available
     * for inline display style. If set to False then a validate button will be displayed into the
     * footer section.
     *
     * @default true
     */
    closeOnSelect?: boolean;

    /**
     * Automatically open datepicker when click into input element
     *
     * @default true
     */
    toggleOnInputClick?: boolean;

    /**
     * Callback to trigger once picker initiated
     */
    onReady?: () => void;
    icons?: {
        /**
         * Previous button icon
         */
        previous?: string;

        /**
         * Next button icon
         */
        next?: string;

        /**
         * Time icon
         */
        time?: string;

        /**
         * Date icon
         */
        date?: string;
    };
}

export type EventType = 'show' | 'hide' | 'select' | 'select:start';

export interface Event<T extends EventType = EventType> {
    type: T;
    timeStamp: number;
    data: bulmaCalendar;
}

export default class bulmaCalendar {
    // Custom EventEmitter implementation
    listenerCount(eventName: EventType): void;

    removeListeners(eventName: EventType, middleware?: boolean): void;

    middleware<T extends EventType>(eventName: T, fn: (event: Event<T>) => void): void;

    removeMiddleware(eventName: EventType): void;

    on<T extends EventType>(name: T, callback: (event: Event<T>) => void, once?: boolean): void;

    once<T extends EventType>(name: T, callback: (event: Event<T>) => void): void;

    emit(name: EventType, data: bulmaCalendar, silent?: boolean): void;

    // Constructors
    constructor(selector: string | HTMLElement, options?: BulmaCalendarOptions);

    static attach(selector?: string | HTMLElement, options?: BulmaCalendarOptions): bulmaCalendar[];

    // Methods
    /**
     * Open date picker (not available with "inline" display style)
     */
    show(): void;

    /**
     * Close date picker (not available with "inline" display style)
     */
    hide(): void;

    /**
     * Check if date picker is open or not
     *
     * @returns True if date picker is open else False
     */
    isOpen(): boolean;

    /**
     * Check if current instance is a range date picker
     *
     * @returns True if the instance is a range date picker
     */
    isRange(): boolean;

    /**
     * Get the date picker value as formatted string if no parameter else set the passed value
     *
     * @param value Formatted date value if no parameter passed else null
     *
     * @returns Date picker selected date (if not range calendar then endDate is undefined)
     */
    value(
        value?: string,
    ): {
        startDate: Date;
        endDate?: Date;
    };

    /**
     * Force calendar refresh
     */
    refresh(): void;

    /**
     * Force to set calendar data into UI inputs
     */
    save(): void;

    /**
     * Clear date selection (startDate and endDate are set to undefined)
     */
    clear(): void;

    // Getters
    /**
     * Get component instance ID
     */
    get id(): any;

    /**
     * Get active lang
     */
    get lang(): string;

    /**
     * Set component lang
     */
    set lang(lang: string);

    /**
     * Get selected date
     */
    get date(): { start?: Date; end?: Date };

    /**
     * Set date
     */
    set date(date: { start?: Date; end?: Date });

    /**
     * Get selected start date
     */
    get startDate(): Date;

    /**
     * Se start date
     */
    set startDate(startDate: Date);

    /**
     * Get selected end date
     */
    get endDate(): Date;

    /**
     * Set end date
     */
    set endDate(endDate: Date);

    /**
     * Get min possible date
     */
    get minDate(): Date;

    /**
     * Set min possible date
     */
    set minDate(minDate: Date);

    /**
     * Get max possible date
     */
    get maxDate(): Date;

    /**
     * Set max possible date
     */
    set maxDate(maxDate: Date);

    /**
     * Get date format pattern
     */
    get dateFormat(): string;

    /**
     * Set date format pattern
     */
    set dateFormat(dateFormat: string);

    /**
     * Get selected time
     */
    get time(): Date;

    /**
     * Set time
     */
    set time(time: Date);

    /**
     * Get selected start time
     */
    get startTime(): Date;

    /**
     * Set start time
     */
    set startTime(startTime: Date);

    /**
     * Get selected end time
     */
    get endTime(): Date;

    /**
     * Set end time
     */
    set endTime(endTime: Date);

    /**
     * Get time format pattern
     */
    get timeFormat(): string;

    /**
     * Set time format pattern
     */
    set timeFormat(timeFormat: string);
}
