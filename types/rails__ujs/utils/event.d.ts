import { SelectorObject } from './dom';

export function fire(obj: EventTarget, name: string, data?: any): boolean;

export function stopEverything(e: Event): void;

export function delegate(
    element: EventTarget,
    selector: SelectorObject | string,
    eventType: string,
    handler: EventListener,
): void;
