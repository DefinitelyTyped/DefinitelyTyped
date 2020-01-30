import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import Control from './Control';

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
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
