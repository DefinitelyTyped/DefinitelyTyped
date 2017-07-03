// Type definitions for react-bootstrap-date-picker 4.0
// Project: https://github.com/pushtell/react-bootstrap-date-picker#readme
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ComponentClass, StatelessComponent, ReactNode, FocusEventHandler, HTMLAttributes } from "react";

export as namespace DatePicker;

export = DatePicker;

declare const DatePicker: DatePicker;
type DatePicker = ComponentClass<DatePicker.DatePickerProps>;

declare namespace DatePicker {
    type ChangeCallback = (value: string, formattedValue: string) => void;

    interface DatePickerProps {
        value?: string;
        defaultValue?: string;
        style?: any;
        className?: string;
        autoFocus?: boolean;
        disabled?: boolean;
        onChange?: ChangeCallback;
        onFocus?: FocusEventHandler<any>;
        onBlur?: FocusEventHandler<any>;
        dateFormat?: string;
        clearButtonElement?: ReactNode;
        showClearButton?: boolean;
        onClear?(): void;
        previousButtonElement?: ReactNode;
        nextButtonElement?: ReactNode;
        cellPadding?: string;
        dayLabels?: string[];
        monthLabels?: string[];
        calendarPlacement?: string;
        calendarContainer?: any;
        weekStartsOnMonday?: boolean;
        showTodayButton?: boolean;
        todayButtonLabel?: string;
        customControl?: StatelessComponent<any> | ComponentClass<any>;
    }
}
