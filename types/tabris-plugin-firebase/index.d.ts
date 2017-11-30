// Type definitions for tabris-plugin-firebase 1.0
// Project: https://github.com/eclipsesource/tabris-plugin-firebase/
// Definitions by: EclipseSource <https://github.com/eclipsesource>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare global {
    namespace firebase {
        const Analytics: Analytics;
        const Messaging: Messaging;
        const MessagingEvents: MessagingEvents;
        const MessageEvent: MessageEvent;
        type AnalyticsProperties = Partial<PropertyMixins.Analytics>;

        interface Analytics extends NativeObject, PropertyMixins.Analytics {
            logEvent(eventName: string, parameters?: {[key: string]: string}): void;
            setUserProperty(propertyName: string, value: string): void;
            set(properties: AnalyticsProperties): this;
            set(property: string, value: any): this;
        }

        interface Messaging extends NativeObject {
            readonly instanceId: string;
            readonly token: string;
            readonly launchData: object;
            resetInstanceId(): void;
            on(type: string, listener: (event: any) => void, context?: object): this;
            on(listeners: MessagingEvents): this;
            off(type: string, listener: (event: any) => void, context?: object): this;
            off(listeners: MessagingEvents): this;
            once(type: string, listener: (event: any) => void, context?: object): this;
            once(listeners: MessagingEvents): this;
        }

        interface MessagingEvents {
            instanceIdChanged?(event: PropertyChangedEvent<Messaging, string>): void;
            tokenChanged?(event: PropertyChangedEvent<Messaging, string>): void;
            message?(event: MessageEvent): void;
        }

        interface MessageEvent extends EventObject<Messaging> {
            data: any;
        }

        namespace PropertyMixins {
            interface Analytics {
                analyticsCollectionEnabled: boolean;
                screenName: string;
                userId: string;
            }
        }
    }
}

// Tabris.js interfaces

interface EventObject<T> {
    readonly target: T;
    readonly timeStamp: number;
    readonly type: string;
}

/**
 * Base class for all objects with a native implementation.
 */
declare class NativeObject {
    protected constructor(properties?: object);

    /**
     * Gets the current value of the given *property*.
     */
    get(property: string): any;

    /**
     * Removes all occurrences of *listener* that are bound to *type* and *context* from this widget.
     * @param type The type of events to remove listeners for.
     * @param listener The listener function to remove.
     * @param context The context of the bound listener to remove.
     */
    off(type: string, listener: (event: any) => void, context?: object): this;

    /**
     * Removes all listeners in the given object from the event type indicated by their key.
     * @param listeners A key-value map where the keys are event types and the values are the listeners to deregister from these events, e.g. `{tap: onTap, scroll: onScroll}`.
     */
    off(listeners: object): this;

    /**
     * Registers a *listener* function to be notified of events of the given *type*.
     * @param type The type of events to listen for.
     * @param listener The listener function to register. This function will be called with an event object.
     * @param context In the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.
     */
    on(type: string, listener: (event: any) => void, context?: object): this;

    /**
     * Registers all listeners in the given object for the event type indicated by their key.
     * @param listeners A key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.
     */
    on(listeners: object): this;

    /**
     * Same as `on`, but removes the listener after it has been invoked by an event.
     * @param type The type of the event to listen for.
     * @param listener The listener function to register. This function will be called with an event object.
     * @param context In the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.
     */
    once(type: string, listener: (event: any) => void, context?: object): this;

    /**
     * Same as `on`, but removes the listener after it has been invoked by an event.
     * @param listeners A key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.
     */
    once(listeners: object): this;

    /**
     * Sets the given property.
     */
    set(property: string, value: any): this;

    /**
     * Sets all key-value pairs in the properties object as widget properties.
     */
    set(properties: object): this;

    /**
     * Notifies all registered listeners for the given *type* and passes the *event* object to the
     * listeners.
     * @param type The type of event to trigger
     * @param event The event object to pass to listener functions.
     */
    trigger(type: string, event: EventObject<this>): this;

    /**
     * An application-wide unique identifier automatically assigned to all native objects on creation.
     */
    static readonly cid: string;
}

interface PropertyChangedEvent<T, U> {
    readonly target: T;
    readonly timeStamp: number;
    readonly type: string;
    readonly value: U;
}

export {};
