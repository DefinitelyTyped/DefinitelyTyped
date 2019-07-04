import Target from 'ol/events/Target';
import EventSource from 'ol/pointer/EventSource';
import PointerEvent from 'ol/pointer/PointerEvent';
export default class PointerEventHandler extends Target {
    constructor(element: Element | HTMLDocument);
    leaveOut(data: { [key: string]: any }, event: Event): void;
    cancel(data: { [key: string]: any }, event: Event): void;
    down(data: { [key: string]: any }, event: Event): void;
    enter(data: { [key: string]: any }, event: Event): void;
    enterOver(data: { [key: string]: any }, event: Event): void;
    fireEvent(inType: string, data: { [key: string]: any }, event: Event): void;
    fireNativeEvent(event: Event): void;
    leave(data: { [key: string]: any }, event: Event): void;
    cloneEvent(event: Event, inEvent: Event | Touch): { [key: string]: any };
    makeEvent(inType: string, data: { [key: string]: any }, event: Event): PointerEvent;
    move(data: { [key: string]: any }, event: Event): void;
    out(data: { [key: string]: any }, event: Event): void;
    over(data: { [key: string]: any }, event: Event): void;
    registerSource(name: string, source: EventSource): void;
    registerSources(): void;
    up(data: { [key: string]: any }, event: Event): void;
    wrapMouseEvent(eventType: string, event: Event): PointerEvent;
}
