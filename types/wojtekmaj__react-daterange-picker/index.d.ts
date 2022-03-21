// Type definitions for @wojtekmaj/react-daterange-picker 3.4
// Project: https://github.com/wojtekmaj/react-daterange-picker
// Definitions by: David Alvarez <https://github.com/davidalvarezr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactNode } from "react";

export default function DateTimeRangePicker(props: DateRangePickerProps): JSX.Element;
export interface DateRangePickerProps<TValue extends string | Date = string | Date> {
    autoFocus?: boolean;
    calendarAriaLabel?: string;
    calendarClassName?: string | string[];
    calendarIcon?: ReactNode;
    className?: string | string[];
    clearAriaLabel?: string;
    clearIcon?: ReactNode;
    closeCalendar?: boolean;
    dayAriaLabel?: string;
    dayPlaceholder?: string;
    disableCalendar?: boolean;
    disabled?: boolean;
    format?: string;
    isOpen?: boolean;
    locale?: string;
    maxDate?: Date;
    maxDetails?: "century" | "decade" | "year" | "month";
    minDate?: Date;
    monthAriaLabel?: string;
    name?: string;
    nativeInputAriaLabel?: string;
    onCalendarClose?: () => void;
    onCalendarOpen?: () => void;
    onChange?: (value: TValue) => void;
    onFocus?: (event: FocusEvent) => void;
    openCalendarOnFocus?: boolean;
    rangeDivider?: ReactNode;
    required?: boolean;
    returnValue?: "start" | "end" | "range";
    showLeadingZeros?: boolean;
    value: TValue | TValue[];
    yearAriaLabel?: string;
    yearPlaceholder?: string;
}
