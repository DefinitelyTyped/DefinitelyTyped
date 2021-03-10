import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

export interface TimePickerProps extends Omit<ReactInputAttr, "id" | "size"> {
    hideLabel?: boolean,
    id: string,
    invalid?: boolean,
    invalidText?: React.ReactNode,
    labelText?: React.ReactNode,
    light?: boolean,
    size?: "sm" | "xl",
}

declare class TimePicker extends React.Component<TimePickerProps> { }

export default TimePicker;
