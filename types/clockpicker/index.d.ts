// Type definitions for ClockPicker 0.0
// Project: https://github.com/weareoutman/clockpicker, http://weareoutman.github.io/clockpicker
// Definitions by: jfcere <https://github.com/jfcere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface ClockPickerOptions {
    default?: string | undefined;
    placement?: string | undefined;
    align?: string | undefined;
    donetext?: string | undefined;
    autoclose?: boolean | undefined;
    twelvehour?: boolean | undefined;
    vibrate?: boolean | undefined;
    fromnow?: number | undefined;
    init?: (() => void) | undefined;
    beforeShow?: (() => void) | undefined;
    afterShow?: (() => void) | undefined;
    beforeHide?: (() => void) | undefined;
    afterHide?: (() => void) | undefined;
    beforeHourSelect?: (() => void) | undefined;
    afterHourSelect?: (() => void) | undefined;
    beforeDone?: (() => void) | undefined;
    afterDone?: (() => void) | undefined;
}

interface ClockPicker {
    (options?: ClockPickerOptions): JQuery;
    (methodName: string, ...params: any[]): JQuery;
}

interface JQuery {
    clockpicker: ClockPicker;
}
