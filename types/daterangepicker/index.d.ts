/// <reference types="jquery"/>
import moment = require("moment");

declare global {
    interface JQuery {
        daterangepicker:
            & ((
                options?: daterangepicker.Options,
                callback?: daterangepicker.DataRangePickerCallback,
            ) => JQuery)
            & { defaultOptions?: daterangepicker.Options | undefined };
        data(key: "daterangepicker"): daterangepicker | undefined;

        on(
            events: daterangepicker.DatepickerEvents,
            handler: (event: Event, picker: daterangepicker.DateRangePicker) => void,
        ): JQuery;
    }
}

declare class daterangepicker {
    constructor(
        element: HTMLElement,
        options?: daterangepicker.Options,
        callback?: daterangepicker.DataRangePickerCallback,
    );

    startDate: moment.Moment;
    endDate: moment.Moment;
    container: JQuery;

    setStartDate(date: daterangepicker.DateOrString): void;
    setEndDate(date: daterangepicker.DateOrString): void;
    remove(): void;
}

declare namespace daterangepicker {
    type DataRangePickerCallback = (start: moment.Moment, end: moment.Moment, label: string | null) => void;

    type DateOrString = string | moment.Moment | Date;

    type DatepickerEvents =
        | "show.daterangepicker"
        | "hide.daterangepicker"
        | "showCalendar.daterangepicker"
        | "hideCalendar.daterangepicker"
        | "apply.daterangepicker"
        | "cancel.daterangepicker";

    interface DatepickerEventObject extends JQueryEventObject {
        date: Date;
        format(format?: string): string;
    }

    type Month = moment.Moment[][] & {
        firstDay: moment.Moment;
        lastDay: moment.Moment;
    };

    interface Calendar {
        calendar: Month;
        month: moment.Moment;
    }

    interface DateRangePicker {
        startDate: moment.Moment;
        endDate: moment.Moment;
        minDate: moment.Moment;
        maxDate: moment.Moment;
        maxSpan: moment.DurationInputArg1 | boolean;
        showDropdowns: boolean;
        minYear: string | number;
        maxYear: string | number;
        showWeekNumbers: boolean;
        showISOWeekNumbers: boolean;
        timePicker: boolean;
        timePickerIncrement: number;
        timePicker24Hour: boolean;
        timePickerSeconds: boolean;
        ranges: { [name: string]: [DateOrString, DateOrString] };
        showCustomRangeLabel: boolean;
        alwaysShowCalendars: boolean;
        opens: "left" | "right" | "center";
        drops: "down" | "up";
        buttonClasses: string[];
        applyButtonClasses: string;
        cancelButtonClasses: string;
        locale: Required<Locale>;
        singleDatePicker: boolean;
        autoApply: boolean;
        linkedCalendars: boolean;
        isInvalidDate(startDate: DateOrString, endDate?: DateOrString): boolean;
        isCustomDate(date: DateOrString): string | string[] | false | undefined;
        autoUpdateInput: boolean;
        parentEl: JQuery;
        element: JQuery;
        container: JQuery;
        isShowing: boolean;
        previousRightTime: moment.Moment;
        oldStartDate: moment.Moment;
        oldEndDate: moment.Moment;
        leftCalendar: Calendar;
        rightCalendar: Calendar;
        chosenLabel?: string | undefined;
    }

    interface Options {
        /**
         * The start of the initially selected date range
         */
        startDate?: DateOrString | undefined;
        /**
         * The end of the initially selected date range
         */
        endDate?: DateOrString | undefined;
        /**
         * The earliest date a user may select
         */
        minDate?: DateOrString | undefined;
        /**
         * The latest date a user may select
         */
        maxDate?: DateOrString | undefined;
        /**
         * The maximum span between the selected start and end dates. Can have any property you can add to a moment object (i.e. days, months)
         */
        maxSpan?: moment.DurationInputArg1 | undefined;
        /**
         * Show year and month select boxes above calendars to jump to a specific month and year
         */
        showDropdowns?: boolean | undefined;
        /**
         * The minimum year shown in the dropdowns when `showDropdowns` is set to true.
         */
        minYear?: number | undefined;
        /**
         * The maximum year shown in the dropdowns when `showDropdowns` is set to true.
         */
        maxYear?: number | undefined;
        /**
         * Show localized week numbers at the start of each week on the calendars
         */
        showWeekNumbers?: boolean | undefined;
        /**
         * Show ISO week numbers at the start of each week on the calendars
         */
        showISOWeekNumbers?: boolean | undefined;
        /**
         * Allow selection of dates with times, not just dates
         */
        timePicker?: boolean | undefined;
        /**
         * Increment of the minutes selection list for times (i.e. 30 to allow only selection of times ending in 0 or 30)
         */
        timePickerIncrement?: number | undefined;
        /**
         * Use 24- hour instead of 12- hour times, removing the AM/ PM selection.
         */
        timePicker24Hour?: boolean | undefined;
        /**
         * Show seconds in the timePicker.
         */
        timePickerSeconds?: boolean | undefined;
        /**
         * Set predefined date ranges the user can select from.Each key is the label for the range, and its value an array with two dates representing the bounds of the range.
         */
        ranges?: { [name: string]: [DateOrString, DateOrString] } | undefined;
        /**
         * Whether to show the 'Custom Range' label or just pre-defined ranges
         */
        showCustomRangeLabel?: boolean | undefined;
        /**
         * Normally, if you use the `ranges` option to specify pre-defined date ranges, calendars
         * for choosing a custom date range are not shown until the user clicks "Custom Range".
         * When this option is set to true, the calendars for choosing a custom date range are always shown instead.
         */
        alwaysShowCalendars?: boolean | undefined;
        /**
         * Whether the picker appears aligned to the left, to the right, or centered under the HTML element it's attached to
         */
        opens?: "left" | "right" | "center" | undefined;
        /**
         * Whether the picker appears below (default) or above the HTML element it's attached to
         */
        drops?: "down" | "up" | "auto" | undefined;
        /**
         * CSS class names that will be added to all buttons in the picker
         */
        buttonClasses?: string[] | undefined;
        /**
         * CSS class string that will be added to the apply button
         */
        applyButtonClasses?: string | undefined;
        /**
         * CSS class string that will be added to the cancel button
         */
        cancelButtonClasses?: string | undefined;
        /**
         * Allows you to provide localized strings for buttons and labels, customize the date display format, and change the first day of week for the calendars.
         */
        locale?: Locale | undefined;
        /**
         * Show only a single calendar to choose one date, instead of a range picker with two calendars; the start and end dates provided to your callback will be the same single date chosen.
         */
        singleDatePicker?: boolean | undefined;
        /**
         * Hide the apply and cancel buttons, and automatically apply a new date range as soon as two dates or a predefined range is selected.
         */
        autoApply?: boolean | undefined;
        /**
         * When enabled, the two calendars displayed will always be for two sequential months (i.e.
         * January and February), and both will be advanced when clicking the left or right arrows
         * above the calendars.When disabled, the two calendars can be individually advanced and
         * display any month/ year.
         */
        linkedCalendars?: boolean | undefined;
        /**
         * A function that is passed each date in the two calendars before they are displayed, and may return true or false to indicate whether that date should be available for selection or not.
         */
        isInvalidDate?(startDate: DateOrString, endDate?: DateOrString): boolean;
        /**
         * A function that is passed each date in the two calendars before they are displayed, and may return a string or array of CSS class names to apply to that date's calendar cell.
         */
        isCustomDate?(date: DateOrString): string | string[] | false | undefined;
        /**
         * Indicates whether the date range picker should automatically update the value of an < input > element it's attached to at initialization and when the selected dates change.
         */
        autoUpdateInput?: boolean | undefined;
        /**
         * jQuery selector of the parent element that the date range picker will be added to, if not provided this will be 'body'
         */
        parentEl?: Element | string | undefined;
    }

    interface Locale {
        /**
         * Text for cancel label.
         */
        cancelLabel?: string | undefined;
        /**
         * Text for apply label.
         */
        applyLabel?: string | undefined;
        /**
         * Text for fromLabel label.
         */
        fromLabel?: string | undefined;
        /**
         * Text for toLabel label.
         */
        toLabel?: string | undefined;
        /**
         * Format of the date string. example: 'YYYY-MM-DD'
         */
        format?: string | undefined;
        /**
         * Separator between the startDate and endDate in the attached input element. Example: ' - '
         */
        separator?: string | undefined;
        /**
         * Text for the week label.
         */
        weekLabel?: string | undefined;
        /**
         * Text for the custom range label.
         */
        customRangeLabel?: string | undefined;
        /**
         * The first day of the week (0-6, Sunday to Saturday).
         */
        firstDay?: number | undefined;
        /**
         * Weekday names displayed in the header of calendar.
         */
        daysOfWeek?: string[] | undefined;
        /**
         * Month names used in the month select boxes.
         */
        monthNames?: string[] | undefined;
    }
}

export = daterangepicker;
export as namespace daterangepicker;
