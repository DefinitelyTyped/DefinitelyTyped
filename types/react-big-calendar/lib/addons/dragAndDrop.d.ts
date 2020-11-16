import { Calendar, CalendarProps, Components, Event, stringOrDate } from '../../index';
import * as React from 'react';

export interface withDragAndDropProps<TEvent extends object = Event, TResource extends object = object> {
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
  components?: Components<TEvent, TResource>;
  elementProps?: React.HTMLAttributes<HTMLElement>;
  step?: number;
}

interface DragAndDropCalendarProps<TEvent extends object = Event, TResource extends object = object>
  extends CalendarProps<TEvent, TResource>, withDragAndDropProps<TEvent, TResource> {}

declare class DragAndDropCalendar<TEvent extends object = Event, TResource extends object = object>
  extends React.Component<DragAndDropCalendarProps<TEvent, TResource>> {}

declare function withDragAndDrop<TEvent extends object = Event, TResource extends object = object>(
    calendar: React.ComponentType<CalendarProps<TEvent, TResource>>
): React.ComponentType<DragAndDropCalendarProps<TEvent, TResource>>;
export default withDragAndDrop;

// Turn off automatic exports
export {};
