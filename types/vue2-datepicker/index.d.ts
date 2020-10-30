// Type definitions for vue2-datepicker 3.3
// Project: https://github.com/mengxiong10/vue2-datepicker
// Definitions by: ChristianStornowski <https://github.com/ChristianStornowski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import { Component } from "vue/types/options";

declare namespace Datepicker {
    interface Shortcuts {
        text: string;
        onClick: () => any;
    }

    interface TimePickerOptions {
        start: string;
        step: string;
        end: string;
        format: string;
    }

    interface Lang {
        days?: string[];
        months?: string[];
        yearFormat: string;
        monthFormat: string;
        monthBeforeYear: boolean;
        formatLocale: {
            months: string[];
            monthsShort: string[];
            weekdays: string[];
            weekdaysShort: string[];
            weekdaysMin: string[];
            firstDayOfWeek: number;
            firstWeekContainsDate: number;
            meridiem: (h: number, _: number, isLowercase: boolean) => boolean;
            meridiemParse: RegExp;
            isPM: (input: string) => boolean;
        };
    }

    interface ValueType {
        date: Date;
        timestamp: number;
        format: string;
        token: string;
    }
}

declare const Datepicker: Component<any, any, any, {
    type?: 'date'|'datetime'|'year'|'month'|'time'|'week';
    range?: boolean;
    format?: string;
    valueType?: Datepicker.ValueType;
    lang?: string | Datepicker.Lang;
    clearable?: boolean;
    confirm?: boolean;
    editable?: boolean;
    disabled?: boolean;
    placeholder?: string;
    appendToBody?: boolean;
    defaultValue?: Date;
    popupStyle?: (() => {});
    shortcuts?: Datepicker.Shortcuts[];
    timePickerOptions?: Datepicker.TimePickerOptions;
    minuteStep?: number;
    inputClass?: string;
    inputAttr?: (() => {});
    confirmText?: string;
    rangeSeparator?: string;
    disabledDate?: ((date: Date) => boolean);
    disabledTime?: ((date: Date) => boolean);
    inline?: boolean;
    open?: boolean
    popupClass?: string;
    titleFormat?: string;
    partialUpdate?: boolean;
    showWeekNumber?: boolean
    hourStep?: number;
    secondStep?: number;
    hourOptions?: number[];
    minuteOptions?: number[];
    secondOptions?: number[];
    showHour?: boolean;
    showMinute?: boolean;
    showSecond?: boolean;
    use12h?: boolean;
    showTimeHeader?: boolean;
    timeTitleFormat?: string;
}>;

export default Datepicker;
