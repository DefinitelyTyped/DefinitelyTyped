export default class BaseEvent {
    constructor(type: string);
    /**
     * The event target.
     */
    target: any;
    /**
     * The event type.
     */
    type: string;
    /**
     * Stop event propagation.
     */
    preventDefault(): void;
    /**
     * Stop event propagation.
     */
    stopPropagation(): void;
}
export function preventDefault(evt: Event | BaseEvent): void;
export function stopPropagation(evt: Event | BaseEvent): void;
