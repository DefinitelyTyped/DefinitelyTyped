// Type definitions for burns 2.0
// Project: https://github.com/shalvah/burns#readme
// Definitions by: Timothy Onyiuke <https://github.com/timolinn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare const _Burns: Burns;

/**
 * Function type for handling events
 */
type HandlerFn = (payload ?: any) => any;

/**
 * This Type is an alias to the multiple
 * parameter types the `registerEvent` method accepts
 */
type Handlers = string | HandlerFn | HandlerFn[];

/**
 * Type Alias for event handlers
 */
type EventHandler = Handlers | Record<string, Handlers>;

/**
 * Burns configuration settings
 */
interface Config {
    defaultHandler?: HandlerFn;
    broadcaster?: string | null;
    pusher?: Record<string, any>;
}

/**
 * Burns
 */
declare class Burns {
    configure(config?: Config): this;

    registerEvents(newEvents: Record<string, EventHandler>): this;

    dispatch(eventName: string, eventData?: Record<string, any>, exclude?: { exclude?: any }): this;
}

export = _Burns;
