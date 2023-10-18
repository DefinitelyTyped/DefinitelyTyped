/// <reference types="jquery"/>

type DatepickerEvents =
    | "show"
    | "hide"
    | "clearDate"
    | "changeDate"
    | "changeMonth"
    | "changeYear"
    | "changeDecade"
    | "changeCentury";

type DatepickerViewModes = 0 | "days" | 1 | "months" | 2 | "years" | 3 | "decades" | 4 | "centuries" | "millenium";

type DatepickerOrientations =
    | "auto"
    | "left top"
    | "left bottom"
    | "right top"
    | "right bottom"
    | "top auto"
    | "bottom auto"
    | "auto left"
    | "top left"
    | "bottom left"
    | "auto right"
    | "top right"
    | "bottom right";

/**
 * All options that take a “Date” can handle a Date object; a String
 * formatted according to the given format; or a timedelta relative
 * to today, eg “-1d”, “+6m +1y”, etc, where valid units are “d” (day),
 * “w” (week), “m” (month), and “y” (year).
 *
 * See online docs for more info:
 *  https://bootstrap-datepicker.readthedocs.io/en/latest/options.html
 */
interface DatepickerOptions {
    autoclose?: boolean | undefined;
    assumeNearbyYear?: boolean | number | undefined;
    beforeShowDay?: ((date: Date) => undefined | string | boolean | DatepickerBeforeShowDayResponse) | undefined;
    beforeShowMonth?: ((date: Date) => undefined | string | boolean | DatepickerBeforeShowResponse) | undefined;
    beforeShowYear?: ((date: Date) => undefined | string | boolean | DatepickerBeforeShowResponse) | undefined;
    beforeShowDecade?: ((date: Date) => undefined | string | boolean | DatepickerBeforeShowResponse) | undefined;
    beforeShowCentury?: ((date: Date) => undefined | string | boolean | DatepickerBeforeShowResponse) | undefined;
    calendarWeeks?: boolean | undefined;
    clearBtn?: boolean | undefined;
    container?: string | undefined;
    datesDisabled?: string | string[] | undefined;
    daysOfWeekDisabled?: string | number[] | undefined;
    daysOfWeekHighlighted?: string | number[] | undefined;
    defaultViewDate?: Date | string | DatepickerViewDate | undefined;
    enableOnReadonly?: boolean | undefined;
    endDate?: Date | string | undefined;
    forceParse?: boolean | undefined;
    format?: string | DatepickerCustomFormatOptions | undefined;
    immediateUpdates?: boolean | undefined;
    inputs?: any[] | undefined;
    keepEmptyValues?: boolean | undefined;
    keyboardNavigation?: boolean | undefined;
    language?: string | undefined;
    maxViewMode?: DatepickerViewModes | undefined;
    minViewMode?: DatepickerViewModes | undefined;
    multidate?: boolean | number | undefined;
    multidateSeparator?: string | undefined;
    orientation?: DatepickerOrientations | undefined;
    showOnFocus?: boolean | undefined;
    startDate?: Date | string | undefined;
    startView?: DatepickerViewModes | undefined;
    showWeekDays?: boolean | undefined;
    templates?: any;
    title?: string | undefined;
    todayBtn?: boolean | "linked" | undefined;
    todayHighlight?: boolean | undefined;
    toggleActive?: boolean | undefined;
    updateViewDate?: boolean | undefined;
    weekStart?: number | undefined;
    zIndexOffset?: number | undefined;
}

interface DatepickerViewDate {
    year: number;
    /** Month starting with 0 */
    month: number;
    /** Day of the month starting with 1 */
    day: number;
}

interface DatepickerBeforeShowResponse {
    enabled?: boolean | undefined;
    classes?: string | undefined;
    tooltip?: string | undefined;
}

interface DatepickerBeforeShowDayResponse extends DatepickerBeforeShowResponse {
    content?: string | undefined;
}

interface DatepickerCustomFormatOptions {
    toDisplay?(date: string, format: any, language: any): string;
    toValue?(date: string, format: any, language: any): Date;
}

interface DatepickerEventObject extends JQueryEventObject {
    date: Date;
    dates: Date[];
    format(ix?: number): string;
    format(format?: string): string;
    format(ix?: number, format?: string): string;
}

interface JQuery {
    datepicker(): JQuery;
    datepicker(methodName: string): any;
    datepicker(methodName: string, params: any): any;
    datepicker(options: DatepickerOptions): JQuery;

    off(events: DatepickerEvents, selector?: string, handler?: (eventObject: DatepickerEventObject) => any): JQuery;
    off(events: DatepickerEvents, handler: (eventObject: DatepickerEventObject) => any): JQuery;

    on(
        events: DatepickerEvents,
        selector: string,
        data: any,
        handler?: (eventObject: DatepickerEventObject) => any,
    ): JQuery;
    on(events: DatepickerEvents, selector: string, handler: (eventObject: DatepickerEventObject) => any): JQuery;
    on(events: DatepickerEvents, handler: (eventObject: DatepickerEventObject) => any): JQuery;
}
