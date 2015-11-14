// Type definitions for ngCordova datepicker plugin
// Project: https://github.com/VitaliiBlagodir/cordova-plugin-datepicker
// Definitions by: Jacques Kang <https://www.linkedin.com/in/jacqueskang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ngCordova {

    export interface DatePickerOptions {
        mode?: string;
        date?: Date | string;
        minDate?: Date | string;
        maxDate?: Date | string;
        titleText?: string;
        okText?: string;
        cancelText?: string;
        todayText?: string;
        nowText?: string;
        is24Hour?: boolean;
        androidTheme?: number;
        allowOldDates?: boolean;
        allowFutureDates?: boolean;
        doneButtonLabel?: string;
        doneButtonColor?: string;
        cancelButtonLabel?: string;
        cancelButtonColor?: string;
        x?: number;
        y?: number;
        minuteInterval?: number;
        popoverArrowDirection?: string;
        locale?: string;
    }

    export interface IDatePickerService {
        show(options?: DatePickerOptions): ng.IPromise<Date>;
    }
}