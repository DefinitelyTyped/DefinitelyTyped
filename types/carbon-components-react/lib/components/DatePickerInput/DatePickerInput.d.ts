import * as React from "react";
import { EmbeddedIconProps, ReactInputAttr, RequiresIdProps, ValidityProps } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactInputAttr, "className" | "id">,
    EmbeddedIconProps,
    RequiresIdProps,
    ValidityProps
{ }

export interface DatePickerInputProps extends InheritedProps {
    labelText: NonNullable<React.ReactNode>,
    openCalendar?: React.MouseEventHandler,
    pattern?: string,
}

declare class DatePickerInput extends React.Component<DatePickerInputProps> { }

export default DatePickerInput;
