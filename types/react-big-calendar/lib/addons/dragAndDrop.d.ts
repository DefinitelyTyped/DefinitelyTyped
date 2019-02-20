  import BigCalendar, { BigCalendarProps, Event } from 'react-big-calendar';

  type withDragAndDropProps<TEvent> = {
      onEventDrop?: (args: { event: TEvent, start: stringOrDate, end: stringOrDate, allDay: boolean }) => void;
      onEventResize?: (args: { event: TEvent, start: stringOrDate, end: stringOrDate, allDay: boolean }) => void;
      resizable?: boolean;
  };

  declare class DragAndDropCalendar<TEvent extends Event = Event, TResource extends object = object>
      extends React.Component<BigCalendarProps<TEvent, TResource> & withDragAndDropProps<TEvent>>, {}

  function withDragAndDrop(calendar: typeof BigCalendar): typeof DragAndDropCalendar;
  export = withDragAndDrop;
  
