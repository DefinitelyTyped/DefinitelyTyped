import * as React from "react";
import { TimeBaseProps } from "../Time/Time";

export type TimePickerProps = TimeBaseProps & {
    buttonProps?: { [x: string]: any } | undefined;
    disabled?: boolean | undefined;
    id?: string | undefined;
    inputProps?: { [x: string]: any } | undefined;
    localizedText?: {
        meridiemAM: string;
        meridiemPM: string;
    } | undefined;
    popoverProps?: { [x: string]: any } | undefined;
    timeProps?: { [x: string]: any } | undefined;
    value?: string | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
} & { [x: string]: any };

declare class TimePicker extends React.Component<TimePickerProps> {
    static displayName: "TimePicker";
}

export default TimePicker;
