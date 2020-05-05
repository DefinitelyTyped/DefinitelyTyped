export default class BaseEvent {
    constructor(type: string);
    target: any;
    type: string;
    preventDefault(): void;
    stopPropagation(): void;
}
export function preventDefault(evt: Event | BaseEvent): void;
export function stopPropagation(evt: Event | BaseEvent): void;
