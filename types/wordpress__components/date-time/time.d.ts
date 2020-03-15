import { ComponentType } from '@wordpress/element';

declare namespace TimePicker {
    interface Props {
        /**
         * Date string to use as current time. If not set, current time is used.
         */
        currentTime?: string;
        /**
         * Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM
         * widget is displayed and the time format is assumed to be MM-DD-YYYY.
         */
        is12Hour?: boolean;
        /**
         * Function to call when the time value changes.
         */
        onChange(time: string): void;
    }
}
declare const TimePicker: ComponentType<TimePicker.Props>;

export default TimePicker;
