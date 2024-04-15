import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

export interface TimePickerProps extends Omit<ReactInputAttr, "id" | "size"> {
    hideLabel?: boolean | undefined;
    id: string;
    invalid?: boolean | undefined;
    invalidText?: React.ReactNode | undefined;
    labelText?: React.ReactNode | undefined;
    light?: boolean | undefined;
    size?: "sm" | "md" | "lg" | "xl" | undefined;
}

declare class TimePicker extends React.Component<TimePickerProps> {}

export default TimePicker;
