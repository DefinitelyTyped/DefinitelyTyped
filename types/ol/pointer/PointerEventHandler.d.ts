import Target from '../events/Target';
import EventSource from './EventSource';
import PointerEvent from './PointerEvent';

export default class PointerEventHandler extends Target {
    constructor(element: Element | HTMLDocument);
    cancel(data: any, event: Event): void;
    cloneEvent(event: Event, inEvent: Event | Touch): any;
    down(data: any, event: Event): void;
    enter(data: any, event: Event): void;
    enterOver(data: any, event: Event): void;
    fireEvent(inType: string, data: any, event: Event): void;
    fireNativeEvent(event: Event): void;
    leave(data: any, event: Event): void;
    leaveOut(data: any, event: Event): void;
    makeEvent(inType: string, data: any, event: Event): PointerEvent;
    move(data: any, event: Event): void;
    out(data: any, event: Event): void;
    over(data: any, event: Event): void;
    registerSource(name: string, source: EventSource): void;
    registerSources(): void;
    up(data: any, event: Event): void;
    wrapMouseEvent(eventType: string, event: Event): PointerEvent;
}
