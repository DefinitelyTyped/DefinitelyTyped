export = Observer;

declare class Observer {
    constructor();
    /** Manually fire an event. */
    fireEvent(eventName: string, ...args: any[]): void;
    /** Attach a handler function for an event. */
    on(eventName: string, callback: EventHandler): ListenerDescriptor;
    /** Attach a handler to an event. */
    once(eventName: string, callback: EventHandler): ListenerDescriptor;
    /** Disable firing a list of events by name. */
    setDisabledEventEmissions(eventNames: string[]): void;
    /** Remove an event handler. */
    un(eventName: string, callback: EventHandler): void;
    /** Remove all event handlers. */
    unAll(): void;

    readonly handlers: { [eventName: string]: EventHandler[] };
}

type EventHandler = (...args: any[]) => void;

interface ListenerDescriptor {
    /** The name of the event. */
    name: string;
    /** The callback. */
    callback: (...args: any[]) => void;
    /** The function to call to remove the listener. */
    un: () => void;
}
