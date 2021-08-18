import * as React from "react";
import {
    ReactInputAttr,
    CarbonInputSize
} from "../../../typings/shared";

type ExcludedAttributes = "className" | "id" | "size";
export interface DatePickerInputProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    datePickerType?: "range" | "simple" | "single" | undefined;
    hideLabel?: boolean | undefined,
    id: string,
    iconDescription?: string | undefined,
    invalid?: boolean | undefined,
    invalidText?: React.ReactNode | undefined,
    labelText: NonNullable<React.ReactNode>,
    openCalendar?: React.MouseEventHandler | undefined,
    pattern?: string | undefined,
    size?: "sm" | "md" | "lg" | "xl" | undefined,
    warn?: boolean | undefined;
    warnText?: React.ReactNode | undefined,
}

declare class DatePickerInput extends React.Component<DatePickerInputProps> { }

export default DatePickerInput;
