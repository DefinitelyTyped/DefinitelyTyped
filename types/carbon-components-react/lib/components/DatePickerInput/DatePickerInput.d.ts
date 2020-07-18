import * as React from "react";
import {
    EmbeddedIconProps,
    ReactInputAttr,
    RequiresIdProps,
    ValidityProps,
    CarbonInputSize
} from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactInputAttr, "className" | "id" | "size">,
    EmbeddedIconProps,
    RequiresIdProps,
    ValidityProps
{ }

export interface DatePickerInputProps extends InheritedProps {
    hideLabel?: boolean,
    labelText: NonNullable<React.ReactNode>,
    openCalendar?: React.MouseEventHandler,
    pattern?: string,
    size?: Extract<CarbonInputSize, "sm" | "xl">,
}

declare class DatePickerInput extends React.Component<DatePickerInputProps> { }

export default DatePickerInput;
