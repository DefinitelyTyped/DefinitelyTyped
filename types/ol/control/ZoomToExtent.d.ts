import Control from 'ol/control/Control';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import { ObjectEvent } from 'ol/Object';
export interface Options {
    className?: string;
    target?: HTMLElement | string;
    label?: string | HTMLElement;
    tipLabel?: string;
    extent?: Extent;
}
export default class ZoomToExtent extends Control {
    constructor(opt_options?: Options);
    protected extent: Extent;
    protected handleZoomToExtent(): void;
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
