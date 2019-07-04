import EventSource from 'ol/pointer/EventSource';
import MouseSource from 'ol/pointer/MouseSource';
import PointerEventHandler from 'ol/pointer/PointerEventHandler';
export default class TouchSource extends EventSource {
    constructor(dispatcher: PointerEventHandler, mouseSource: MouseSource);
}
