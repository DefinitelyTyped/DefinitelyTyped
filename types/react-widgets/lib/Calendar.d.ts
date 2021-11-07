import { ComponentClass } from "react";
import { ReactWidgetsCommonProps, AutoFocus } from "./CommonProps";

declare namespace Calendar {
    type CalendarView = "month" | "year" | "decade" | "century";

    interface CalendarProps extends ReactWidgetsCommonProps, AutoFocus {
        /**
         * Set the culture of the Calendar, passed to the configured localizer.
         */
        culture?: string | undefined;
        /**
         * The current selected date, should be a Date object or null.
         */
        value?: Date | undefined;
        /**
         * Default value.
         */
        defaultValue?: Date | undefined;
        /**
         * Change event Handler that is called when the value is changed. The handler is called with
         * the Date object
         */
        onChange?: ((date?: Date) => void) | undefined;
        /**
         * The native onKeyDown event, called preventDefault will prevent any custom behavior, included keyboard shortcuts.
         */
        onKeyDown?: ((event: KeyboardEvent) => void) | undefined;
        /**
         * Callback fired when the Calendar navigates between views, or forward and backwards in
         * time.
         */
        onNavigate?: ((date: Date, direction: string, view: string) => void) | undefined;
        /**
         * A callback fired when the view changes.
         */
        onViewChange?: (() => void) | undefined;
        /**
         * The minimum date that the Calendar can navigate from.
         */
        min?: Date | undefined;
        /**
         * The maximum date that the Calendar can navigate to.
         */
        max?: Date | undefined;
        /**
         * Default current date at which the calendar opens. If none is provided, opens at today's
         * date or the value date (if any).
         * @default Date()
         */
        currentDate?: Date | undefined;
        /**
         * Change event Handler that is called when the currentDate is changed. The handler is
         * called with the currentDate object.
         */
        onCurrentDateChange?: ((date?: Date) => void) | undefined;
        /**
         * Show or hide the Calendar footer.
         * @default false
         */
        footer?: boolean | undefined;
        /**
         * Provide a custom component to render the days of the month.
         * The Component is provided the following props
         * - date: a Date object for the day of the month to render
         * - label: a formatted String of the date to render. To adjust the format of the label
         *          string use the dateFormat prop, listed below.
         */
        dayComponent?: React.ElementType | undefined;
        /**
         * The starting and lowest level view the calendar can navigate down to.
         */
        initialView?: "month" | "year" | "decade" | "century" | undefined;
        /**
         * The highest level view the calendar can navigate up to. This value should be higher than
         * initialView
         */
        finalView?: "month" | "year" | "decade" | "century" | undefined;
        /**
         * A formatter for the header button of the month view
         */
        headerFormat?: string | ((day: Date) => string) | undefined;
        /**
         * A formatter for the Calendar footer, formats Today's Date as a string.
         */
        footerFormat?: string | ((day: Date) => string) | undefined;
        /**
         * A formatter calendar days of the week, the default formats each day as a Narrow name:
         * "Mo", "Tu", etc.
         */
        dayFormat?: string | ((day: Date) => string) | undefined;
        /**
         * A formatter for day of the month.
         */
        dateFormat?: string | ((day: Date) => string) | undefined;
        /**
         * A formatter for month name.
         */
        monthFormat?: string | ((day: Date) => string) | undefined;
        /**
         * A formatter for the year.
         */
        yearFormat?: string | ((day: Date) => string) | undefined;
        /**
         * A formatter for decade, the default formats the first and last year of the decade like:
         * 2000 - 2009.
         */
        decadeFormat?: string | ((day: Date) => string) | undefined;
        /**
         * A formatter for century, the default formats the first and last year of the century like:
         * 1900 - 1999.
         */
        centuryFormat?: string | ((day: Date) => string) | undefined;
        messages?: CalendarMessages | undefined;
        /**
         * Set a unique starting view
         */
        defaultView?: CalendarView | undefined;
        /**
         * Controls the currently displayed calendar view. Use defaultView to set a unique starting view.
         */
        view?: CalendarView | undefined;
        /**
         * Defines a list of views the Calendar can traverse through, starting with the first in the list to the last.
         */
        views?: CalendarView[] | undefined;
    }

    interface CalendarMessages {
        /**
         * Title and screen reader text for the left arrow button.
         * @default: "navigate back"
         */
        moveBack?: string | undefined;
        /**
         * Title and screen reader text for the right arrow button.
         * @default: "navigate forward"
         */
        moveForward?: string | undefined;
    }
}

interface CalendarClass extends ComponentClass<Calendar.CalendarProps> {}
declare var Calendar: CalendarClass;
export = Calendar;
