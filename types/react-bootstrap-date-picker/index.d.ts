import { ComponentClass, FocusEventHandler, FunctionComponent, HTMLAttributes, ReactNode } from "react";

export as namespace DatePicker;

export = DatePicker;

declare const DatePicker: DatePicker;
type DatePicker = ComponentClass<DatePicker.DatePickerProps>;

declare namespace DatePicker {
    type ChangeCallback = (value: string, formattedValue: string) => void;

    interface DatePickerProps {
        value?: string | undefined;
        defaultValue?: string | undefined;
        minDate?: string | undefined;
        maxDate?: string | undefined;
        style?: any;
        className?: string | undefined;
        autoFocus?: boolean | undefined;
        disabled?: boolean | undefined;
        onChange?: ChangeCallback | undefined;
        onFocus?: FocusEventHandler<any> | undefined;
        onBlur?: FocusEventHandler<any> | undefined;
        dateFormat?: string | undefined;
        clearButtonElement?: ReactNode | undefined;
        showClearButton?: boolean | undefined;
        onClear?(): void;
        previousButtonElement?: ReactNode | undefined;
        nextButtonElement?: ReactNode | undefined;
        cellPadding?: string | undefined;
        dayLabels?: string[] | undefined;
        monthLabels?: string[] | undefined;
        calendarPlacement?: string | undefined;
        calendarContainer?: any;
        weekStartsOnMonday?: boolean | undefined;
        showTodayButton?: boolean | undefined;
        todayButtonLabel?: string | undefined;
        customControl?: FunctionComponent<any> | ComponentClass<any> | undefined;
    }
}
