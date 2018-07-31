// Type definitions for bootstrap-datepicker
// Project: https://github.com/eternicode/bootstrap-datepicker
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

type DatepickerEvents = "show"|"hide"|"clearDate"|"changeDate"|"changeMonth"|"changeYear"|"changeDecade"|"changeCentury";

type DatepickerViewModes = 0|"days"|1|"months"|2|"years"|3|"decades"|4|"centuries"|"millenium";

type DatepickerOrientations =
    "auto"
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
    | "bottom right"

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
    format?: string | DatepickerCustomFormatOptions;
    weekStart?: number;
    startDate?: Date|string;
    endDate?: Date|string;
    autoclose?: boolean;
    startView?: number;
    todayBtn?: boolean|"linked";
    todayHighlight?: boolean;
    keyboardNavigation?: boolean;
    language?: string;
    beforeShowDay?: (date: Date) => undefined|string|boolean|DatepickerBeforeShowDayResponse;
    beforeShowYear?: (date: Date) => undefined|string|boolean|DatepickerBeforeShowResponse;
    beforeShowDecade?: (date: Date) => undefined|string|boolean|DatepickerBeforeShowResponse;
    beforeShowCentury?: (date: Date) => undefined|string|boolean|DatepickerBeforeShowResponse;
    calendarWeeks?: boolean;
    clearBtn?: boolean;
    daysOfWeekDisabled?: number[];
    forceParse?: boolean;
    inputs?: any[];
    minViewMode?: DatepickerViewModes;
    maxViewMode?: DatepickerViewModes;
    multidate?: boolean|number;
    multidateSeparator?: string;
    orientation?: DatepickerOrientations;
    assumeNearbyYear?: boolean|number;
    viewMode?: string;
    templates?: any;
    zIndexOffset?: number;
    showOnFocus?: boolean;
    immediateUpdates?: boolean;
    title?: string;
    container?: string;
    datesDisabled?:string|string[];
    daysOfWeekHighlighted?:string|number[];
    defaultViewDate?:Date|string|DatepickerViewDate;
    updateViewDate?:boolean;
    enableOnReadonly?: boolean;
}

interface DatepickerViewDate {
    year:number;
    /** Month starting with 0 */
    month:number;
    /** Day of the month starting with 1 */
    day:number;
}

interface DatepickerBeforeShowResponse {
    enabled?:boolean;
    classes?: string;
    tooltip?: string;
}

interface DatepickerBeforeShowDayResponse extends DatepickerBeforeShowResponse {
    content?: string;
}

interface DatepickerCustomFormatOptions {
    toDisplay?(date: string, format: any, language: any): string;
    toValue?(date: string, format: any, language: any): Date;
}

interface DatepickerEventObject extends JQueryEventObject {
    date: Date;
    dates: Date[];
    format(ix?:number): string;
    format(format?: string): string;
    format(ix?:number, format?: string): string;
}

interface JQuery {
    datepicker(): JQuery;
    datepicker(methodName: string): any;
    datepicker(methodName: string, params: any): any;
    datepicker(options: DatepickerOptions): JQuery;

    off(events: DatepickerEvents, selector?: string, handler?: (eventObject: DatepickerEventObject) => any): JQuery;
    off(events: DatepickerEvents, handler: (eventObject: DatepickerEventObject) => any): JQuery;

    on(events: DatepickerEvents, selector: string, data: any, handler?: (eventObject: DatepickerEventObject) => any): JQuery;
    on(events: DatepickerEvents, selector: string, handler: (eventObject: DatepickerEventObject) => any): JQuery;
    on(events: DatepickerEvents, handler: (eventObject: DatepickerEventObject) => any): JQuery;
}
