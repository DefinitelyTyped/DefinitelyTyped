import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

export interface TimePickerProps extends Omit<ReactInputAttr, "id"> {
    hideLabel?: boolean,
    id: string,
    invalid?: boolean,
    invalidText?: string,
    labelText?: React.ReactNode,
    light?: boolean,
}

declare class TimePicker extends React.Component<TimePickerProps> { }

export default TimePicker;
