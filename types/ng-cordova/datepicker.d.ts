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
        mode?: string | undefined;
        date?: Date | string | number | undefined;
        minDate?: Date | string | number | undefined;
        maxDate?: Date | string | number | undefined;
        titleText?: string | undefined;
        okText?: string | undefined;
        cancelText?: string | undefined;
        todayText?: string | undefined;
        nowText?: string | undefined;
        is24Hour?: boolean | undefined;
        androidTheme?: AndroidTheme | undefined;
        allowOldDates?: boolean | undefined;
        allowFutureDates?: boolean | undefined;
        doneButtonLabel?: string | undefined;
        doneButtonColor?: string | undefined;
        cancelButtonLabel?: string | undefined;
        cancelButtonColor?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
        minuteInterval?: number | undefined;
        popoverArrowDirection?: string | undefined;
        locale?: string | undefined;
    }

    export interface IDatePickerService {
        show(options?: DatePickerOptions): ng.IPromise<Date>;
    }
}
