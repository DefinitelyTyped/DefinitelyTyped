import * as React from "react";
import { CalendarBaseProps } from "../Calendar/Calendar";

export type DatePickerProps = CalendarBaseProps & {
    buttonLabel?: string;
    buttonProps?: { [x: string]: any };
    compact?: boolean;
    defaultValue?: string;
    enableRangeSelection?: boolean;
    inputProps?: { [x: string]: any };
    locale?: string;
    onBlur?: ({date, formattedDate}: {date: Date, formattedDate: string}) => void;
    validationState?: {
        state?: 'error' | 'warning' | 'information' | 'success';
        text?: string
    }
} & { [x: string]: any };

declare class DatePicker extends React.Component<DatePickerProps> {}

export default DatePicker;
