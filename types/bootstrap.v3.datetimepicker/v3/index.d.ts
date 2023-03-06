// Type definitions for Bootstrap datetimepicker v3 3.x
// Project: http://eonasdan.github.io/bootstrap-datetimepicker
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * bootstrap-datetimepicker.js 3.0.0 Copyright (c) 2014 Jonathan Peterson
 * Available via the MIT license.
 * see: http://eonasdan.github.io/bootstrap-datetimepicker or https://github.com/Eonasdan/bootstrap-datetimepicker for details.
 */

/// <reference types="jquery"/>

import * as moment from 'moment';

export as namespace BootstrapV3DatetimePicker;

export interface DatetimepickerChangeEventObject extends DatetimepickerEventObject {
    oldDate: moment.Moment;
}

export interface DatetimepickerEventObject extends JQueryEventObject {
    date: moment.Moment;
}

export interface DatetimepickerIcons {
    time?: string | undefined;
    date?: string | undefined;
    up?: string | undefined;
    down?: string | undefined;
}

export interface DatetimepickerOptions {
    pickDate?: boolean | undefined;
    pickTime?: boolean | undefined;
    useMinutes?: boolean | undefined;
    useSeconds?: boolean | undefined;
    useCurrent?: boolean | undefined;
    minuteStepping?: number | undefined;
    minDate?: moment.Moment | Date | string | undefined;
    maxDate?: moment.Moment | Date | string | undefined;
    showToday?: boolean | undefined;
    collapse?: boolean | undefined;
    language?: string | undefined;
    defaultDate?: moment.Moment | Date | string | undefined;
    disabledDates?: Array<moment.Moment | Date | string> | undefined;
    enabledDates?: Array<moment.Moment | Date | string> | undefined;
    icons?: DatetimepickerIcons | undefined;
    useStrict?: boolean | undefined;
    direction?: string | undefined;
    sideBySide?: boolean | undefined;
    daysOfWeekDisabled?: Array<number> | undefined;
    calendarWeeks?: boolean | undefined;
    format?: string | boolean | undefined;
    locale?: string | undefined;
    showTodayButton?: boolean | undefined;
    viewMode?: string | undefined;
    inline?: boolean | undefined;
    toolbarPlacement?: string | undefined;
    showClear?: boolean | undefined;
    ignoreReadonly?: boolean | undefined;
}

export interface Datetimepicker {
    date(date: moment.Moment | Date | string): void;
    date(): moment.Moment;
    minDate(date: moment.Moment | Date | string): void;
    minDate(): moment.Moment | boolean;
    maxDate(date: moment.Moment | Date | string): void;
    maxDate(): moment.Moment | boolean;
    show(): void;
    disable(): void;
    enable(): void;
    destroy(): void;
    toggle(): void;
}

declare global {
    interface JQuery {
        datetimepicker(): JQuery;
        datetimepicker(options: DatetimepickerOptions): JQuery;

        off(events: "dp.change", selector?: string, handler?: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
        off(events: "dp.change", handler: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;

        on(events: "dp.change", selector: string, data: any, handler?: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
        on(events: "dp.change", selector: string, handler: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
        on(events: 'dp.change', handler: (eventObject: DatetimepickerChangeEventObject) => any): JQuery;

        off(events: "dp.show", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        off(events: "dp.show", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

        on(events: "dp.show", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: "dp.show", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: 'dp.show', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

        off(events: "dp.hide", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        off(events: "dp.hide", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

        on(events: "dp.hide", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: "dp.hide", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: 'dp.hide', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

        off(events: "dp.error", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        off(events: "dp.error", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

        on(events: "dp.error", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: "dp.error", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: 'dp.error', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

        data(key: 'DateTimePicker'): Datetimepicker;
    }
}
