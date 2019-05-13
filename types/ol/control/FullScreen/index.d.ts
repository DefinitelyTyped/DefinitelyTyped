declare module 'ol/control/FullScreen' {

  import Control from 'ol/control/Control';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export default class FullScreen extends Control {
    constructor(opt_options?: Options);
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
  }

  export interface Options {
    className?: string;
    label?: string | Text | HTMLElement;
    labelActive?: string | Text | HTMLElement;
    tipLabel?: string;
    keys?: boolean;
    target?: HTMLElement | string;
    source?: HTMLElement | string;
  }

}
