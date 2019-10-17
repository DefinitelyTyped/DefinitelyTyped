// Type definitions for vue2-datepicker 2.12
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

    interface ValueType {
        date: Date;
        timestamp: number;
        format: string;
    }

    interface TimeSelectOptions {
        hours: number[];
        minutes: number[];
        seconds: number[];
    }
}

declare const Datepicker: Component<any, any, any, {
    type?: string;
    range?: boolean;
    format?: string;
    valueType?: Datepicker.ValueType;
    lang?: string | Datepicker.Lang;
    clearable?: boolean;
    confirm?: boolean;
    editable?: boolean;
    disabled?: boolean;
    placeholder?: string;
    width?: number | string;
    appendToBody?: boolean;
    defaultValue?: string;
    popupStyle?: string;
    notBefore?: string | Date;
    notAfter?: string | Date;
    disabledDays?: number[] | string[] | ((date: Date) => Date[]);
    shortcuts?: boolean | Datepicker.Shortcuts[]
    timePickerOptions?: Datepicker.TimePickerOptions[] | (() => Datepicker.TimePickerOptions[]);
    timeSelectOptions?: Datepicker.TimeSelectOptions;
    minuteStep?: number;
    firstDayOfWeek?: number;
    inputClass?: string;
    inputAttr?: string;
    confirmText?: string;
    rangeSeparator?: string;
    dateFormat?: string;
}>;

export default Datepicker;
