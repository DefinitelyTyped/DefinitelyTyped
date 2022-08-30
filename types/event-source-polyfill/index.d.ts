// Type definitions for event-source-polyfill 1.0
// Project: https://github.com/Yaffle/EventSource
// Definitions by: Emily Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    // Declare empty stub interfaces for environments where "dom" lib is not included
    // tslint:disable-next-line:no-empty-interface
    interface EventSource {}
    // tslint:disable-next-line:no-empty-interface
    interface EventSourceInit {}
}

export interface EventSourcePolyfillInit {
    withCredentials?: boolean;
    lastEventIdQueryParameterName?: string;
    heartbeatTimeout?: number;
    headers?: { [name: string]: string };
    Transport?: new () => any;
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
    static readonly CLOSED: number;
    static readonly CONNECTING: number;
    static readonly OPEN: number;

    constructor(url: string, options?: EventSourcePolyfillInit);

    onerror: ((this: EventSource, ev: Event) => any) | null;
    onmessage: ((this: EventSource, ev: MessageEvent) => any) | null;
    onopen: ((this: EventSource, ev: Event) => any) | null;

    readonly readyState: number;
    readonly url: string;
    readonly withCredentials: boolean;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;

    close(): void;
    dispatchEvent(event: Event): boolean;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: any): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: any): void;
    removeEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: any): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: any): void;
}

// defined as `type` to be compatible with typescript's lib.dom.d.ts
// tslint:disable-next-line:interface-over-type-literal
export type EventSourceConstructor = {
    prototype: any;
    new (url: string, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

export const EventSource: EventSourceConstructor;
export const NativeEventSource: EventSourceConstructor;
