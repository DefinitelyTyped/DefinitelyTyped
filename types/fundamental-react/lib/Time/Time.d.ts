import * as React from "react";

export interface TimeBaseProps {
    disableStyles?: boolean | undefined;
    format12Hours?: boolean | undefined;
    showHour?: boolean | undefined;
    showMinute?: boolean | undefined;
    showSecond?: boolean | undefined;
    spinners?: boolean | undefined;
    time?: { hour: string; minute: string; second: string; meridiem: 0 | 1 } | undefined;
}

export type TimeProps = TimeBaseProps & {
    disabled?: boolean | undefined;
    hoursDownButtonProps?: any;
    hoursInputProps?: any;
    hoursUpButtonProps?: any;
    id?: string | undefined;
    localizedText?: {
        meridiemAM?: string | undefined;
        meridiemPM?: string | undefined;
    } | undefined;
    meridiemDownButtonProps?: any;
    meridiemInputProps?: any;
    meridiemUpButtonProps?: any;
    minutesDownButtonProps?: any;
    minutesInputProps?: any;
    minutesUpButtonProps?: any;
    secondsDownButtonProps?: any;
    secondsInputProps?: any;
    secondsUpButtonProps?: any;
    onChange?: ((time: { hour: string; minute: string; second: string; meridiem: 0 | 1 }) => void) | undefined;
} & { [x: string]: any };

declare class Time extends React.Component<TimeProps> {
    static displayName: "Time";
}

export default Time;
