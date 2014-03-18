// Type definitions for bootstrap.datepicker
// Project: https://github.com/eternicode/bootstrap-datepicker
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface DatepickerOptions {
    format?: string;
    weekStart?: number;
    startDate?: any;
    endDate?: any;
    autoclose?: boolean;
    startView?: number;
    todayBtn?: any;
    todayHighlight?: boolean;
    keyboardNavigation?: boolean;
    language?: string;
}

interface DatepickerEventObject extends JQueryEventObject {
	date: Date;
	format(format?: string): string;
}

interface JQuery {
    datepicker(): JQuery;
    datepicker(methodName: string): JQuery;
    datepicker(methodName: string, params: any): JQuery;
    datepicker(options: DatepickerOptions): JQuery;

	off(events: "changeDate", selector?: string, handler?: (eventObject: DatepickerEventObject) => any): JQuery;
	off(events: "changeDate", handler: (eventObject: DatepickerEventObject) => any): JQuery;

	on(events: "changeDate", selector: string, data: any, handler?: (eventObject: DatepickerEventObject) => any): JQuery;
	on(events: "changeDate", selector: string, handler: (eventObject: DatepickerEventObject) => any): JQuery;
	on(events: 'changeDate', handler: (eventObject: DatepickerEventObject) => any): JQuery;
}
