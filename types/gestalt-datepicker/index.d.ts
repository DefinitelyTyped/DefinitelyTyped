// Type definitions for gestalt-datepicker 13.4
// Project: https://github.com/pinterest/gestalt/tree/master/packages/gestalt-datepicker, https://gestalt.netlify.app/DatePicker
// Definitions by: cgu <https://github.com/czgu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import * as React from 'react';
import { Locale } from 'date-fns';

/*
DatePicker Props Interface
https://gestalt.netlify.app/DatePicker
https://github.com/pinterest/gestalt/blob/master/packages/gestalt-datepicker/src/DatePicker.js
*/

export interface DatePickerProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: Date }) => void;
    disabled?: boolean;
    errorMessage?: string;
    excludeDates?: ReadonlyArray<Date>;
    helperText?: string;
    idealDirection?: 'up' | 'right' | 'down' | 'left';
    includeDates?: ReadonlyArray<Date>;
    label?: string;
    localeData?: Locale;
    maxDate?: Date;
    minDate?: Date;
    nextRef?: React.Ref<any>;

    placeholder?: string;
    rangeEndDate?: Date;
    rangeSelector?: 'start' | 'end';
    rangeStartDate?: Date;
    ref?: React.Ref<any>;
    value?: Date;
}

export default class DatePicker extends React.Component<DatePickerProps, any> {}
