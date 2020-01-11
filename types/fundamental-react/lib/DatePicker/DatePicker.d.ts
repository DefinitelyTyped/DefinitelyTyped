import * as React from "react";
import { CalendarBaseProps } from "../Calendar/Calendar";

export type DatePickerProps = CalendarBaseProps & {
    buttonProps?: { [x: string]: any };
    compact?: boolean;
    /* Set to **true** to enable the selection of a date range (begin and end). */
    enableRangeSelection?: boolean;
    inputProps?: { [x: string]: any };
    onBlur?: ({date, formattedDate}: {date: Date, formattedDate: string}) => void;
} & { [x: string]: any };

declare class DatePicker extends React.Component<DatePickerProps> {}

export default DatePicker;
