import * as React from "react";

export interface TimeBaseProps {
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Set to **true** to use the 12-hour clock (hours ranging from 01 to 12) and to display a meridiem control. */
    format12Hours?: boolean;
    /* Enables the input for hours. */
    showHour?: boolean;
    /* Enables the input for minutes. */
    showMinute?: boolean;
    /* Enables the input for seconds. */
    showSecond?: boolean;
    /* Set to **true** to show up/down buttons for each input. */
    spinners?: boolean;
    /* The time component values. Contains four properties:
     **hour** (with values from 01 to 12 when `format12Hours` is true or 00 to 23 when `format12Hours` is false),
     **minute** (with values from 00 to 59), **second** (with values from 00 to 59),
     **meridiem** (with values 0 for AM or 1 for PM). */
    time?: { hour: string; minute: string; second: string; meridiem: 0 | 1 };
}

export type TimeProps = TimeBaseProps & {
    disabled?: boolean;
    /* Additional props to be spread to the hours down `<button>` element. */
    hoursDownButtonProps?: { [x: string]: any };
    /* Additional props to be spread to the hours `<input>` element. */
    hoursInputProps?: { [x: string]: any };
    /* Additional props to be spread to the hours up `<button>` element. */
    hoursUpButtonProps?: { [x: string]: any };
    id?: string;
    localizedText?: {
        /* Ante meridiem for 12 hour clock. */
        meridiemAM: string;
        /* Post meridiem for 12 hour clock. */
        meridiemPM: string;
    };
    /* Additional props to be spread to the meridiem down `<button>` element. */
    meridiemDownButtonProps?: { [x: string]: any };
    /* Additional props to be spread to the meridiem `<input>` element. */
    meridiemInputProps?: { [x: string]: any };
    /* Additional props to be spread to the meridiem up `<button>` element. */
    meridiemUpButtonProps?: { [x: string]: any };
    /* Additional props to be spread to the minutes down `<button>` element. */
    minutesDownButtonProps?: { [x: string]: any };
    /* Additional props to be spread to the minutes `<input>` element. */
    minutesInputProps?: { [x: string]: any };
    /* Additional props to be spread to the minutes up `<button>` element. */
    minutesUpButtonProps?: { [x: string]: any };
    /* Additional props to be spread to the seconds down `<button>` element. */
    secondsDownButtonProps?: { [x: string]: any };
    /* Additional props to be spread to the seconds `<input>` element. */
    secondsInputProps?: { [x: string]: any };
    /* Additional props to be spread to the seconds up `<button>` element. */
    secondsUpButtonProps?: { [x: string]: any };
    onChange?: (time: {
        hour: string;
        minute: string;
        second: string;
        meridiem: 0 | 1;
    }) => void;
} & { [x: string]: any };

declare class Time extends React.Component<TimeProps> {
    static displayName: "Time";
}

export default Time;
