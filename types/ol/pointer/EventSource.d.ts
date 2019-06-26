import PointerEventHandler from './PointerEventHandler';

export default class EventSource {
    constructor(dispatcher: PointerEventHandler, mapping: { [key: string]: any });
    getEvents(): string[];
    getHandlerForEvent(eventType: string): ((p0: Event) => void);
}
