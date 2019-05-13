declare module 'ol/events/Target' {

  import Disposable from 'ol/Disposable';
  import { ListenerFunction } from 'ol/events';
  import Event from 'ol/events/Event';

  export type EventTargetLike = EventTarget | Target;

  export default class Target extends Disposable {
    constructor();
    addEventListener(type: string, listener: ListenerFunction): void;
    dispatchEvent(event: any | Event | string): boolean;
    getListeners(type: string): ListenerFunction[];
    hasListener(opt_type?: string): boolean;
    removeEventListener(type: string, listener: ListenerFunction): void;
  }

}
