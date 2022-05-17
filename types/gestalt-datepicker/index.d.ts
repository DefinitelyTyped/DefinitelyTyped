// Type definitions for gestalt-datepicker 55.2
// Project: https://github.com/pinterest/gestalt/tree/master/packages/gestalt-datepicker, https://gestalt.netlify.app/DatePicker
// Definitions by: cgu <https://github.com/czgu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import * as React from 'react';

export interface Locale {
    code?: string;
    formatDistance?: (...args: any[]) => any;
    formatRelative?: (...args: any[]) => any;
    localize?: {
        ordinalNumber: (...args: any[]) => any;
        era: (...args: any[]) => any;
        quarter: (...args: any[]) => any;
        month: (...args: any[]) => any;
        day: (...args: any[]) => any;
        dayPeriod: (...args: any[]) => any;
    };
    formatLong?: {
        date: (...args: any[]) => any;
        time: (...args: any[]) => any;
        dateTime: (...args: any[]) => any;
    };
    match?: {
        ordinalNumber: (...args: any[]) => any;
        era: (...args: any[]) => any;
        quarter: (...args: any[]) => any;
        month: (...args: any[]) => any;
        day: (...args: any[]) => any;
        dayPeriod: (...args: any[]) => any;
    };
    options?: {
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    };
}

/*
DatePicker Props Interface
https://gestalt.netlify.app/DatePicker
https://github.com/pinterest/gestalt/blob/master/packages/gestalt-datepicker/src/DatePicker.js
*/

export interface DatePickerProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: Date }) => void;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    excludeDates?: ReadonlyArray<Date> | undefined;
    helperText?: string | undefined;
    idealDirection?: 'up' | 'right' | 'down' | 'left' | undefined;
    includeDates?: ReadonlyArray<Date> | undefined;
    label?: string | undefined;
    localeData?: Locale | undefined;
    maxDate?: Date | undefined;
    minDate?: Date | undefined;
    name?: string | undefined;
    nextRef?: React.Ref<any> | undefined;
    placeholder?: string | undefined;
    rangeEndDate?: Date | undefined;
    rangeSelector?: 'start' | 'end' | undefined;
    rangeStartDate?: Date | undefined;
    ref?: React.Ref<any> | undefined;
    value?: Date | undefined;
}

declare const DatePicker: React.FunctionComponent<DatePickerProps>;

export default DatePicker;
