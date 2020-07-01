import * as React from "react";
import { ReactInputAttr, RequiresIdProps, ThemeProps, ValidityProps } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactInputAttr, "id">,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{ }

export interface TimePickerProps extends InheritedProps {
    hideLabel?: boolean,
    labelText?: React.ReactNode,
}

declare class TimePicker extends React.Component<TimePickerProps> { }

export default TimePicker;
