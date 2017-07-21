// Type definitions for bootstrap.timepicker
// Project: https://github.com/jdewit/bootstrap-timepicker
// Definitions by: derikwhittaker <https://github.com/derikwhittaker/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface TimepickerOptions {
    defaultTime?: string|boolean;
    disableFocus?: boolean;
    disableMousewheel?: boolean;
    explicitMode?: boolean;
    icons?: TimepickerIconOptions;
    isOpen?: boolean;
    minuteStep?: number;
    modalBackdrop?: boolean;
    secondStep?: number;
    showSeconds?: boolean;
    showInputs?: boolean;
    showMeridian?: boolean;
    template?: string|boolean;
    appendWidgetTo?: string;
    maxHours?: number;
    snapToStep?: boolean;
}

interface TimepickerIconOptions {
    up?: string;
    down?: string;
}

interface TimepickerTime {
    value?: string;
    hours?: number;
    minutes?: number;
    seconds?: number;
    meridian?: string;
}

interface JQuery {
    timepicker(): JQuery;
    timepicker(methodName: string): JQuery;
    timepicker(methodName: string, params: any): JQuery;
    timepicker(options: TimepickerOptions): JQuery;
}

interface JQueryEventObject {
    time?: TimepickerTime;
}
