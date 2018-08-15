// Type definitions for ngCordova datepicker plugin
// Project: https://github.com/VitaliiBlagodir/cordova-plugin-datepicker
// Definitions by: Jacques Kang <https://www.linkedin.com/in/jacqueskang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

    export enum AndroidTheme {
        Traditional = 1,
        HoloDark = 2,
        HoloLight = 3,
        DeviceDefaultDark = 4,
        DeviceDefaultLight = 5
    }

    export interface DatePickerOptions {
        mode?: string;
        date?: Date | string | number;
        minDate?: Date | string | number;
        maxDate?: Date | string | number;
        titleText?: string;
        okText?: string;
        cancelText?: string;
        todayText?: string;
        nowText?: string;
        is24Hour?: boolean;
        androidTheme?: AndroidTheme;
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
