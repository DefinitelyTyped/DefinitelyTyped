declare global {
    // Declare empty stub interfaces for environments where "dom" lib is not included
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface EventSource {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface EventSourceInit {}
}

export interface EventSourcePolyfillInit {
    withCredentials?: boolean;
    lastEventIdQueryParameterName?: string;
    heartbeatTimeout?: number;
    headers?: { [name: string]: string };
    Transport?: new() => any;
}

export interface Event {
    type: string;
    target: any;
}

export interface EventListener {
    (evt: Event): void;
}

export interface EventListenerObject {
    handleEvent(evt: Event): void;
}

export type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

export interface EventSourceEventMap {
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

export interface MessageEvent extends Event {
    data: any;
    lastEventId: string;
}

export class EventSourcePolyfill {
    static readonly CLOSED: 2;
    static readonly CONNECTING: 0;
    static readonly OPEN: 1;

    constructor(url: string, options?: EventSourcePolyfillInit);

    onerror: ((this: EventSource, ev: Event) => any) | null;
    onmessage: ((this: EventSource, ev: MessageEvent) => any) | null;
    onopen: ((this: EventSource, ev: Event) => any) | null;

    readonly readyState: number;
    readonly url: string;
    readonly withCredentials: boolean;
    readonly CLOSED: 2;
    readonly CONNECTING: 0;
    readonly OPEN: 1;

    close(): void;
    dispatchEvent(event: Event): boolean;
    addEventListener<K extends keyof EventSourceEventMap>(
        type: K,
        listener: (this: EventSource, ev: EventSourceEventMap[K]) => any,
        options?: any,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: any): void;
    removeEventListener<K extends keyof EventSourceEventMap>(
        type: K,
        listener: (this: EventSource, ev: EventSourceEventMap[K]) => any,
        options?: any,
    ): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: any): void;
}

// defined as `type` to be compatible with typescript's lib.dom.d.ts
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type EventSourceConstructor = {
    prototype: any;
    new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

export const EventSource: EventSourceConstructor;
export const NativeEventSource: EventSourceConstructor;
