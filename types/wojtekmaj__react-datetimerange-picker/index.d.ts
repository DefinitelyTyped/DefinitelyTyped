// Type definitions for @wojtekmaj/react-datetimerange-picker 3.0
// Project: https://github.com/wojtekmaj/react-datetimerange-picker (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Pesven <https://github.com/Psvensso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { CalendarProps } from 'react-calendar';

export default function DateTimeRangePicker(props: DateRangePickerProps): JSX.Element;

export interface DateRangePickerProps extends CalendarProps {
    amPmAriaLabel: string;
    autoFocus: boolean;
    calendarAriaLabel: string;
    calendarClassName: string;
    calendarIcon: string | JSX.Element;
    clearAriaLabel: string;
    clearIcon: string | JSX.Element;
    clockClassNamestring: string;
    closeWidgets: boolean;
    dayAriaLabelstring: string;
    disabled: boolean;
    disableCalendar: boolean;
    disableClock: boolean;
    format: string;
    hourAriaLabel: string;
    isCalendarOpen: boolean;
    isClockOpen: boolean;
    minuteAriaLabel: string;
    monthAriaLabel: string;
    name: string;
    nativeInputAriaLabel: string;
    onCalendarClose: () => void;
    onCalendarOpen: () => void;
    onClockClose: () => void;
    onClockOpen: () => void;
    rangeDivider: string;
    required: boolean;
    secondAriaLabel: string;
    showLeadingZeros: boolean;
    yearAriaLabel: string;
}
