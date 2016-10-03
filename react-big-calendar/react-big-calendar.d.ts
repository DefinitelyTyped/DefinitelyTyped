// Type definitions for react-big-calendar v0.10.X
// Project: https://github.com/intljusticemission/react-big-calendar
// Definitions by: Piotr Witek <http://piotrwitek.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

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
        titleAccessor?: string;
        allDayAccessor?: boolean;
        startAccessor?: stringOrDate;
        endAccessor?: stringOrDate;
        min?: stringOrDate;
        max?: stringOrDate;
        scrollToTime?: stringOrDate;
        formats?: Object;
        components?: Object;
        messages?: Object;
    }

    export class BigCalendar extends React.Component<BigCalendarProps, {}> {
        /**
         * Setup the localizer by providing the moment Object
         */
        static momentLocalizer(momentInstance: Object): void;
        /**
         * Setup the localizer by providing the globalize Object
         */
        static globalizeLocalizer(globalizeInstance: Object): void;
    }

     export default BigCalendar;
}
