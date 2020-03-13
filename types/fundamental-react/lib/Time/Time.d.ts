import * as React from "react";

export interface TimeBaseProps {
    disableStyles?: boolean;
    format12Hours?: boolean;
    showHour?: boolean;
    showMinute?: boolean;
    showSecond?: boolean;
    spinners?: boolean;
    time?: { hour: string; minute: string; second: string; meridiem: 0 | 1 };
}

export type TimeProps = TimeBaseProps & {
    disabled?: boolean;
    hoursDownButtonProps?: any;
    hoursInputProps?: any;
    hoursUpButtonProps?: any;
    id?: string;
    localizedText?: {
        meridiemAM?: string;
        meridiemPM?: string;
    };
    meridiemDownButtonProps?: any;
    meridiemInputProps?: any;
    meridiemUpButtonProps?: any;
    minutesDownButtonProps?: any;
    minutesInputProps?: any;
    minutesUpButtonProps?: any;
    secondsDownButtonProps?: any;
    secondsInputProps?: any;
    secondsUpButtonProps?: any;
    onChange?: (time: { hour: string; minute: string; second: string; meridiem: 0 | 1 }) => void;
} & { [x: string]: any };

declare class Time extends React.Component<TimeProps> {
    static displayName: "Time";
}

export default Time;
