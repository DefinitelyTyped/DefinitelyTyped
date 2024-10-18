import * as React from "react";
import { CalendarProps, Components, Event, stringOrDate } from "../../index";

export type DragAction = "resize" | "move";

export type DragDirection = "UP" | "DOWN" | "LEFT" | "RIGHT";

export interface EventInteractionArgs<TEvent> {
    event: TEvent;
    start: stringOrDate;
    end: stringOrDate;
    isAllDay?: boolean;
    resourceId?: string | number;
}

export interface OnDragStartArgs<TEvent> {
    event: TEvent;
    action: DragAction;
    direction: DragDirection;
}

export interface DragFromOutsideItemArgs {
    start: stringOrDate;
    end: stringOrDate;
    allDay: boolean;
}

export interface withDragAndDropProps<TEvent extends object = Event, TResource extends object = object> {
    onEventDrop?: ((args: EventInteractionArgs<TEvent>) => void) | undefined;
    onEventResize?: ((args: EventInteractionArgs<TEvent>) => void) | undefined;
    onDragStart?: ((args: OnDragStartArgs<TEvent>) => void) | undefined;
    onDragOver?: ((event: React.DragEvent) => void) | undefined;
    onDropFromOutside?: ((args: DragFromOutsideItemArgs) => void) | undefined;
    dragFromOutsideItem?: (() => keyof TEvent | ((event: TEvent) => Date)) | undefined;
    draggableAccessor?: keyof TEvent | ((event: TEvent) => boolean) | undefined;
    resizableAccessor?: keyof TEvent | ((event: TEvent) => boolean) | undefined;
    selectable?: true | false | "ignoreEvents" | undefined;
    resizable?: boolean | undefined;
    components?: Components<TEvent, TResource> | undefined;
    elementProps?: React.HTMLAttributes<HTMLElement> | undefined;
    step?: number | undefined;
}

interface DragAndDropCalendarProps<TEvent extends object = Event, TResource extends object = object>
    extends CalendarProps<TEvent, TResource>, withDragAndDropProps<TEvent, TResource>
{}

declare class DragAndDropCalendar<TEvent extends object = Event, TResource extends object = object>
    extends React.Component<DragAndDropCalendarProps<TEvent, TResource>>
{}

declare function withDragAndDrop<TEvent extends object = Event, TResource extends object = object>(
    calendar: React.ComponentType<CalendarProps<TEvent, TResource>>,
): React.ComponentType<DragAndDropCalendarProps<TEvent, TResource>>;

export default withDragAndDrop;

// Turn off automatic exports
export {};
