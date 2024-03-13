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
        days?: string[] | undefined;
        months?: string[] | undefined;
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
    type?: "date" | "datetime" | "year" | "month" | "time" | "week" | undefined;
    range?: boolean | undefined;
    format?: string | undefined;
    valueType?: Datepicker.ValueType | undefined;
    lang?: string | Datepicker.Lang | undefined;
    clearable?: boolean | undefined;
    confirm?: boolean | undefined;
    editable?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    appendToBody?: boolean | undefined;
    defaultValue?: Date | undefined;
    popupStyle?: (() => {}) | undefined;
    shortcuts?: Datepicker.Shortcuts[] | undefined;
    timePickerOptions?: Datepicker.TimePickerOptions | undefined;
    minuteStep?: number | undefined;
    inputClass?: string | undefined;
    inputAttr?: (() => {}) | undefined;
    confirmText?: string | undefined;
    rangeSeparator?: string | undefined;
    disabledDate?: ((date: Date) => boolean) | undefined;
    disabledTime?: ((date: Date) => boolean) | undefined;
    inline?: boolean | undefined;
    open?: boolean | undefined;
    popupClass?: string | undefined;
    titleFormat?: string | undefined;
    partialUpdate?: boolean | undefined;
    showWeekNumber?: boolean | undefined;
    hourStep?: number | undefined;
    secondStep?: number | undefined;
    hourOptions?: number[] | undefined;
    minuteOptions?: number[] | undefined;
    secondOptions?: number[] | undefined;
    showHour?: boolean | undefined;
    showMinute?: boolean | undefined;
    showSecond?: boolean | undefined;
    use12h?: boolean | undefined;
    showTimeHeader?: boolean | undefined;
    timeTitleFormat?: string | undefined;
}>;

export default Datepicker;
