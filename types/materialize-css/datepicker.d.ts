/// <reference path="./common.d.ts" />

declare namespace M {
    class Datepicker extends Component<DatepickerOptions> implements Openable {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Datepicker;

        /**
         * Init Datepicker
         */
        static init(els: Element, options?: Partial<DatepickerOptions>): Datepicker;

        /**
         * Init Datepickers
         */
        static init(els: MElements, options?: Partial<DatepickerOptions>): Datepicker[];

        /**
         * If the picker is open.
         */
        isOpen: boolean;

        /**
         * The selected Date.
         */
        date: Date;

        /**
         * DONE button instance (undocumented!).
         */
        doneBtn: HTMLButtonElement;

        /**
         * CLEAR button instance (undocumented!).
         */
        clearBtn: HTMLButtonElement;

        /**
         * Open datepicker
         */
        open(): void;

        /**
         * Close datepicker
         */
        close(): void;

        /**
         * Gets a string representation of the selected date
         */
        toString(): string;

        /**
         * Set a date on the datepicker
         * @param date Date to set on the datepicker.
         * @param preventOnSelect Undocumented as of 5 March 2018
         */
        setDate(date?: Date | string, preventOnSelect?: boolean): void;

        /**
         * Change date view to a specific date on the datepicker
         * @param date Date to show on the datepicker.
         */
        gotoDate(date: Date): void;

        setInputValue(): void;
    }

    interface DatepickerOptions {
        /**
         * Automatically close picker when date is selected
         * @default false
         */
        autoClose: boolean;

        /**
         * The date output format for the input field value.
         * @default 'mmm dd, yyyy'
         */
        format: string;

        /**
         * Used to create date object from current input string.
         * @default null
         */
        parse: ((value: string, format: string) => Date) | null;

        /**
         * The initial date to view when first opened.
         * @default null
         */
        defaultDate: Date | null;

        /**
         * Make the `defaultDate` the initial selected value
         * @default false
         */
        setDefaultDate: boolean;

        /**
         * Prevent selection of any date on the weekend.
         * @default false
         */
        disableWeekends: boolean;

        /**
         * Custom function to disable certain days.
         * @default null
         */
        disableDayFn: ((day: Date) => boolean) | null;

        /**
         * First day of week (0: Sunday, 1: Monday etc).
         * @default 0
         */
        firstDay: number;

        /**
         * The earliest date that can be selected.
         * @default null
         */
        minDate: Date | null;

        /**
         * The latest date that can be selected.
         * @default null
         */
        maxDate: Date | null;

        /**
         * Number of years either side, or array of upper/lower range.
         * @default 10
         */
        yearRange: number | number[];

        /**
         * Changes Datepicker to RTL.
         * @default false
         */
        isRTL: boolean;

        /**
         * Show month after year in Datepicker title.
         * @default false
         */
        showMonthAfterYear: boolean;

        /**
         * Render days of the calendar grid that fall in the next or previous month.
         * @default false
         */
        showDaysInNextAndPreviousMonths: boolean;

        /**
         * Specify a DOM element to render the calendar in, by default it will be placed before the input
         * @default null
         */
        container: Element | null;

        /**
         * Show the clear button in the datepicker
         * @default false
         */
        showClearBtn: boolean;

        /**
         * Internationalization options
         */
        i18n: Partial<InternationalizationOptions>;

        /**
         * An array of string returned by `Date.toDateString()`, indicating there are events in the specified days.
         * @default []
         */
        events: string[];

        /**
         * Callback function when date is selected, first parameter is the newly selected date.
         * @default null
         */
        onSelect: ((this: Datepicker, selectedDate: Date) => void) | null;

        /**
         * Callback function when Datepicker is opened
         * @default null
         */
        onOpen: ((this: Datepicker) => void) | null;

        /**
         * Callback function when Datepicker is closed
         * @default null
         */
        onClose: ((this: Datepicker) => void) | null;

        /**
         * Callback function when Datepicker HTML is refreshed
         * @default null
         */
        onDraw: ((this: Datepicker) => void) | null;
    }
}

interface JQuery {
    datepicker(method: keyof Pick<M.Datepicker, "open" | "close" | "destroy">): JQuery;
    datepicker(method: keyof Pick<M.Datepicker, "setDate">, date?: Date): JQuery;
    datepicker(method: keyof Pick<M.Datepicker, "gotoDate">, date: Date): JQuery;
    datepicker(options?: Partial<M.DatepickerOptions>): JQuery;
}
