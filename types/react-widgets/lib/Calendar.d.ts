import * as React from 'react';
import { ReactWidgetsCommonProps } from './CommonProps';

interface CalendarProps extends ReactWidgetsCommonProps<CalendarClass>{
    /**
     * The current selected date, should be a Date object or null.
     */
    value?: Date;
    /**
     * Default value.
     */
    defaultValue?: Date;
    /**
     * Change event Handler that is called when the value is changed. The handler is called with
     * the Date object
     */
    onChange?: (date?: Date) => void;
    /**
     * Callback fired when the Calendar navigates between views, or forward and backwards in
     * time.
     */
    onNavigate?: (date: Date, direction: string, view: string ) => void;
    /**
     * The minimum date that the Calendar can navigate from.
     */
    min?: Date;
    /**
     * The maximum date that the Calendar can navigate to.
     */
    max?: Date;
    /**
     * Default current date at which the calendar opens. If none is provided, opens at today's
     * date or the value date (if any).
     * @default Date()
     */
    currentDate?: Date;
    /**
     * Change event Handler that is called when the currentDate is changed. The handler is
     * called with the currentDate object.
     */
    onCurrentDateChange?: (date?: Date) => void;
    /**
     * Show or hide the Calendar footer.
     * @default false
     */
    footer?: boolean;
    /**
     * Provide a custom component to render the days of the month.
     * The Component is provided the following props
     * - date: a Date object for the day of the month to render
     * - label: a formatted String of the date to render. To adjust the format of the label
     *          string use the dateFormat prop, listed below.
     */
    dayComponent?: React.ReactType;
    /**
     * The starting and lowest level view the calendar can navigate down to.
     * @enum "month" "year" "decade" "century"
     */
    initialView?: "month" | "year" | "decade" | "century";
    /**
     * The highest level view the calendar can navigate up to. This value should be higher than
     * initialView
     * @enum "month" "year" "decade" "century"
     */
    finalView?: "month" | "year" | "decade" | "century";
    /**
     * A formatter for the header button of the month view
     */
    headerFormat?: string | ((day: Date) => string);
    /**
     * A formatter for the Calendar footer, formats Today's Date as a string.
     */
    footerFormat?: string | ((day: Date) => string);
    /**
     * A formatter calendar days of the week, the default formats each day as a Narrow name:
     * "Mo", "Tu", etc.
     */
    dayFormat?: string | ((day: Date) => string);
    /**
     * A formatter for day of the month.
     */
    dateFormat?: string | ((day: Date) => string);
    /**
     * A formatter for month name.
     */
    monthFormat?: string | ((day: Date) => string);
    /**
     * A formatter for the year.
     */
    yearFormat?: string | ((day: Date) => string);
    /**
     * A formatter for decade, the default formats the first and last year of the decade like:
     * 2000 - 2009.
     */
    decadeFormat?: string | ((day: Date) => string);
    /**
     * A formatter for century, the default formats the first and last year of the century like:
     * 1900 - 1999.
     */
    centuryFormat?: string | ((day: Date) => string);
    messages?: CalendarMessages;
}

interface CalendarMessages {
    /**
     * Title and screen reader text for the left arrow button.
     * @default: "navigate back"
     */
    moveBack?: string;
    /**
     * Title and screen reader text for the right arrow button.
     * @default: "navigate forward"
     */
    moveForward?: string;
}

interface Calendar extends React.ReactElement<CalendarProps> {}
interface CalendarClass extends React.ComponentClass<CalendarProps> {}
declare var Calendar: CalendarClass;
export = Calendar;
