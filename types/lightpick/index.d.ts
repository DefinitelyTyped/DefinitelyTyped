// Type definitions for Lightpick 1.4
// Project: https://wakirin.github.io/Lightpick
// Definitions by: Adam Kwiatek <https://github.com/akwiatek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import moment = require('moment');

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
        secondField?: Options.Field;

        /**
         * ISO day of the week.
         */
        firstDay?: Options.DayOfWeek;

        /**
         * Selector of the parent element that the date range picker will be added to, if not provided this will be 'body'.
         */
        parentEl?: string | Node;

        /**
         * Language code for names of days, months by Date.prototype.toLocaleString(). 'auto' will try detect user browser language.
         */
        lang?: string;

        /**
         * The default output format.
         */
        format?: string;

        /**
         * Separator between dates when one field.
         */
        separator?: string;

        /**
         * Number of visible months.
         */
        numberOfMonths?: number;

        /**
         * Number of columns months.
         */
        numberOfColumns?: number;

        /**
         * Choose a single date instead of a date range.
         */
        singleDate?: boolean;

        /**
         * Close calendar when picked date/range.
         */
        autoclose?: boolean;

        /**
         * Repick start/end instead of new range. This option working only when exists `secondField`.
         */
        repick?: boolean;

        startDate?: InputDate;

        endDate?: InputDate;

        /**
         * The minimum/earliest date that can be selected.
         */
        minDate?: InputDate;

        /**
         * The maximum/latest date that can be selected.
         */
        maxDate?: InputDate;

        disableDates?: ReadonlyArray<DisabledDate>;

        /**
         * Select second date after the first selected date.
         */
        selectForward?: boolean;

        /**
         * Select second date before the first selected date.
         */
        selectBackward?: boolean;

        /**
         * The minimum days of the selected range.
         */
        minDays?: number;

        /**
         * The maximum days of the selected range.
         */
        maxDays?: number;

        /**
         * Show tooltip.
         */
        hoveringTooltip?: boolean;

        /**
         * Close calendar when clicked outside the elements specified in field or parentEl. Recommended use when autoclose is set to false.
         */
        hideOnBodyClick?: boolean;

        /**
         * Footer calendar, if set to `true` will use default footer (Reset/Apply buttons) or custom string (html).
         */
        footer?: boolean | string;

        /**
         * If set to `false` then will reset selected range when disabled dates exists in selected range.
         */
        disabledDatesInRange?: boolean;

        /**
         * Calc date range in nights. (For hotels when last date doesn't include to range.)
         */
        tooltipNights?: boolean;

        orientation?: Options.Orientation;

        /**
         * Disable Saturday and Sunday.
         */
        disableWeekends?: boolean;

        /**
         * Show calendar inline. If true and parentEl is not provided then will use parentNode of field.
         */
        inline?: boolean;

        /**
         * Determines the weekday display style.
         * Two weekdays may have the same narrow style for some locales (e.g. Tuesday's narrow style is also T).
         */
        weekdayStyle?: Options.WeekdayStyle;

        /**
         * Dropdown selections for years, months. Can be false for disable both dropdowns.
         */
        dropdowns?: boolean | Options.Dropdowns;

        locale?: Options.Locale;

        /**
         * Triggered when either date / start date or end date has been changed.
         */
        onSelect?: Options.OnSelectFn;

        /**
         * Triggered when start date has been changed.
         */
        onSelectStart?: Options.OnSelectStartEndFn;

        /**
         * Triggered when end date has been changed.
         */
        onSelectEnd?: Options.OnSelectStartEndFn;

        /**
         * Triggered when calendar has been opened.
         */
        onOpen?: Options.OnOpenFn;

        /**
         * Triggered when calendar has been closed.
         */
        onClose?: Options.OnCloseFn;

        onError?: Options.OnErrorFn;

        /**
         * Triggered when the months select is changed.
         */
        onMonthsChange?: Options.OnMonthsChangeFn;

        /**
         * Triggered when the years select is changed.
         */
        onYearsChange?: Options.OnYearsChangeFn;
    }

    namespace Options {
        type Field = Element & { value: string };

        type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

        type Orientation =
            | 'auto'
            | 'left'
            | 'right'
            | 'top'
            | 'bottom'
            | 'top left'
            | 'top right'
            | 'bottom left'
            | 'bottom right';

        type WeekdayStyle = 'long' | 'short' | 'narrow';

        interface Dropdowns {
            /**
             * Can be false for disable dropdown of years.
             */
            years?: boolean | Dropdowns.Years;

            /**
             * true/false for enable/disable dropdown of months.
             */
            months?: boolean;
        }

        namespace Dropdowns {
            interface Years {
                min?: number;

                max?: number;
            }
        }

        interface Locale {
            /**
             * Text for buttons.
             */
            buttons?: Locale.Buttons;

            /**
             * Text for tooltip.
             */
            tooltip?: Partial<Locale.PluralizeFnLocale>;

            /**
             * Show tooltip text on disabled dates. (Eg. «Already booked»)
             */
            tooltipOnDisabled?: string;

            pluralize?: Locale.PluralizeFn;
        }

        namespace Locale {
            interface Buttons {
                prev?: string;

                next?: string;

                close?: string;

                reset?: string;

                apply?: string;
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
