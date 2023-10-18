import moment = require("moment");

export = Lightpick;
export as namespace Lightpick;

declare class Lightpick {
    constructor(options: Lightpick.Options);

    gotoToday(): void;

    gotoDate(date?: Lightpick.InputDate): void;

    gotoMonth(month: number): void;

    gotoYear(year: number): void;

    prevMonth(): void;

    nextMonth(): void;

    setStartDate(date?: Lightpick.InputDate, preventOnSelect?: boolean): void;

    setEndDate(date?: Lightpick.InputDate, preventOnSelect?: boolean): void;

    /**
     * Set date when singleDate is true.
     */
    setDate(date?: Lightpick.InputDate, preventOnSelect?: boolean): void;

    /**
     * Set date range.
     */
    setDateRange(start?: Lightpick.InputDate, end?: Lightpick.InputDate, preventOnSelect?: boolean): void;

    setDisableDates(dates: ReadonlyArray<Lightpick.DisabledDate>): void;

    /**
     * Return current start of date range as moment object.
     */
    getStartDate(): Lightpick.OutputDate;

    /**
     * Return current end of date range as moment object.
     */
    getEndDate(): Lightpick.OutputDate;

    /**
     * Return current date as moment object.
     */
    getDate(): Lightpick.OutputDate;

    /**
     * Returns the date in a string format.
     */
    toString(format: Lightpick.FormatSpecification): string;

    /**
     * Make the picker visible.
     */
    show(): void;

    /**
     * Hide the picker.
     */
    hide(): void;

    /**
     * Hide the picker and remove all event listeners.
     */
    destroy(): void;

    reset(): void;

    /**
     * Update picker options.
     */
    reloadOptions(options: Lightpick.Options): void;

    /**
     * Tells whether the picker is currently visible or not.
     * Visibility can be changed with show() / hide() methods.
     */
    readonly isShowing: boolean;

    /**
     * The calendar containing HTML element.
     */
    readonly el: HTMLElement;
}

declare namespace Lightpick {
    type InputDate = moment.MomentInput | null;

    type OutputDate = moment.Moment | null;

    type InputDateRange = [InputDate, InputDate];

    type DisabledDate = InputDate | InputDateRange;

    type FormatSpecification = moment.MomentFormatSpecification;

    interface Options {
        /**
         * Bind the datepicker to a form field.
         */
        field: Options.Field;

        /**
         * If exists then end of date range will set here.
         */
        secondField?: Options.Field | undefined;

        /**
         * ISO day of the week.
         */
        firstDay?: Options.DayOfWeek | undefined;

        /**
         * Selector of the parent element that the date range picker will be added to, if not provided this will be 'body'.
         */
        parentEl?: string | Node | undefined;

        /**
         * Language code for names of days, months by Date.prototype.toLocaleString(). 'auto' will try detect user browser language.
         */
        lang?: string | undefined;

        /**
         * The default output format.
         */
        format?: string | undefined;

        /**
         * Separator between dates when one field.
         */
        separator?: string | undefined;

        /**
         * Number of visible months.
         */
        numberOfMonths?: number | undefined;

        /**
         * Number of columns months.
         */
        numberOfColumns?: number | undefined;

        /**
         * Choose a single date instead of a date range.
         */
        singleDate?: boolean | undefined;

        /**
         * Close calendar when picked date/range.
         */
        autoclose?: boolean | undefined;

        /**
         * Repick start/end instead of new range. This option working only when exists `secondField`.
         */
        repick?: boolean | undefined;

        startDate?: InputDate | undefined;

        endDate?: InputDate | undefined;

        /**
         * The minimum/earliest date that can be selected.
         */
        minDate?: InputDate | undefined;

        /**
         * The maximum/latest date that can be selected.
         */
        maxDate?: InputDate | undefined;

        disableDates?: ReadonlyArray<DisabledDate> | undefined;

        /**
         * Select second date after the first selected date.
         */
        selectForward?: boolean | undefined;

        /**
         * Select second date before the first selected date.
         */
        selectBackward?: boolean | undefined;

        /**
         * The minimum days of the selected range.
         */
        minDays?: number | undefined;

        /**
         * The maximum days of the selected range.
         */
        maxDays?: number | undefined;

        /**
         * Show tooltip.
         */
        hoveringTooltip?: boolean | undefined;

        /**
         * Close calendar when clicked outside the elements specified in field or parentEl. Recommended use when autoclose is set to false.
         */
        hideOnBodyClick?: boolean | undefined;

        /**
         * Footer calendar, if set to `true` will use default footer (Reset/Apply buttons) or custom string (html).
         */
        footer?: boolean | string | undefined;

        /**
         * If set to `false` then will reset selected range when disabled dates exists in selected range.
         */
        disabledDatesInRange?: boolean | undefined;

        /**
         * Calc date range in nights. (For hotels when last date doesn't include to range.)
         */
        tooltipNights?: boolean | undefined;

        orientation?: Options.Orientation | undefined;

        /**
         * Disable Saturday and Sunday.
         */
        disableWeekends?: boolean | undefined;

        /**
         * Show calendar inline. If true and parentEl is not provided then will use parentNode of field.
         */
        inline?: boolean | undefined;

        /**
         * Determines the weekday display style.
         * Two weekdays may have the same narrow style for some locales (e.g. Tuesday's narrow style is also T).
         */
        weekdayStyle?: Options.WeekdayStyle | undefined;

        /**
         * Dropdown selections for years, months. Can be false for disable both dropdowns.
         */
        dropdowns?: boolean | Options.Dropdowns | undefined;

        locale?: Options.Locale | undefined;

        /**
         * Triggered when either date / start date or end date has been changed.
         */
        onSelect?: Options.OnSelectFn | undefined;

        /**
         * Triggered when start date has been changed.
         */
        onSelectStart?: Options.OnSelectStartEndFn | undefined;

        /**
         * Triggered when end date has been changed.
         */
        onSelectEnd?: Options.OnSelectStartEndFn | undefined;

        /**
         * Triggered when calendar has been opened.
         */
        onOpen?: Options.OnOpenFn | undefined;

        /**
         * Triggered when calendar has been closed.
         */
        onClose?: Options.OnCloseFn | undefined;

        onError?: Options.OnErrorFn | undefined;

        /**
         * Triggered when the months select is changed.
         */
        onMonthsChange?: Options.OnMonthsChangeFn | undefined;

        /**
         * Triggered when the years select is changed.
         */
        onYearsChange?: Options.OnYearsChangeFn | undefined;
    }

    namespace Options {
        type Field = Element & { value: string };

        type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

        type Orientation =
            | "auto"
            | "left"
            | "right"
            | "top"
            | "bottom"
            | "top left"
            | "top right"
            | "bottom left"
            | "bottom right";

        type WeekdayStyle = "long" | "short" | "narrow";

        interface Dropdowns {
            /**
             * Can be false for disable dropdown of years.
             */
            years?: boolean | Dropdowns.Years | undefined;

            /**
             * true/false for enable/disable dropdown of months.
             */
            months?: boolean | undefined;
        }

        namespace Dropdowns {
            interface Years {
                min?: number | undefined;

                max?: number | undefined;
            }
        }

        interface Locale {
            /**
             * Text for buttons.
             */
            buttons?: Locale.Buttons | undefined;

            /**
             * Text for tooltip.
             */
            tooltip?: Partial<Locale.PluralizeFnLocale> | undefined;

            /**
             * Show tooltip text on disabled dates. (Eg. «Already booked»)
             */
            tooltipOnDisabled?: string | undefined;

            pluralize?: Locale.PluralizeFn | undefined;
        }

        namespace Locale {
            interface Buttons {
                prev?: string | undefined;

                next?: string | undefined;

                close?: string | undefined;

                reset?: string | undefined;

                apply?: string | undefined;
            }

            /**
             * Function for calc plural text. More examples for another locales on betsol/numerous.
             *
             * @see https://github.com/betsol/numerous/tree/master/locales
             */
            interface PluralizeFn {
                (i: string | number, locale: PluralizeFnLocale): string;
            }

            interface PluralizeFnLocale {
                one: string;

                other: string;
            }
        }

        /**
         * Callback function for when a date is selected.
         */
        interface OnSelectFn {
            (this: Lightpick, startDate: OutputDate, endDate: OutputDate): void;
        }

        /**
         * Callback function for when either a start or an end date is selected.
         */
        interface OnSelectStartEndFn {
            (this: Lightpick, date: OutputDate): void;
        }

        /**
         * Callback function for when the picker becomes visible.
         */
        interface OnOpenFn {
            (this: Lightpick): void;
        }

        /**
         * Callback function for when the picker is hidden.
         */
        interface OnCloseFn {
            (this: Lightpick): void;
        }

        interface OnErrorFn {
            (this: Lightpick, message: string): void;
        }

        /**
         * Callback function for when the months select is changed.
         */
        interface OnMonthsChangeFn {
            (this: Lightpick, month: number): void;
        }

        /**
         * Callback function for when the years select is changed.
         */
        interface OnYearsChangeFn {
            (this: Lightpick, year: number): void;
        }
    }
}
