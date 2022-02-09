export type EventEmitterContext = unknown | EventEmitter;
export interface EventEmitterOptions {
    context: EventEmitterContext;
}
export type Listener = (...args: any) => void;
export type Limit = (data: any) => void;

export interface Stoppable {
    stop: () => void;
}

export default class EventEmitter {
    constructor(options?: EventEmitterOptions);
    ['triggerListenerChange'](): void;

    get hasListeners(): boolean;

    on(eventName: string, listener: Listener): Stoppable;
    off(eventName: string, listener: Listener): void;
    onAny(listener: Listener): Stoppable;
    offAny(listener: Listener): void;
    when(eventName: string, limit: Limit, listener: Listener): Stoppable;
    once(eventName: string, listener: Listener): Stoppable;

    emit(event: string, ...args: any): void;
    emitWithContext(ctx: EventEmitterContext, eventName: string, ...args: any): void;
}
