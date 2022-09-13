// Type definitions for @wojtekmaj/react-datetimerange-picker 3.0
// Project: https://github.com/wojtekmaj/react-datetimerange-picker
// Definitions by: Pesven <https://github.com/Psvensso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { CalendarProps } from 'react-calendar';

export default function DateTimeRangePicker(props: DateTimeRangePickerProps): JSX.Element;
export type DateTimeRangePickerCalendarProps = Omit<CalendarProps, 'maxDetail' | 'onChange' | 'value'>;
export interface DateTimeRangePickerProps extends DateTimeRangePickerCalendarProps {
    amPmAriaLabel?: string | undefined;
    autoFocus?: boolean | undefined;
    calendarAriaLabel?: string | undefined;
    className?: string | string[] | undefined;
    calendarClassName?: string | string[] | undefined;
    calendarIcon?: string | JSX.Element | undefined;
    clearAriaLabel?: string | undefined;
    clearIcon?: string | JSX.Element | undefined;
    clockClassName?: string | string[] | undefined;
    closeWidgets?: boolean | undefined;
    dayAriaLabel?: string | undefined;
    dayPlaceholder?: string | undefined;
    disabled?: boolean | undefined;
    disableCalendar?: boolean | undefined;
    disableClock?: boolean | undefined;
    format?: string | undefined;
    hourAriaLabel?: string | undefined;
    hourPlaceholder?: string | undefined;
    isCalendarOpen?: boolean | undefined;
    isClockOpen?: boolean | undefined;
    locale?: string | undefined;
    maxDate?: Date | undefined;
    maxDetail?: 'hour' | 'minute' | 'second' | undefined;
    minDate?: Date | undefined;
    minuteAriaLabel?: string | undefined;
    minutePlaceholder?: string | undefined;
    monthPlaceholder?: string | undefined;
    monthAriaLabel?: string | undefined;
    name?: string | undefined;
    nativeInputAriaLabel?: string | undefined;
    onCalendarClose?: (() => void) | undefined;
    onCalendarOpen?: (() => void) | undefined;
    onChange?: ((val: [Date?, Date?] | null) => void) | undefined;
    onFocus?: (() => void) | undefined;
    onClockClose?: (() => void) | undefined;
    onClockOpen?: (() => void) | undefined;
    rangeDivider?: string | JSX.Element | undefined;
    required?: boolean | undefined;
    secondAriaLabel?: string | undefined;
    secondPlaceholder?: string | undefined;
    value: Date | undefined | [Date?, Date?] | null;
    showLeadingZeros?: boolean | undefined;
    yearAriaLabel?: string | undefined;
    yearPlaceholder?: string | undefined;
}
