import * as React from "react";
import { TimeBaseProps } from "../Time/Time";

export type TimePickerProps = TimeBaseProps & {
    buttonProps?: { [x: string]: any };
    disabled?: boolean;
    id?: string;
    inputProps?: { [x: string]: any };
    localizedText?: {
        /* Ante meridiem for 12 hour clock. */
        meridiemAM: string;
        /* Post meridiem for 12 hour clock. */
        meridiemPM: string;
    };
    popoverProps?: { [x: string]: any };
    /* Additional props to be spread to the `Time` component. */
    timeProps?: { [x: string]: any };
    /* Initial time value for the input. */
    value?: string;
} & { [x: string]: any };

declare class TimePicker extends React.Component<TimePickerProps> {
    static displayName: "TimePicker";
}

export default TimePicker;
