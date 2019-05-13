declare module 'ol/pointer/MsSource' {

  import EventSource from 'ol/pointer/EventSource';
  import PointerEventHandler from 'ol/pointer/PointerEventHandler';

  export default class MsSource extends EventSource {
    constructor(dispatcher: PointerEventHandler);
    cleanup(pointerId: number): void;
  }

}
