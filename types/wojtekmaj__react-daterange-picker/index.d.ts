// Type definitions for @wojtekmaj/react-daterange-picker 3.4
// Project: https://github.com/wojtekmaj/react-daterange-picker
// Definitions by: David Alvarez <https://github.com/davidalvarezr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactNode } from "react";

export default function DateTimeRangePicker(props: DateRangePickerProps): JSX.Element;
export interface DateRangePickerProps<TValue extends string | Date = string | Date> {
    autoFocus?: boolean | undefined;
    calendarAriaLabel?: string | undefined;
    calendarClassName?: string | string[] | undefined;
    calendarIcon?: ReactNode | undefined;
    className?: string | string[] | undefined;
    clearAriaLabel?: string | undefined;
    clearIcon?: ReactNode | undefined;
    closeCalendar?: boolean | undefined;
    dayAriaLabel?: string | undefined;
    dayPlaceholder?: string | undefined;
    disableCalendar?: boolean | undefined;
    disabled?: boolean | undefined;
    format?: string | undefined;
    isOpen?: boolean | undefined;
    locale?: string | undefined;
    maxDate?: Date | undefined;
    maxDetail?: "century" | "decade" | "year" | "month" | undefined;
    minDate?: Date | undefined;
    minDetail?: "century" | "decade" | "year" | "month" | undefined;
    monthAriaLabel?: string | undefined;
    monthPlaceholder?: string | undefined;
    name?: string | undefined;
    nativeInputAriaLabel?: string | undefined;
    onCalendarClose?: () => void | undefined;
    onCalendarOpen?: () => void | undefined;
    onChange?: (value: TValue) => void | undefined;
    onFocus?: (event: FocusEvent) => void | undefined;
    openCalendarOnFocus?: boolean | undefined;
    rangeDivider?: ReactNode | undefined;
    required?: boolean | undefined;
    showLeadingZeros?: boolean | undefined;
    value: TValue | TValue[];
    yearAriaLabel?: string | undefined;
    yearPlaceholder?: string | undefined;
}
