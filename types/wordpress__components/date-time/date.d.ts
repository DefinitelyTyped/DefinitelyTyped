import { ComponentType } from '@wordpress/element';

declare namespace DatePicker {
    interface Props {
        /**
         * The current date and time at initialization. Optionally pass in `null`
         * to specify no date is currently selected. Defaults to current date.
         */
        currentDate?: string;
        /**
         * Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM
         * widget is displayed and the time format is assumed to be MM-DD-YYYY.
         */
        is12Hour?: boolean;
        /**
         * A callback function that should return a `boolean` to signify if the
         * day is valid or not.
         */
        isInvalidDate?(date: Date): boolean;
        /**
         * Function to call when the date value changes.
         */
        onChange(currentDate: string): void;
    }
}
declare const DatePicker: ComponentType<DatePicker.Props>;

export default DatePicker;
