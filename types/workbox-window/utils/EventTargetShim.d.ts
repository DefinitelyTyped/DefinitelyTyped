import { WorkboxEvent } from "../types/WorkboxEvent";

export class EventTargetShim {
    addEventListener(type: string, listener: EventListenerShim): void;
    removeEventListener(type: string, listener: EventListenerShim): void;
    dispatchEvent(evt: WorkboxEvent): void;
}

export {};

interface EventListenerShim {
    (evt: WorkboxEvent): void;
}
