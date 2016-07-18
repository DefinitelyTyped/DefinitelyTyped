// Type definitions for React Big Calendar v0.10.X (react-big-calendar)
// Project: https://github.com/intljusticemission/react-big-calendar
// Definitions by: Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-big-calendar' {
  import * as React from 'react';

  type stringOrDate = string | Date;

  interface Props {
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

  export class BigCalendar extends React.Component<Props, any> {
    static momentLocalizer(momentInstance: Object): void;
    static globalizeLocalizer(globalizeInstance: Object): void;
  }

  export default BigCalendar;
}
