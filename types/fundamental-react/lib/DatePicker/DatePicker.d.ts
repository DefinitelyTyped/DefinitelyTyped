import * as React from "react";
import { CalendarBaseProps } from "../Calendar/Calendar";

export type DatePickerProps = CalendarBaseProps & {
    buttonLabel?: string | undefined;
    buttonProps?: { [x: string]: any } | undefined;
    compact?: boolean | undefined;
    defaultValue?: string | undefined;
    enableRangeSelection?: boolean | undefined;
    inputProps?: { [x: string]: any } | undefined;
    locale?: string | undefined;
    onBlur?: (({ date, formattedDate }: { date: Date; formattedDate: string }) => void) | undefined;
    validationState?: {
        state?: "error" | "warning" | "information" | "success" | undefined;
        text?: string | undefined;
    } | undefined;
} & { [x: string]: any };

declare class DatePicker extends React.Component<DatePickerProps> {}

export default DatePicker;
