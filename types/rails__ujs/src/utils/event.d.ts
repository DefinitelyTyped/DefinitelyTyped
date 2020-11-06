export function fire<D = unknown>(obj: EventTarget, name: string, data: D): boolean;

export function stopEverything(e: Event): void;

export function delegate<E extends Element = HTMLElement>(
    element: E,
    selector: string,
    eventType: string,
    handler: EventListenerOrEventListenerObject,
): void;
