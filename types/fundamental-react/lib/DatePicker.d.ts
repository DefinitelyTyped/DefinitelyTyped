import * as React from "react";
import { CalendarBaseProps } from "./Calendar";

export type DatePickerProps = CalendarBaseProps & {
    buttonProps?: { [x: string]: any };
    compact?: boolean;
    /* Set to **true** to enable the selection of a date range (begin and end). */
    enableRangeSelection?: boolean;
    inputProps?: { [x: string]: any };
} & { [x: string]: any };

export class DatePicker extends React.Component<DatePickerProps> {}
