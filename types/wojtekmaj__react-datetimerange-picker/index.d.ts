// Type definitions for @wojtekmaj/react-datetimerange-picker 3.0
// Project: https://github.com/wojtekmaj/react-datetimerange-picker
// Definitions by: Pesven <https://github.com/Psvensso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { CalendarProps } from 'react-calendar';

export default function DateTimeRangePicker(props: DateTimeRangePickerProps): JSX.Element;
export type DateTimeRangePickerValue = string | Date | Date[];
export type DateTimeRangePickerCalendarProps = Omit<CalendarProps, 'maxDetail' | 'onChange' | 'value'>;
export interface DateTimeRangePickerProps<T = DateTimeRangePickerValue> extends DateTimeRangePickerCalendarProps {
    amPmAriaLabel?: string;
    autoFocus?: boolean;
    calendarAriaLabel?: string;
    className?: string | string[];
    calendarClassName?: string | string[];
    calendarIcon?: string | JSX.Element;
    clearAriaLabel?: string;
    clearIcon?: string | JSX.Element;
    clockClassName?: string | string[];
    closeWidgets?: boolean;
    dayAriaLabel?: string;
    dayPlaceholder?: string;
    disabled?: boolean;
    disableCalendar?: boolean;
    disableClock?: boolean;
    format?: string;
    hourAriaLabel?: string;
    hourPlaceholder?: string;
    isCalendarOpen?: boolean;
    isClockOpen?: boolean;
    locale?: string;
    maxDate?: Date;
    maxDetail?: 'hour' | 'minute' | 'second';
    minDate?: Date;
    minuteAriaLabel?: string;
    minutePlaceholder?: string;
    monthPlaceholder?: string;
    monthAriaLabel?: string;
    name?: string;
    nativeInputAriaLabel?: string;
    onCalendarClose?: () => void;
    onCalendarOpen?: () => void;
    onChange?: (val: T) => void;
    onFocus?: () => void;
    onClockClose?: () => void;
    onClockOpen?: () => void;
    rangeDivider?: string | JSX.Element;
    required?: boolean;
    secondAriaLabel?: string;
    secondPlaceholder?: string;
    value: T;
    showLeadingZeros?: boolean;
    yearAriaLabel?: string;
    yearPlaceholder?: string;
}
