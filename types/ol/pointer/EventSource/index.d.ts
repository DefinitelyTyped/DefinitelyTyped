declare module 'ol/pointer/EventSource' {

  import PointerEventHandler from 'ol/pointer/PointerEventHandler';

  export default class EventSource {
    constructor(dispatcher: PointerEventHandler, mapping: { [key: string]: any });
    getEvents(): string[];
    getHandlerForEvent(eventType: string): ((param0: Event) => void);
  }

}
