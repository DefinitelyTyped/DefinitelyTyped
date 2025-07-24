type EventCallback = (event: object) => void;

interface EventListenerOptions {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}

declare class EventTarget {
    constructor();

    addEventListener(type: string, listener: EventCallback, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventCallback, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
}

export default EventTarget;