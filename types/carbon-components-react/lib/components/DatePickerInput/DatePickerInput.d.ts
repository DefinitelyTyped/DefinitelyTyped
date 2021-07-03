import * as React from "react";
import {
    ReactInputAttr,
    CarbonInputSize
} from "../../../typings/shared";

type ExcludedAttributes = "className" | "id" | "size";
export interface DatePickerInputProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    datePickerType?: "range" | "simple" | "single";
    hideLabel?: boolean,
    id: string,
    iconDescription?: string,
    invalid?: boolean,
    invalidText?: React.ReactNode,
    labelText: NonNullable<React.ReactNode>,
    openCalendar?: React.MouseEventHandler,
    pattern?: string,
    size?: "sm" | "md" | "lg" | "xl",
    warn?: boolean;
    warnText?: React.ReactNode,
}

declare class DatePickerInput extends React.Component<DatePickerInputProps> { }

export default DatePickerInput;
