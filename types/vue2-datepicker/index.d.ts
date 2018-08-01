// Type definitions for vue2-datepicker 2.0
// Project: https://github.com/mengxiong10/vue2-datepicker
// Definitions by: ChristianStornowski <https://github.com/ChristianStornowski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from "vue/types/options";

declare namespace Datepicker {
    interface Shortcuts {
        text: string;
        start: Date;
        end: Date;
    }

    interface TimePickerOptions {
        start: string;
        step: string;
        end: string;
    }

    interface Lang {
        days: string[];
        months: string[];
        pickers: string[];
        placeholder: {
            date: string;
            dateRange: string;
        };
    }
}

declare const Datepicker: Component<any, any, any, {
    type?: string;
    range?: boolean;
    format?: string;
    lang?: string | Datepicker.Lang;
    clearable?: boolean;
    confirm?: boolean;
    editable?: boolean;
    disabled?: boolean;
    placeholder?: string;
    width?: number | string;
    notBefore?: string | Date;
    notAfter?: string | Date;
    disabledDays?: number[] | string[] | ((date: Date) => Date[]);
    shortcuts?: boolean | Datepicker.Shortcuts[]
    timePickerOptions?: Datepicker.TimePickerOptions[] | (() => Datepicker.TimePickerOptions[]);
    minuteStep?: number;
    firstDayOfWeek?: number;
    inputClass?: string;
    inputName?: string;
    confirmText?: string;
    rangeSeparator?: string;
}>;

export default Datepicker;
