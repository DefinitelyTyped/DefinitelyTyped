import BigCalendar, { BigCalendarProps, Event, stringOrDate } from '../../index';
import * as React from 'react';

interface withDragAndDropProps<TEvent> {
  onEventDrop?: (args: { event: TEvent, start: stringOrDate, end: stringOrDate, allDay: boolean }) => void;
  onEventResize?: (args: { event: TEvent, start: stringOrDate, end: stringOrDate, allDay: boolean }) => void;
  resizable?: boolean;
}

declare class DragAndDropCalendar<TEvent extends Event = Event, TResource extends object = object>
  extends React.Component<BigCalendarProps<TEvent, TResource> & withDragAndDropProps<TEvent>> {}

declare function withDragAndDrop(calendar: typeof BigCalendar): typeof DragAndDropCalendar;
export default withDragAndDrop;
