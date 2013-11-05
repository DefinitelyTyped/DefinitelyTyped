// Type definitions for bootstrap.datepicker
// Project: https://github.com/eternicode/bootstrap-datepicker
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface DatepickerOptions {
    format?: string;
    weekStart?: number;
    startDate?: Date;
    endDate?: Date;
    autoclose?: boolean;
    startView?: number;
    todayBtn?: boolean;
    todayHighlight?: boolean;
    keyboardNavigation?: boolean;
    language?: string;
}

interface JQuery {
    datepicker(): JQuery;
    datepicker(methodName: string): JQuery;
    datepicker(methodName: string, params: any): JQuery;
    datepicker(options: DatepickerOptions): JQuery;

    off(events?: "changeDate", selector?: any, handler?: (eventObject: any) => any): JQuery;

    on(events: "changeDate", selector?: string, data?: any, handler?: (eventObject: any) => any): JQuery;
    on(events: "changeDate", selector?: string, handler?: (eventObject: any) => any): JQuery;
    on(events: "changeDate", handler?: (eventObject: any) => any): JQuery;
}
