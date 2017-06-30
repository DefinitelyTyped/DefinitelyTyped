// Type definitions for react-native-datepicker 1.4
// Project: https://github.com/xgfe/react-native-datepicker
// Definitions by: Jacob Baskin <https://github.com/jacobbaskin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

interface DatePickerProps {
    mode?: 'date' | 'datetime' | 'time';
    date?: string | Date;
    format?: string;
    minDate?: string | Date;
    maxDate?: string | Date;
    height?: number;
    duration?: number;
    confirmBtnText?: string;
    cancelBtnText?: string;
    showIcon?: boolean;
    disabled?: boolean;
    onDateChange?(dateStr: string, date: Date): void;
    placeholder?: string;
    modalOnResponderTerminationRequest?(e: any): boolean;
    is24Hour?: boolean;
    style?: any;
    customStyles?: any;
    minuteInterval?: number;
}

declare class DatePicker extends React.Component<DatePickerProps> {
    constructor(props: DatePickerProps);
}

export default DatePicker;
