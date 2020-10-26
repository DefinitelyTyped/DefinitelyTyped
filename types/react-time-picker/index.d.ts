// Type definitions for react-time-picker 4.0
// Project: https://github.com/wojtekmaj/react-time-picker
// Definitions by: Enmanuel Veras <https://github.com/everas7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { ClockProps } from 'react-clock';

export default function TimePicker(props: TimePickerProps): JSX.Element;
export type TimePickerValue = string | Date;
export type TimePickerClockProps = Omit<ClockProps, 'value' | 'className'>;
export interface TimePickerProps<T = TimePickerValue> extends TimePickerClockProps {
    /**
     * aria-label for the AM/PM select input.
     */
    amPmAriaLabel?: string;
    /**
     * Automatically focuses the input on mount.
     */
    autoFocus?: boolean;
    /**
     * Class name(s) that will be added along with "react-time-picker" to the main React-Time-Picker <div> element.
     */
    className?: string | string[];
    /**
     * aria-label for the clear button.
     */
    clearAriaLabel?: string;
    /**
     * Content of the clear button. Setting the value explicitly to null will hide the icon.
     */
    clearIcon?: string | JSX.Element;
    /**
     * aria-label for the clock button.
     */
    clockAriaLabel?: string;
    /**
     * Class name(s) that will be added along with "react-clock" to the main React-Clock <time> element.
     */
    clockClassName?: string | string[];
    /**
     * Content of the clock button. Setting the value explicitly to null will hide the icon.
     */
    clockIcon?: string | JSX.Element;
    /**
     * Whether to close the clock on value selection.
     * @default true
     */
    closeClock?: boolean;
    /**
     * Whether the time picker should be disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * When set to true, will remove the clock and the button toggling its visibility.
     * @default false
     */
    disableClock?: boolean;
    /**
     * Input format based on Unicode Technical Standard #35.
     * Supported values are: H, HH, h, hh, m, mm, s, ss, a.
     */
    format?: string;
    /**
     * aria-label for the hour input.
     */
    hourAriaLabel?: string;
    /**
     * placeholder for the hour input.
     * @default "--"
     */
    hourPlaceholder?: string;
    /**
     * Whether the clock should be opened.
     * @default false
     */
    isOpen?: boolean;
    /**
     * Locale that should be used by the time picker and the clock. Can be any IETF language tag.
     */
    locale?: string;
    /**
     * How detailed time picking shall be. Can be "hour", "minute" or "second".
     * @default "minute"
     */
    maxDetail?: 'hour' | 'minute' | 'second';
    /**
     * Maximum time that the user can select.
     */
    maxTime?: T;
    /**
     * Minimum date that the user can select.
     */
    minTime?: T;
    /**
     * aria-label for the minute input.
     */
    minuteAriaLabel?: string;
    /**
     * placeholder for the minute input.
     * @default "--"
     */
    minutePlaceholder?: string;
    /**
     * Input name.
     * @default "time"
     */
    name?: string;
    /**
     * aria-label for the native time input.
     */
    nativeInputAriaLabel?: string;
    /**
     * Function called when the user picks a valid time.
     */
    onChange?: (value: T) => void;
    /**
     * Function called when the clock closes.
     */
    onClockClose?: () => void;
    /**
     * Function called when the clock opens.
     */
    onClockOpen?: () => void;
    /**
     * Whether date input should be required.
     */
    required?: boolean;
    /**
     * aria-label for the second input.
     */
    secondAriaLabel?: string;
    /**
     * placeholder for the second input.
     * @default "--"
     */
    secondPlaceholder?: string;
    /**
     * Input value.
     */
    value: T;
}
