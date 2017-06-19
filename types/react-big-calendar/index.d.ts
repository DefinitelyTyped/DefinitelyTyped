// Type definitions for react-big-calendar 0.12.3
// Project: https://github.com/intljusticemission/react-big-calendar
// Definitions by: Piotr Witek <http://piotrwitek.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-big-calendar' {
    import * as React from 'react';

    type stringOrDate = string | Date;

    interface BigCalendarProps extends React.Props<BigCalendar> {
        date?: stringOrDate;
        view?: string;
        events?: Object[];
        onNavigate?: Function;
        onView?: Function;
        onSelectSlot?: (slotInfo: { start: stringOrDate, end: stringOrDate, slots: Date[] | string[] }) => void;
        onSelectEvent?: (event: Object) => void;
        onSelecting?: (slotInfo: { start: stringOrDate, end: stringOrDate }) => boolean;
        views?: Object;
        toolbar?: boolean;
        popup?: boolean;
        popupOffset?: number | { x: number, y: number };
        selectable?: boolean;
        step?: number;
        rtl?: boolean;
        eventPropGetter?: (event: Object, start: stringOrDate, end: stringOrDate, isSelected: boolean) => void;
        titleAccessor?: string | ((row: Object) => string);
        allDayAccessor?: string | ((row: Object) => boolean);
        startAccessor?: string | ((row: Object) => Date);
        endAccessor?: string | ((row: Object) => Date);
        min?: stringOrDate;
        max?: stringOrDate;
        scrollToTime?: stringOrDate;
        formats?: Object;
        components?: Object;
        messages?: Object;
        timeslots?: number;
        defaultView?: string;
        className?: string;
        elementProps?: React.HTMLAttributes<HTMLElement>;
    }

    class BigCalendar extends React.Component<BigCalendarProps> {
        /**
         * Setup the localizer by providing the moment Object
         */
        static momentLocalizer(momentInstance: Object): void;
        /**
         * Setup the localizer by providing the globalize Object
         */
        static globalizeLocalizer(globalizeInstance: Object): void;
    }

    /* This enables 'import * as BigCalendar' syntax when compiling to es2015 */
    namespace BigCalendar {}

    /* react-big-calendar is exported as a commonjs module (it uses babel-preset-jason) */
    export = BigCalendar;
}
