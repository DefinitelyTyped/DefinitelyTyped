export { Event, EventTarget };

declare function Event(type: string): void;

type Listeners = Record<string, EventListenerOrEventListenerObject>;

declare class EventTarget {
    _listeners: Listeners;
    get listeners(): Listeners;
    addEventListener(type?: string, newListener?: EventListenerOrEventListenerObject): void;
    removeEventListener(type?: string, oldListener?: EventListenerOrEventListenerObject): void;
    dispatchEvent(event: Event): boolean;
}
