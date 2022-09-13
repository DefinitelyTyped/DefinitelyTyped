export default class Event {
    constructor(type: string);
    target: any;
    type: string;
    preventDefault(): void;
    stopPropagation(): void;
}
export function preventDefault(evt: Event | Event): void;
export function stopPropagation(evt: Event | Event): void;
