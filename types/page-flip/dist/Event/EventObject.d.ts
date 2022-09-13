import { PageFlip } from '../PageFlip';
/**
 * Data type passed to the event handler
 */
export type DataType = number | string | boolean | object;
/**
 * Type of object in event handlers
 */
export interface WidgetEvent {
    data: DataType;
    object: PageFlip;
}
export type EventCallback = (e: WidgetEvent) => void;
/**
 * A class implementing a basic event model
 */
export abstract class EventObject {
    private events;
    /**
     * Add new event handler
     */
    on(eventName: string, callback: EventCallback): EventObject;
    /**
     * Removing all handlers from an event
     */
    off(event: string): void;
    protected trigger(eventName: string, app: PageFlip, data?: DataType): void;
}
export {};
