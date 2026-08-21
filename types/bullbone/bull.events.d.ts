/**
 * An Events mixin.
 */
declare class Events {
    /**
     * Subscribe to an event.
     */
    on(name: string, callback: (...args: any[]) => any, context?: object): this;

    /**
     * Subscribe to an event of other object.
     */
    listenTo(other: object, name: string, callback: (...args: any[]) => any): this;

    /**
     * Unsubscribe from an event or all events.
     */
    off(name?: string, callback?: (...args: any[]) => any, context?: object): this;

    /**
     * Stop listening to other object. No arguments will remove all listeners.
     */
    stopListening(other?: object, name?: string, callback?: (...args: any[]) => any): this;

    /**
     * Subscribe to an event. Fired once.
     */
    once(name: string, callback: (...args: any[]) => any, context?: object): this;

    /**
     * Subscribe to an event of other object. Fired once. Will be automatically unsubscribed on view removal.
     */
    listenToOnce(other: object, name: string, callback: (...args: any[]) => any): this;

    /**
     * Trigger an event.
     */
    trigger(name: string, ...parameters: Array<any>): this;
}

export default Events;
