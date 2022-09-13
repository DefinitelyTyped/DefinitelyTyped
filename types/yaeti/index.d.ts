// Type definitions for yaeti 1.0
// Project: https://www.npmjs.com/package/yaeti
// Definitions by: Eli Sadoff <https://github.com/snood1205>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

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
