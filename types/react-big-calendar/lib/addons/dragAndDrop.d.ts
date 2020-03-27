import { Calendar, CalendarProps, Components, Event, stringOrDate } from '../../index';
import * as React from 'react';

export interface withDragAndDropProps<TEvent extends object = Event> {
  onEventDrop?: (args: { event: TEvent, start: stringOrDate, end: stringOrDate, allDay: boolean }) => void;
  onEventResize?: (args: { event: TEvent, start: stringOrDate, end: stringOrDate, allDay: boolean }) => void;
  onDragStart?: (args: { event: TEvent, action: 'resize' | 'move', direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' }) => void;
  onDragOver?: (event: React.DragEvent) => void;
  onDropFromOutside?: (args: { start: stringOrDate, end: stringOrDate, allDay: boolean}) => void;
  dragFromOutsideItem?: () => keyof TEvent | ((event: TEvent) => Date);
  draggableAccessor?: keyof TEvent | ((event: TEvent) => boolean);
  resizableAccessor?: keyof TEvent | ((event: TEvent) => boolean);
  selectable?: true | false | 'ignoreEvents';
  resizable?: boolean;
  components?: Components<TEvent>;
  elementProps?: React.HTMLAttributes<HTMLElement>;
  step?: number;
}

declare class DragAndDropCalendar<TEvent extends object = Event, TResource extends object = object>
  extends React.Component<CalendarProps<TEvent, TResource> & withDragAndDropProps<TEvent>> {}

declare function withDragAndDrop(calendar: typeof Calendar): typeof DragAndDropCalendar;
export default withDragAndDrop;
