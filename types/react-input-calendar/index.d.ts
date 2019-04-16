// Type definitions for react-input-calendar
// Project: https://github.com/Rudeg/react-input-calendar
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

declare namespace reactInputCalendar {
    export interface ReactInputCalendarProps {
        /**
        * Format of date, which display in input and set in date property.
        * Allowed Keys: All formats supported by moment.js
        * @default 'MM-DD-YYYY'
        */
        format?: string;
        /**
        * Set initial date value
        * @default current date
        */
        date?: string | Date;
        /**
        * Set the selectable minimum date
        * @default null
        */
        minDate?: string | Date;
        /**
        * Set the selectable maximum date
        * @default null
        */
        maxDate?: string | Date;
        /**
        * Set minimal view. Values:
        * 0 - days
        * 1 - months
        * 2 - years.
        * @default 0 (DaysView)
        */
        minView?: number;
        /**
        * Format of date for the onChange event. Default on the date format (ISO 8601) to ease the save of data.
        * Allowed Keys: All formats supported by moment.js
        * @default 'MM-DD-YYYY'
        */
        computableFormat?: string;
        /**
        * Set a function that will be triggered whenever there is a change in the selected date. It will return the date in the props.computableFormat format.
        */
        onChange?: (computableDate: string) => void;
        /**
        * Set a function that will be triggered the when input field is blurred. It will return the event and the date in the props.computableFormat format.
        */
        onBlur?: (event: React.SyntheticEvent<ReactInputCalendar>, computableDate: string) => void;
        /**
        * Set a function that will be triggered when the input field is focused.
        */
        onFocus?: (event: React.SyntheticEvent<ReactInputCalendar>) => void;
        /**
        * Define state when date picker would close once the user has clicked on a date.
        */
        closeOnSelect?: boolean;
        /**
        * Setting this value to true makes the calendar widget open when the iput field is focused.
        */
        openOnInputFocus?: boolean;
        /**
        * Value to show in the input text box if no date is set.
        */
        placeholder?: string;
        /**
        * Id that should be applied to the input field. Useful when using it with a label element.
        */
        inputFieldId?: string;
        /**
        * Define the class name of the input field where the date picker represents its value.
        */
        inputFieldClass?: string;
        /**
        * If true, the input field gets disabled and the icon next to it disappears.
        */
        disabled?: boolean;
    }
    interface ReactInputCalendarState { }
    export class ReactInputCalendar extends React.Component<ReactInputCalendarProps, ReactInputCalendarState> {
    }
}
declare var ReactInputCalendar: typeof reactInputCalendar.ReactInputCalendar
declare module "react-input-calendar" {
    export = ReactInputCalendar;
}
