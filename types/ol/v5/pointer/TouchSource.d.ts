import EventSource from './EventSource';
import MouseSource from './MouseSource';
import PointerEventHandler from './PointerEventHandler';

export default class TouchSource extends EventSource {
    constructor(dispatcher: PointerEventHandler, mouseSource: MouseSource);
}
