import EventSource from './EventSource';
import PointerEventHandler from './PointerEventHandler';

export function prepareEvent(inEvent: Event, dispatcher: PointerEventHandler): any;
export default class MouseSource extends EventSource {
    constructor(dispatcher: PointerEventHandler);
    cancel(inEvent: Event): void;
    cleanupMouse(): void;
}
