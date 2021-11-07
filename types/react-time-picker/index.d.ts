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
    amPmAriaLabel?: string | undefined;
    /**
     * Automatically focuses the input on mount.
     */
    autoFocus?: boolean | undefined;
    /**
     * Class name(s) that will be added along with "react-time-picker" to the main React-Time-Picker <div> element.
     */
    className?: string | string[] | undefined;
    /**
     * aria-label for the clear button.
     */
    clearAriaLabel?: string | undefined;
    /**
     * Content of the clear button. Setting the value explicitly to null will hide the icon.
     */
    clearIcon?: string | JSX.Element | null | undefined;
    /**
     * aria-label for the clock button.
     */
    clockAriaLabel?: string | undefined;
    /**
     * Class name(s) that will be added along with "react-clock" to the main React-Clock <time> element.
     */
    clockClassName?: string | string[] | undefined;
    /**
     * Content of the clock button. Setting the value explicitly to null will hide the icon.
     */
    clockIcon?: string | JSX.Element | null | undefined;
    /**
     * Whether to close the clock on value selection.
     * @default true
     */
    closeClock?: boolean | undefined;
    /**
     * Whether the time picker should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When set to true, will remove the clock and the button toggling its visibility.
     * @default false
     */
    disableClock?: boolean | undefined;
    /**
     * Input format based on Unicode Technical Standard #35.
     * Supported values are: H, HH, h, hh, m, mm, s, ss, a.
     */
    format?: string | undefined;
    /**
     * aria-label for the hour input.
     */
    hourAriaLabel?: string | undefined;
    /**
     * placeholder for the hour input.
     * @default "--"
     */
    hourPlaceholder?: string | undefined;
    /**
     * Whether the clock should be opened.
     * @default false
     */
    isOpen?: boolean | undefined;
    /**
     * Locale that should be used by the time picker and the clock. Can be any IETF language tag.
     */
    locale?: string | undefined;
    /**
     * How detailed time picking shall be. Can be "hour", "minute" or "second".
     * @default "minute"
     */
    maxDetail?: 'hour' | 'minute' | 'second' | undefined;
    /**
     * Maximum time that the user can select.
     */
    maxTime?: T | undefined;
    /**
     * Minimum date that the user can select.
     */
    minTime?: T | undefined;
    /**
     * aria-label for the minute input.
     */
    minuteAriaLabel?: string | undefined;
    /**
     * placeholder for the minute input.
     * @default "--"
     */
    minutePlaceholder?: string | undefined;
    /**
     * Input name.
     * @default "time"
     */
    name?: string | undefined;
    /**
     * aria-label for the native time input.
     */
    nativeInputAriaLabel?: string | undefined;
    /**
     * Function called when the user picks a valid time.
     */
    onChange?: ((value: T) => void) | undefined;
    /**
     * Function called when the clock closes.
     */
    onClockClose?: (() => void) | undefined;
    /**
     * Function called when the clock opens.
     */
    onClockOpen?: (() => void) | undefined;
    /**
     * Whether date input should be required.
     */
    required?: boolean | undefined;
    /**
     * aria-label for the second input.
     */
    secondAriaLabel?: string | undefined;
    /**
     * placeholder for the second input.
     * @default "--"
     */
    secondPlaceholder?: string | undefined;
    /**
     * Input value.
     */
    value: T;
}
