declare module 'ol/pointer/NativeSource' {

  import EventSource from 'ol/pointer/EventSource';
  import PointerEventHandler from 'ol/pointer/PointerEventHandler';

  export default class NativeSource extends EventSource {
    constructor(dispatcher: PointerEventHandler);
  }

}
