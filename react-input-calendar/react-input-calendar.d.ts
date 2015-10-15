// Type definitions for react-input-calendar
// Project: https://github.com/Rudeg/react-input-calendar
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>
declare module reactInputCalendar {
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
        * Set an function that will be triggered whenever there is a change in the selected date. It will return the date in the props.computableFormat format.
        */
        onChange?:(selectedDate: string)=>any;
        /**
        * Define state when date picker would close once the user has clicked on a date.
        */
        closeOnSelect?:boolean;
        /**
        * Setting this value to true makes the calendar widget open when the iput field is focused.
        */
        openOnInputFocus?: boolean;
        /**
        * Value to show in the input text box if no date is set.
        */
        placeholder?:string
    }
    interface ReactInputCalendarState { }
    export class ReactInputCalendar extends __React.Component<ReactInputCalendarProps, ReactInputCalendarState>{
        render(): __React.DOMElement<any>
    }
}
declare var ReactInputCalendar: typeof reactInputCalendar.ReactInputCalendar
declare module "react-input-calendar" {
    export = ReactInputCalendar
}
