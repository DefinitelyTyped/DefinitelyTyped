/// <reference types="jquery"/>

interface TimepickerOptions {
    defaultTime?: string | boolean | Date | undefined;
    disableFocus?: boolean | undefined;
    disableMousewheel?: boolean | undefined;
    explicitMode?: boolean | undefined;
    icons?: TimepickerIconOptions | undefined;
    isOpen?: boolean | undefined;
    minuteStep?: number | undefined;
    modalBackdrop?: boolean | undefined;
    secondStep?: number | undefined;
    showSeconds?: boolean | undefined;
    showInputs?: boolean | undefined;
    showMeridian?: boolean | undefined;
    template?: string | boolean | undefined;
    appendWidgetTo?: string | undefined;
    maxHours?: number | undefined;
    snapToStep?: boolean | undefined;
}

interface TimepickerIconOptions {
    up?: string | undefined;
    down?: string | undefined;
}

interface TimepickerTime {
    value?: string | undefined;
    hours?: number | undefined;
    minutes?: number | undefined;
    seconds?: number | undefined;
    meridian?: string | undefined;
}

interface JQuery {
    timepicker(): JQuery;
    timepicker(methodName: string): JQuery;
    timepicker(methodName: string, params: any): JQuery;
    timepicker(options: TimepickerOptions): JQuery;
}

interface JQueryEventObject {
    time?: TimepickerTime | undefined;
}
