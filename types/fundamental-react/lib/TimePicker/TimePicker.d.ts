import * as React from "react";
import { TimeBaseProps } from "../Time/Time";

export type TimePickerProps = TimeBaseProps & {
    buttonProps?: { [x: string]: any };
    disabled?: boolean;
    id?: string;
    inputProps?: { [x: string]: any };
    localizedText?: {
        meridiemAM: string;
        meridiemPM: string;
    };
    popoverProps?: { [x: string]: any };
    timeProps?: { [x: string]: any };
    value?: string;
    onChange?: (...args: any[]) => any;
} & { [x: string]: any };

declare class TimePicker extends React.Component<TimePickerProps> {
    static displayName: "TimePicker";
}

export default TimePicker;
