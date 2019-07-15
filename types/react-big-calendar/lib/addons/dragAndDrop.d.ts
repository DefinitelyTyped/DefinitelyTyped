import { Calendar, CalendarProps, Event, stringOrDate } from '../../index';
import * as React from 'react';

export interface withDragAndDropProps<TEvent> {
  onEventDrop?: (args: { event: TEvent, start: stringOrDate, end: stringOrDate, allDay: boolean }) => void;
  onEventResize?: (args: { event: TEvent, start: stringOrDate, end: stringOrDate, allDay: boolean }) => void;
  resizable?: boolean;
}

declare class DragAndDropCalendar<TEvent extends Event = Event, TResource extends object = object>
  extends React.Component<CalendarProps<TEvent, TResource> & withDragAndDropProps<TEvent>> {}

declare function withDragAndDrop(calendar: typeof Calendar): typeof DragAndDropCalendar;
export default withDragAndDrop;
