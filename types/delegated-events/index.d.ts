// Type definitions for delegated-events 1.0
// Project: https://github.com/dgraham/delegated-events#readme
// Definitions by: Christopher Parsons <https://github.com/cwparsons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definitions based on the projects' flow definitions.
// https://github.com/dgraham/delegated-events/blob/master/delegated-events.js.flow

export interface EventListenerOptions {
    capture?: boolean;
}

export function on(
    name: string,
    selector: string,
    handler: EventListenerOrEventListenerObject,
    options?: EventListenerOptions
): void;

export function off(
    name: string,
    selector: string,
    handler: EventListenerOrEventListenerObject,
    options?: EventListenerOptions
): void;

export function fire(target: EventTarget, name: string, detail?: any): boolean;
