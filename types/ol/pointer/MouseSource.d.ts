import EventSource from 'ol/pointer/EventSource';
import PointerEventHandler from 'ol/pointer/PointerEventHandler';
export function prepareEvent(inEvent: Event, dispatcher: PointerEventHandler): { [key: string]: any };
export default class MouseSource extends EventSource {
    constructor(dispatcher: PointerEventHandler);
    cancel(inEvent: Event): void;
    cleanupMouse(): void;
}
