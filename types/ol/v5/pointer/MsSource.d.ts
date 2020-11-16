import EventSource from './EventSource';
import PointerEventHandler from './PointerEventHandler';

export default class MsSource extends EventSource {
    constructor(dispatcher: PointerEventHandler);
    cleanup(pointerId: number): void;
}
