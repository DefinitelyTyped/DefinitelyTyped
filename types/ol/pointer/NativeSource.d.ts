import EventSource from './EventSource';
import PointerEventHandler from './PointerEventHandler';

export default class NativeSource extends EventSource {
    constructor(dispatcher: PointerEventHandler);
}
